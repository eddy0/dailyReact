import React, {Component} from 'react'
import {Comment, Header, Form, Segment, Button} from 'semantic-ui-react'
import EventDetailedChatForm from './EventDetailedChatForm'
import distanceInWords from 'date-fns/distance_in_words'
import {Link} from 'react-router-dom'



class EventDetailedChat extends Component {
    
    state = {
        showReplyForm: false,
        selectedCommentId: null,
    }
    
    handleOpenReplyForm = (id) => {
        this.setState({
            showReplyForm: true,
            selectedCommentId: id
        })
    }
    
    handleCancelReplyForm = () => {
        this.setState({
            showReplyForm: false,
            selectedCommentId: null,
        })
    }
    
    render() {
        const {addEventComment, eventId, eventChat} = this.props
        return (
            <div>
                <Segment
                    textAlign="center"
                    attached="top"
                    inverted
                    color="teal"
                    style={{border: 'none'}}
                >
                    <Header>Chat about this event</Header>
                </Segment>
                
                <Segment attached>
                    <Comment.Group>
                        {
                            eventChat &&
                            eventChat.map((chat) => {
                                return (
                                    <Comment key={chat.id}>
                                        <Comment.Avatar src={chat.photoURL} />
                                        <Comment.Content>
                                            <Comment.Author as={Link} to={`people/${chat.uid}`}>{chat.displayName}</Comment.Author>
                                            <Comment.Metadata>
                                                <div>{distanceInWords(chat.date, Date.now())}</div>
                                            </Comment.Metadata>
                                            <Comment.Text>{chat.text}</Comment.Text>
                                            <Comment.Actions>
                                                <Comment.Action onClick={() => this.handleOpenReplyForm(chat.id)}>Reply</Comment.Action>
                                                {
                                                    this.state.showReplyForm && this.state.selectedCommentId === chat.id &&
                                                    <EventDetailedChatForm parentId={chat.id} handleCancelReplyForm={this.handleCancelReplyForm} form={`reply_${chat.id}`} addEventComment={addEventComment} eventId={eventId} />
                                                }
                                            </Comment.Actions>
                                        </Comment.Content>
                                    </Comment>
                                )
                            })
                        }
                        
                        <EventDetailedChatForm parentId={0} addEventComment={addEventComment} eventId={eventId} form={`new_comment}`} />
                    </Comment.Group>
                </Segment>
            </div>
        )
    }
}


export default EventDetailedChat