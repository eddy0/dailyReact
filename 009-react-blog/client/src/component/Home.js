import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Card from './Card'

class Home extends Component {
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