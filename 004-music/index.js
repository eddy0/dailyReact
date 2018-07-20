const Img  = (props) => (
    <div className='music__img'>
        <img src={props.img} alt=""/>
    </div>
)

class Controller extends React.Component {
    constructor() {
        super()
    }

    render() {
        return(
            <div className="music__controller">
                <div className="controller__play-model">
                    <svg className='icon'>
                        <use xlinkHref='./sprites.svg#icon-loop2'></use>
                    </svg>
                </div>
                <div className="controller__main"></div>
                <div className="controller__menu"></div>
            </div>
        )
    }
}

    class App extends React.Component {
        constructor() {
            super()
            this.state = {
                img: 'https://wangwenyue.github.io/Music_Player/pics/3.jpg'
            }
        }

        render() {


            return(
                <React.Fragment>
                    <div className='mask' style={{backgroundImage: `url(${this.state.img})`}}>
                    </div>
                    <div className="container">
                        <Img img={this.state.img} />
                        <div className="music__info mt--lg" >
                            <div className="info__name">大地的异乡人</div>
                            <div className="info__artist">木小雅</div>
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
