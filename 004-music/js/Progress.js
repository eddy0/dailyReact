
class Progress extends React.Component {
    state = {
        left: 0,
        isDown: false
    }



    static getDerivedStateFromProps(props, state) {
        let {currentTime , duration} = props
        let left = window.Math.floor(currentTime / duration * 100)
        left = state.isDown === false ? left : state.left
        return {
            left: left,
        }

    }

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
            }
        })
    }

    handleTouchEnd = () => {
        this.setState(() => {
            return {
                isDown: false,
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
                    }
                }, () => this.props.changeBar(percentage))
            }
        }
    }

    render() {
        let {currentTime , duration} = this.props

        return (
            <div className='process__box mt--lg'>
                <div className="music__current">{this.formatTime(currentTime)}</div>

                <div className='process__bar'
                    ref={(bar) => this.bar = bar} >

                    <div className="process__done" style={{width: `${this.state.left}%`}} />
                    <div className={`process__dot ${this.state.isDown? 'active': ''}`} style={{left: `${this.state.left}%`}}
                        onTouchStart={this.handleTouchStart}
                        onMouseDown={this.handleTouchStart}
                        ref={(dot) => this.dot = dot}
                    />

                </div>
                <div className="music__duration">{this.formatTime(duration)}</div>

            </div>
        )
    }
}
