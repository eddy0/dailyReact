
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
    
    updateTime = () => {
        let audio = this.audio
        let currentTime = audio.currentTime
        let duration = audio.duration
        this.setState(() => {
            return {
                currentTime,
                duration,
                audio,
            }
        })
    }

    changeBar = (offset) => {
        this.audio.currentTime = this.audio.duration * offset / 100
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
                    <Progress currentTime = {this.state.currentTime}
                        duration={this.state.duration}
                        changeBar={this.changeBar}
                    />
                    <Controller {...this.state} audio={this.state.audio }
                        handlePlay={this.handlePlay}
                        handleMode={this.handleMode}
                        handleSwitch={this.handleSwitch}
                    />
                </div>
                <audio src={this.state.src}
                    ref={(audio) => this.audio = audio}
                    onTimeUpdate={this.updateTime}
                    onEnded={this.handleEnd}
                    onCanPlay={this.autoPlay}
                    onLoadStart={this.handleLoad}
                />
            </React.Fragment>
        )
    }
}
