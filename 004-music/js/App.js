
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
            canPlay: false,
        }
    }

    fetchData = () => {
        let music = window.localStorage.getItem('music')
        if (music && music.length > 0) {
            music = JSON.parse(music)
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
        let {src,song, currentTime, duration, artist, img, mode} = this.state
        log('data', artist, song, )
        localStorage.clear()
        let data = JSON.stringify({src, song, currentTime, duration, artist, img, mode})
        if (currentTime !== undefined) {
            localStorage.music = data
        }
    }

    componentDidMount() {
        let isOnIOS = navigator.userAgent.match(/iPhone/i)
        let eventName = isOnIOS ? "pagehide" : "beforeunload";
        window.addEventListener( eventName , () => {
            this.saveData()
        })


        if (this.state.currentTime ) {
            let time = this.state.currentTime
            this.audio.currentTime = time
            // safari need to download the music fist then currentTime can be set
            if (this.audio.currentTime === 0 && time !== 0) {
                this.audio.oncanplay = () => {
                    this.audio.currentTime = this.state.currentTime
                }
            }
        }

    }

    componentWillUnmount() {
        // this.saveData()
    }

    handlePlay = (status) => {
        this.setState((prevState) => ({
            isLoading: false,
            isPlay: !prevState.isPlay,
            canPlay: true,
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

        this.audio.addEventListener('canplay', () => {
            if (this.state.canPlay === true && this.audio.readyState === 4)  {
                this.audio.play()
                this.setState((prevState) => ({
                    isLoading: false,
                    isPlay: true,
                }))
            }
        })
    }

    handleSwitch = (offset) => {
        let index = this.album.findIndex((song) => song.song === this.state.song )
        if (index > -1) {
            let nextIndex =(this.album.length + index + offset ) % this.album.length
            this.setState(() => ({
                ...this.album[nextIndex],
                currentTime: 0
            }))
            this.audio.currentTime = 0
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

    changeBar = (percentage) => {
        // this.audio.currentTime = this.audio.duration * percentage / 100
            this.audio.currentTime = percentage

    }

    render() {
        return(
            <React.Fragment>
                <div className='mask' style={{backgroundImage: `url(${this.state.img})`}}>
                </div>
                <div className="container"  >
                    <Img img={this.state.img} />
                    <div className="music__info mt--md" >
                        <div className="info__song">{this.state.song}</div>
                        <div className="info__artist">{this.state.artist}</div>
                    </div>
                    <Progress currentTime = {this.state.currentTime}
                        duration={this.state.duration}
                        changeBar={this.changeBar}
                        audio={this.state.audio}
                    />

                    <Controller {...this.state}
                        audio={this.state.audio }
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
