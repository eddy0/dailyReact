import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Card from './Card'
import {_getTweets} from '../utils/_DATA'

class Home extends Component {

    componentWillMount() {
        _getTweets().then(data => console.log(data))
    }
    render() {
        return (
            <div>
                <main className='row u-tp-md'>
                    <div className="main">
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </main>
            </div>
        )
    }
}

Home.propTypes = {}

export default Home