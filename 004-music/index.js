const Img  = (props) => (
    <div className='music__img'>
        <img src={props.img} alt=""/>
    </div>
)

const PlayModel = (props) => {
    return (
        <div className="controller__play-model">
            <svg className='icon'>
                <use xlinkHref='./sprites.svg#icon-loop'></use>
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
        <svg className='icon'>
            <use xlinkHref='./sprites.svg#icon-play'></use>
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

class Controller extends React.Component {
    constructor() {
        super()
    }

    render() {
        return(
            <div className="music__controller mt--lg">
                <PlayModel />
                <div className="controller__main">
                    <PlayBack />
                    <Play />
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
                name: '大地的异乡人',
                artist: '木小雅',
                src: '',
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
                            <div className="info__name">{this.state.name}</div>
                            <div className="info__artist">{this.state.artist}</div>
                        </div>
                        <Controller />
                    </div>
                </React.Fragment>
            )
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    )
