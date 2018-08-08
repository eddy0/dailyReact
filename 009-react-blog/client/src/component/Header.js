import React from 'react'
import Nav from './Nav'
import Search from './Search'
import User from './User'

class Header extends React.Component {
    render() {
        return (
            <header className='header'>
                    <Nav/>
                    <Search/>
                    <User/>
            </header>
        )
    }
}

export default Header