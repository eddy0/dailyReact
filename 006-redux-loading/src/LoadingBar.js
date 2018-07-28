import React from 'react'
import {connect} from 'react-redux'
import styled, {css} from 'styled-components';

const LOADINGBAR_SHOW = 'LOADINGBAR_SHOW'
const LOADINGBAR_HIDE = 'LOADINGBAR_HIDE'

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


const StyledDiv = styled.div`
    opacity: ${ (props) => props.opacity};
    width: 100%;
    transform: scaleX(0);
    will-change: transform, opacity;
    height: 3px;
    position: fixed;
    background-color: red;
    transition: transform ${ (props) => props.duration}ms linear, opacity ${ (props) => props.duration+ 100}ms linear;
    transform-origin: left;
    ${ props => props.show && css`
        transform: scaleX(0.9);
     `};

     ${ props => props.hide && css`
         transform: scaleX(1);
      `};

`


class LoadingBar extends React.Component {
    // static propTypes = {
    //     className: string,
    //     loading: number,
    // }

    static defaultProps = {
        loading: false,
    }

    style() {
        let opacity = this.props.loading? 1 : 1
        let translate = this.props.loading ? 90 : 100
        let duration = this.props.loading ? 1000 : 10
        let t = {
            opacity: opacity,
            width: '100%',
            transform: `scaleX(${0 / 100})`,
            willChange: 'transform, opacity',
            height: 3,
            position: 'fixed',
            backgroundColor: 'red',
            transition: `transform ${duration}ms linear`,
            transformOrigin: 'left',
        }
        return t
    }

    load() {
        let opacity = this.props.loading? 1 : 0
        let translate = this.props.loading ? 90 : 100
        let duration = this.props.loading ? 1000 : 10
        let t = {
            opacity: opacity,
            transform: `scaleX(${translate / 100})`,
            transition: `transform ${duration}ms linear, opacity ${duration + 100}ms linear`,
        }
        return t

    }


    render() {
        let translate = this.props.loading ? 90 : 100
        let duration = this.props.loading ? 1000 : 10
        let opacity = this.props.loading? 1 : 1

        return(
            <StyledDiv
                duration={duration}
                loading={this.props.loading}
                opacity={opacity}
                show={this.props.loading}
            />

        )
    }
}


const mapStateToProps = ({loading}) => {
    return {
        loading,
    }
}

const ConnectedLoadingBar = connect(mapStateToProps)(LoadingBar)


export {
    ConnectedLoadingBar as LoadingBar,
    showLoading,
    hideLoading,
    loadingReducer,}
