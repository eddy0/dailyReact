import React from 'react'
import {connect} from 'react-redux'

const LOADINGBAR_SHOW = 'LOADINGBAR_SHOW'
const LOADINGBAR_HIDE = 'LOADINGBAR_HIDE'

const loadingReducer = (state=false, action) => {
    switch (action.type) {
        case LOADINGBAR_SHOW:
            return action.loading
        case LOADINGBAR_HIDE:
            return action.loading
        default:
            return state
    }
}

const showLoading = () => {
    return {
        type: LOADINGBAR_SHOW,
        loading: true,
    }
}

const hideLoading = () => {
    return {
        type: LOADINGBAR_HIDE,
        loading: false,
    }
}

class LoadingBar extends React.Component {
    // static propTypes = {
    //     className: string,
    //     loading: number,
    // }


    static defaultProps = {
        loading: false,
    }

    style() {
        let opacity = this.props.loading? 1 : 0
        let translate = this.props.loading ? 0 : 100
        let t = {
            opacity: opacity,
            width: '100%',
            transform: `translateX(${translate}%)`,
            willChange: 'transform, opacity',
            height: 3,
            position: 'fixed',
            backgroundColor: 'red',
            transition: 'width 2s linear',
        }
        return t
    }

    hide() {
        this.setState(() => ({
            loading: 0,
        }))
    }

    show() {
        this.setState(() => ({
            loading: 100,
        }))
    }


    render() {
        return(
            <div style={this.style()}>

            </div>
        )
    }
}

const mapStateToProps = ({loading}) => {
    return loading
}


export {
    LoadingBar,
    showLoading,
    hideLoading,
    loadingReducer,}
