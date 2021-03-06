import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar, faComment, faBookmark} from '@fortawesome/free-solid-svg-icons'


const Author = () => {
    return (
        <div className="feed__author">
            <a href="/user/{{t.uid}}" className="author-avatar">
                <img src="https://vip.kybmig.cc/uploads/avatar/default.gif" alt="img" />
            </a>
            <div className="author-detail">
                <div className="author-name">
                    <a href="/user/{{t.uid}}"> t.author.username</a>
                </div>
                <span className="author-note">
                        t.author.note
                    </span>
            </div>
        </div>
    )
}

const Content = () => {
    return (
        <div className="card__content-box">
            <a href="/topic/t._id" className="content-title" style={{display: 'inline-block'}}>
                <span>t.title</span>
            </a>
            <a href="" className="content-main brief">
                            <span className="content-detail">
                               t.brief
                            </span>
                <span className="content-expand">
                                <span>more</span>
                                <svg className="icon icon-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" /></svg>
                            </span>
            </a>
        </div>
    )
}

const CTA = () => {
    return (
        <div className="card__action">

                    <span className="action-star  t.star_status ">
                    <FontAwesomeIcon icon={faStar} className="fas fa-star icon-font icon-star" />

                    <span className="star-count">
                        0 &nbsp;Stars
                    </span>
                </span>

            <span className="action-comments">
                        <a href="/topic/t._id#comments">
                        <FontAwesomeIcon icon={faComment} className="fas fa-star icon-font icon-star" />
                            <span className="comments-count">1 &nbsp;Comments</span>
                            </a>
                    </span>

            <span className="action-mark  t.mark_status ">
                    <FontAwesomeIcon icon={faBookmark} className="fas fa-bookmark icon-mark" />
                &nbsp;Mark
                </span>
        </div>
    )
}

class Card extends Component {
    render() {
        return (
            <div className="card" data-id="t._id">
                <div className="feed__date">
                    published by t.createdTime | formattedTime()
                </div>
                <Author />
                <Content />
                <CTA />
            </div>

        )
    }
}

Card.propTypes = {}

export default Card