
class Progress extends React.Component {
    state = {
        left: 0,
        isDown: false
    }



    static getDerivedStateFromProps(props, state) {
        //  因为父组件 setState 是异步的, 子组件更新之后父组件还没有更新, 所以会弹回去一下
        //  用一个 lazy 来阻止第一次弹回去
        if (state.lazy) {
            return {
                lazy: false
            }
        }
        let {currentTime , duration} = props
        let buffered = 0
        let left = window.Math.floor(currentTime / duration * 100)
        left = state.isDown === false ? left : state.left
        // log('currentTime', state.isDown, currentTime, state.info)
        if (props.audio && props.audio.buffered.length ) {
            let bufferedTime = props.audio.buffered.end(0)
            buffered = Math.round(100 * bufferedTime / duration)
        }
            return {
                left: left,
                buffered: buffered,
            }
    }

    // componentDidUpdate() {
    //     let {currentTime , duration} = this.props
    //     let left = window.Math.floor(currentTime / duration * 100)
    //     left = this.state.isDown === false ? left : this.state.left
    //     log('update', currentTime)
    //
    // }

    formatTime = (time) => {
        let minute = Math.floor(time / 60) || 0
        let second = Math.round(time % 60) || 0
        minute = minute >= 10 ? String(minute) : `0${minute}`
        second = second >= 10 ? String(second) : `0${second}`
        return `${minute}:${second}`
    }

    componentDidMount() {
        let isMobile = navigator.userAgent.match(/Mobile/i)
        let eventName = isMobile ? ['touchend',  'touchmove'] : ['mouseup', 'mousemove']
        log('eventName', eventName)
        window.addEventListener(eventName[0], this.handleTouchEnd )
        window.addEventListener(eventName[1], this.handleTouchMove )
    }

    handleTouchStart = (e) => {
        this.setState(() => {
            return {
                isDown: true,
                info: this.props.currentTime
            }
        })
    }

    handleTouchEnd = () => {
        if (this.state.isDown) {
            this.props.changeBar(this.state.info)
        }

        this.setState(() => {
            return {
                isDown: false,
                lazy: true,
            }
        })
    }

    handleTouchMove = (e) => {
        if (this.state.isDown) {
            // check if touch event or mouse move event
            let x = e.touches !== undefined ? e.touches[0].clientX : e.clientX
            let position = this.bar.offsetLeft
            this.offset = x - position
            let limit = this.bar.offsetWidth - this.offset
            if (limit >= 0 && limit <= this.bar.offsetWidth ) {
                let percentage = Math.round(this.offset / this.bar.offsetWidth * 100)
                this.setState((prev) => {
                    return {
                        left: percentage,
                        info: this.props.duration * percentage / 100
                    }
                })
            }
        }
    }

    handleBuffered = () => {
        let {currentTime, duration} = props
        if (this.audio.buffered.length ) {
            let bufferedTime = this.audio.buffered.end(0)
            let buffered = Math.round(100 * bufferedTime / this.audio.duration)
            this.setState(() => {
                buffered
            })
        }
    }

    render() {
        let {currentTime , duration} = this.props
        return (
            <div className='process__box mt--lg'>
                <div className="music__current">{this.formatTime(currentTime)}</div>

                <div className='process__bar'
                    ref={(bar) => this.bar = bar} >
                    <div className="process_buffered"
                        style={{width: `${this.state.buffered}%`}}
                    />
                    <div className="process__done" style={{width: `${this.state.left}%`}} />
                    <div className={`process__dot ${this.state.isDown? 'active': ''}`} style={{left: `${this.state.left}%`}}
                        onTouchStart={this.handleTouchStart}
                        onMouseDown={this.handleTouchStart}
                        ref={(dot) => this.dot = dot}
                    >
                        {
                            this.state.isDown
                                ? <div className='process__info'>{this.formatTime(this.state.info)}</div>
                                : null
                        }


                                    </div>

                </div>
                <div className="music__duration">{this.formatTime(duration)}</div>

            </div>
        )
    }
}
