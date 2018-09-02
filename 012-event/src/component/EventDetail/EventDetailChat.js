import React, {Component} from 'react'
import {Comment, Header, Form, Segment, Button} from 'semantic-ui-react'
import distanceInWords from 'date-fns/distance_in_words'
import {Link} from 'react-router-dom'
import ChatForm from '../Form/ChatForm'


const CommentItem = ({id, chat}) => (
    <Comment>
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
            {
               chat.children && chat.children.length > 0 &&
               
               chat.children.map((child) => {
                   return (
                       <Comment.Group key={child.id}>
                           <Comment>
                               <Comment.Avatar src={child.photoURL} />
                               <Comment.Content>
                                   <Comment.Author as={Link} to={`people/${child.uid}`}>{child.displayName}</Comment.Author>
    
                                   <Comment.Metadata>
                                       <div>{distanceInWords(child.date, Date.now())}</div>
                                   </Comment.Metadata>
                                   <Comment.Text>{child.text}</Comment.Text>
                               </Comment.Content>
                               <Comment.Actions>
                                   <Comment.Action>Reply</Comment.Action>
                               </Comment.Actions>
                           </Comment>
                       </Comment.Group>
                   )
               })
            }
          
        </Comment.Content>
    </Comment>
)

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
        // const {addEventComment, eventId, eventChat} = this.props
        const {chats} = this.props
        return (
            <Comment.Group>
                <Header as='h3' dividing>
                    Comments
                </Header>
                {
                    chats &&
                    Object.keys(chats).map((id) => {
                        let chat = chats[id]
                        return (
                            <CommentItem key={id} chat={chat} id={id} />
                        )
                    })
                }
                
                <ChatForm/>
            </Comment.Group>
        
        )
    }
}


export default EventDetailedChat