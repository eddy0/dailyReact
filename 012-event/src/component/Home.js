import React, {Component} from 'react'
import {Link} from 'react-router-dom'



class Home extends Component {
    render() {
        return (
            <div>
                welcome here
                <Link to='/events'>link to the dashboard</Link>
            </div>
        )
    }
}


export default Home