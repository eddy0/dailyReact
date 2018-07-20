const log = console.log.bind(console)

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
        <svg className='icon'>
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
        <svg className='icon'>
            <use xlinkHref='./sprites.svg#icon-forward'></use>
        </svg>
    )
}

class Progress extends React.Component {
    
    formatTime = (time) => {
        let minute = Math.floor(time / 60) || 0
        let second = Math.round(time % 60) || 0
        log('time', minute, second)
        minute = minute >= 10 ? String(minute) : `0${minute}`
        second = second >= 10 ? String(second) : `0${second}`
        return `${minute}:${second}`
    }
    
    render() {
        let {currentTime , duration} = this.props
        let left = window.Math.floor(currentTime / duration * 100)
        left = left ? left : 0
        return (
            <div className='process__box mt--lg'>
                <div className="music__current">{this.formatTime(currentTime)}</div>
    
                <div className='process__bar'>
                    <div className="process__done" style={{width: `${left}%`}} />
                    <div className="process__dot" style={{left: `${left}%`}}
                        // onMouseUp={}
                        // onMouseMove={}
                        // onMouseDown={}
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
                    <PlayBack  />
                    <Play handlePlay={this.props.handlePlay} isPlay={this.props.isPlay} />
                    <PlayForward />
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
                mode: 'repeat',
            }
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
          
        }
        
        componentWillUnmount() {
            // save in to localStorage
            window.clearInterval(this.interval)
        }
    
        handlePlay = (status) => {
            this.setState((prevState) => ({
                isPlay: !prevState.isPlay
            }))
            if (status === true) {
                this.audio.play()
            } else {
                this.audio.pause()
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
        
        handleEnd = () => {
            if (this.state.mode === 'repeat') {
                this.audio.currentTime = 0
                this.audio.play()
            } else if (this.state.mode === 'normal') {
            
            }
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
                        <Progress currentTime = {this.state.currentTime} duration={this.state.duration} />
                        <Controller {...this.state} audio={this.state.audio }
                            handlePlay={this.handlePlay}
                            handleMode={this.handleMode} />
                    </div>
                    <audio src={this.state.src} ref={(audio) => this.audio = audio} onEnded={this.handleEnd}></audio>
                </React.Fragment>
            )
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    )
