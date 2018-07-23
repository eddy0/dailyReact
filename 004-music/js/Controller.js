
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
