import React, {Component} from 'react'
import PropTypes from 'prop-types'

class NewBlog extends Component {
    render() {
        return (
            <div>
                new blog
                {this.props.text}
            </div>
        )
    }
}

NewBlog.propTypes = {}

export default NewBlog