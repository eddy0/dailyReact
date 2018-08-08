import React, {Component} from 'react'
import PropTypes from 'prop-types'

class User extends Component {
    render() {
        return (
            <div className='header__user user'>
                <button className='btn user__login'>login</button>
                <button className='btn user__signup'>sign up</button>

            </div>
        )
    }
}

User.propTypes = {}

export default User