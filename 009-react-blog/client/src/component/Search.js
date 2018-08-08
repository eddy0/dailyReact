import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Search extends Component {
    render() {
        return (
            <form action="" className='header__search search'>
                <input type="text" className='search__input' placeholder='search'  />
            </form>
        )
    }
}

Search.propTypes = {}

export default Search