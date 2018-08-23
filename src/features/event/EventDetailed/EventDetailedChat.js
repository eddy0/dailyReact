import React, {Component} from 'react'
import {Comment, Header, Form, Segment, Button} from 'semantic-ui-react'
import EventDetailedChatForm from './EventDetailedChatForm'
import distanceInWords from 'date-fns/distance_in_words'
import {Link} from 'react-router-dom'



class EventDetailedChat extends Component {
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
                                                <Comment.Action>Reply</Comment.Action>
                                            </Comment.Actions>
                                        </Comment.Content>
                                    </Comment>
                                )
                            })
                        }
                        
                        
                        <Comment>
                            <Comment.Avatar src="/assets/user.png" />
                            <Comment.Content>
                                <Comment.Author as="a">Joe Henderson</Comment.Author>
                                <Comment.Metadata>
                                    <div>5 days ago</div>
                                </Comment.Metadata>
                                <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
                                <Comment.Actions>
                                    <Comment.Action>Reply</Comment.Action>
                                </Comment.Actions>
                            </Comment.Content>
                        </Comment>
                        
                        <EventDetailedChatForm addEventComment={addEventComment} eventId={eventId} />
                    </Comment.Group>
                </Segment>
            </div>
        )
    }
}


export default EventDetailedChat