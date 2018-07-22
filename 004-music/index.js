const log = console.log.bind(console)

const fetchAlbum = () => {
    let list = [
        {
            img: 'https://wangwenyue.github.io/Music_Player/pics/3.jpg',
            song: 'Chasing Pavement',
            artist: 'Adele',
            src: 'https://raw.githubusercontent.com/eddy0/ReactExpress/master/static/music/4.mp3',
        },
        {
            img: 'https://wangwenyue.github.io/Music_Player/pics/1.jpg',
            song: '走在冷风中',
            artist: '周二珂',
            src: 'https://raw.githubusercontent.com/eddy0/ReactExpress/master/static/music/1.mp3',
        },
        {
            img: 'https://wangwenyue.github.io/Music_Player/pics/2.jpg',
            song: '夜空中最亮的星',
            artist: '逃跑计划',
            src: 'https://raw.githubusercontent.com/eddy0/ReactExpress/master/static/music/3.mp3',
        },
    ]

    return Promise.resolve(list)
}

const random = (a, b) => {
    return Math.floor( Math.random() * (b - a + 1) + a )
}

const Img  = (props) => (
    <div className='music__img'>
        <img src={props.img} alt=""/>
    </div>
)

const PlayModel = (props) => {
    return (
        <div className="controller__play-model">
            <svg className='icon' onClick={() =>props.handleMode()}>
                <use xlinkHref={`./sprites.svg#icon-${props.mode}`}></use>
            </svg>
        </div>
    )
}

const Menu = (props) => {
    return (
        <div className="controller__menu">
            <svg className='icon'>
                <use xlinkHref='./sprites.svg#icon-menu'></use>
            </svg>
        </div>
    )
}

const PlayBack = (props) => {
    return (
        <svg className='icon' onClick={() => props.handleSwitch(-1)} >
            <use xlinkHref='./sprites.svg#icon-backward'></use>
        </svg>
    )
}

const Play = (props) => {
    return (
        <svg className='icon' onClick={() => props.handlePlay(!props.isPlay)}>
            {
                props.isPlay === true
                    ? <use xlinkHref='./sprites.svg#icon-pause'></use>
                    : <use xlinkHref='./sprites.svg#icon-play'></use>
            }

        </svg>
    )
}

const PlayForward = (props) => {
    return (
        <svg className='icon' onClick={() => props.handleSwitch(1)}>
            <use xlinkHref='./sprites.svg#icon-forward'></use>
        </svg>
    )
}

class Progress extends React.Component {
    state = {
        isDown: false
    }

    formatTime = (time) => {
        let minute = Math.floor(time / 60) || 0
        let second = Math.round(time % 60) || 0
        minute = minute >= 10 ? String(minute) : `0${minute}`
        second = second >= 10 ? String(second) : `0${second}`
        return `${minute}:${second}`
    }

    componentDidMount() {
        window.addEventListener('mouseup', this.handleMouseUp )
    }

    handleMouseDown = (e) => {
        let x = e.clientX
        this.setState(() => {
            return {
                isDown: true,
                position: x,
            }
        })
    }

    handleMouseUp = () => {
        this.setState(() => {
            return {
                isDown: false,
            }
        })
    }

    handleMouseMove = (e) => {
        e.preventDefault()
        if (this.state.isDown) {
            let x = e.clientX
            let offset = this.state.position - x
            let time = this.props.currentTime + offset
            log(x, offset, time, this.bar.offsetWidth)
            if (time > 0 && time <= this.bar.offsetWidth ) {
                this.props.changeBar(offset)
            }
        }

    }

    render() {
        let {currentTime , duration} = this.props
        let left = window.Math.floor(currentTime / duration * 100)
        left = left ? left : 0
        return (
            <div className='process__box mt--lg'>
                <div className="music__current">{this.formatTime(currentTime)}</div>

                <div className='process__bar' ref={(bar) => this.bar = bar} >
                    <div className="process__done" style={{width: `${left}%`}} />
                    <div className="process__dot" style={{left: `${left}%`}}
                        onMouseDown={this.handleMouseDown}
                        onMouseMove={this.handleMouseMove}

                    />

                </div>
                <div className="music__duration">{this.formatTime(duration)}</div>

            </div>
        )
    }
}

class Controller extends React.Component {
    render() {
        return(
            <div className="music__controller mt--lg">
                <PlayModel mode={this.props.mode}  handleMode={this.props.handleMode}  />
                <div className="controller__main">
                    <PlayBack handleSwitch={this.props.handleSwitch}  />
                    <Play handlePlay={this.props.handlePlay} isPlay={this.props.isPlay} />
                    <PlayForward handleSwitch={this.props.handleSwitch} />
                </div>
                <Menu />
            </div>
        )
    }
}

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            img: 'https://wangwenyue.github.io/Music_Player/pics/3.jpg',
            song: 'Chasing Pavement',
            artist: 'Adele',
            src: 'https://raw.githubusercontent.com/eddy0/ReactExpress/master/static/music/4.mp3',
            isPlay: false,
            mode: 'normal',
        }
    }

    fetchData = () => {
        let music = window.localStorage.getItem('music')
        if (music && music.length > 0) {
            this.setState(() => {
                return {
                    ...music
            }})
        }

        fetchAlbum().then((data) => {
            this.album = data
        })
    }

    componentWillMount() {
        this.fetchData()
    }

    saveData = () => {
        let data = JSON.stringify(this.state)
        localStorage.music = 'ok'
    }

    componentDidMount() {
        let audio = this.audio
        this.interval = window.setInterval(() => {
            let currentTime = audio.currentTime
            let duration = audio.duration
            this.setState(() => {
                return {
                    currentTime,
                    duration,
                    audio: audio,
                }
            })
        },1000)
        window.addEventListener('beforeunload ', this.saveData.bind(this))

    }

    componentWillUnmount() {
        window.clearInterval(this.interval)
        window.removeEventListener('beforeunload ', this.saveData.bind(this))
        this.saveData()
    }

    handlePlay = (status) => {
        this.setState((prevState) => ({
            isLoading: false,
            isPlay: !prevState.isPlay,
        }))
        if (status === true) {
            this.audio.play()
        } else {
            this.audio.pause()
        }
    }

    handleLoad = () => {
        this.setState((prevState) => ({
            isLoading: true,
            isPlay: false,
        }))
    }

    handleSwitch = (offset) => {
        let index = this.album.findIndex((song) => song.song === this.state.song )
        if (index > -1) {
            let nextIndex =(this.album.length + index + offset ) % this.album.length
            this.setState(() => ({
                ...this.album[nextIndex]
            }))
        }
    }

    handleMode = () => {
        let modes = ['repeat', 'shuffle', 'normal']
        let index = modes.findIndex((mode) => this.state.mode === mode )
        if (index > -1) {
            let nextIndex =(index + 1 ) % modes.length
            this.setState(() => ({
                mode: modes[nextIndex]
            }))
        }

    }

    autoPlay = () => {
        this.audio.addEventListener('canplay', () => {
            this.audio.play()
            this.setState(() => ({
                isPlay: true,
            }))
        })
    }

    handleRepeatMode = () => {
        this.audio.currentTime = 0
    }

    handleNormalMode = () => {
        let index = this.album.findIndex((song) => song.song === this.state.song )
        if (index > -1) {
            let nextIndex =(index + 1 ) % this.album.length
            this.setState(() => ({
                ...this.album[nextIndex]
            }))
        }
    }

    handleShuffleMode = () => {
        let index = Math.floor( Math.random() * this.album.length )
        this.setState(() => ({
            ...this.album[index]
        }))
    }

    handleEnd = () => {
        const map = {
            'repeat': this.handleRepeatMode,
            'normal': this.handleNormalMode,
            'shuffle': this.handleShuffleMode,
        }
        let mode = this.state.mode
        map[mode]()
    }

    changeBar = (offset) => {
        this.setState((prevState) => ({
            currentTime: prevState.currentTime + offset
        }))
    }

    render() {
        return(
            <React.Fragment>
                <div className='mask' style={{backgroundImage: `url(${this.state.img})`}}>
                </div>
                <div className="container">
                    <Img img={this.state.img} />
                    <div className="music__info mt--md" >
                        <div className="info__song">{this.state.song}</div>
                        <div className="info__artist">{this.state.artist}</div>
                    </div>
                    <Progress currentTime = {this.state.currentTime} duration={this.state.duration} changeBar={this.changeBar}/>
                    <Controller {...this.state} audio={this.state.audio }
                        handlePlay={this.handlePlay}
                        handleMode={this.handleMode}
                        handleSwitch={this.handleSwitch}
                    />
                </div>
                <audio src={this.state.src}
                    ref={(audio) => this.audio = audio}
                    onEnded={this.handleEnd}
                    onCanPlay={this.autoPlay}
                    onLoadStart={this.handleLoad}
                />
            </React.Fragment>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)
