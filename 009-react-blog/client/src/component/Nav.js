import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'

class Nav extends Component {
    render() {
        return (
            <ul className="header__nav">
                <li>
                    <NavLink exact to='/' className="nav__item" activeClassName='nav__item--active'>Home</NavLink>
                </li>
                <li>
                    <NavLink exact to='/new' className="nav__item" activeClassName='nav__item--active'>New</NavLink>
                </li>

            </ul>
        )
    }
}

Nav.propTypes = {}

export default Nav