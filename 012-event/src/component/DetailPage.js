import React, {Component} from 'react'
import {Grid, Segment, Image, Item, Header, Button, Icon, Comment, Form, List} from 'semantic-ui-react'
import image from '../assets/categoryImages/drinks.jpg'
import avatar from '../assets/images/user.png'


const EventHeader = (props) => {
    return (
        <Segment.Group>
            <Segment basic attached='top' style={{padding: 0}}>
                <Image src={image} fluid />
            </Segment>
            <Segment>
                <Item.Group>
                    <Item.Content>
                        <Header size='huge' content='Event Title' />
                        <p>Date</p>
                        <p>Hosted By</p>
                    </Item.Content>
                </Item.Group>
            </Segment>
            <Segment basic attached='bottom'>
                <Button>Cancel</Button>
                <Button color='teal'>Join the Event</Button>
                <Button color='orange'>OK</Button>
            </Segment>
        </Segment.Group>
    )
}

const EventInfo = (props) => {
    return (
        <Segment.Group>
            <Segment attached>
                <Grid>
                    <Grid.Column width={1}>
                        <Icon color='teal' size='large' name='info' />
                    </Grid.Column>
                    <Grid.Column width={15}>
                        <p>Event</p>
                    </Grid.Column>
                </Grid>
            </Segment>
            <Segment attached>
                <Grid>
                    <Grid.Column width={1}>
                        <Icon color='teal' size='large' name='calendar' />
                    </Grid.Column>
                    <Grid.Column width={15}>
                        <p>date</p>
                    </Grid.Column>
                </Grid>
            </Segment>
            
            <Segment>
                <Grid>
                    <Grid.Column width={1}>
                        <Icon color='teal' size='large' name='marker' />
                    </Grid.Column>
                    <Grid.Column width={11}>
                        <p>address</p>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Button color='teal' size='tiny' content='show map' />
                    </Grid.Column>
                </Grid>
            </Segment>
        
        </Segment.Group>
    )
}

const EventComment = (props) => {
    return (
        <Segment.Group>
            <Header attached='top' inverted textAlign='center' color='gray' size='huge' content='Comment' />
            <Segment attached>
                <Comment.Group>
                    <Comment>
                        <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
                        <Comment.Content>
                            <Comment.Author as='a'>Matt</Comment.Author>
                            <Comment.Metadata>
                                <div>Today at 5:42PM</div>
                            </Comment.Metadata>
                            <Comment.Text>How artistic!</Comment.Text>
                            <Comment.Actions>
                                <Comment.Action>Reply</Comment.Action>
                            </Comment.Actions>
                        </Comment.Content>
                    </Comment>
                    
                    <Comment>
                        <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                        <Comment.Content>
                            <Comment.Author as='a'>Elliot Fu</Comment.Author>
                            <Comment.Metadata>
                                <div>Yesterday at 12:30AM</div>
                            </Comment.Metadata>
                            <Comment.Text>
                                <p>This has been very useful for my research. Thanks as well!</p>
                            </Comment.Text>
                            <Comment.Actions>
                                <Comment.Action>Reply</Comment.Action>
                            </Comment.Actions>
                        </Comment.Content>
                        <Comment.Group>
                            <Comment>
                                <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
                                <Comment.Content>
                                    <Comment.Author as='a'>Jenny Hess</Comment.Author>
                                    <Comment.Metadata>
                                        <div>Just now</div>
                                    </Comment.Metadata>
                                    <Comment.Text>Elliot you are always so right :)</Comment.Text>
                                    <Comment.Actions>
                                        <Comment.Action>Reply</Comment.Action>
                                    </Comment.Actions>
                                </Comment.Content>
                            </Comment>
                        </Comment.Group>
                    </Comment>
                    
                    <Comment>
                        <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
                        <Comment.Content>
                            <Comment.Author as='a'>Joe Henderson</Comment.Author>
                            <Comment.Metadata>
                                <div>5 days ago</div>
                            </Comment.Metadata>
                            <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
                            <Comment.Actions>
                                <Comment.Action>Reply</Comment.Action>
                            </Comment.Actions>
                        </Comment.Content>
                    </Comment>
                    
                    <Form reply>
                        <Form.TextArea />
                        <Button content='Add Reply' labelPosition='left' icon='edit' primary />
                    </Form>
                </Comment.Group>
            </Segment>
        
        </Segment.Group>
    )
}

const EventSideBar = () => {
    return (
        <Segment.Group>
            <Segment textAlign='center' attached='top' inverted color='teal'>
                2 people going
            </Segment>
            <Segment attached>
                <List related divided>
                    <Item >
                        <Item.Image size='mini' circular src={avatar} />
                        <Item.Content  verticalAlign='middle'>
                            <Item.Header as='a' content='aad' />
                        </Item.Content>
                    </Item>
                    <Item>
                        <Item.Image size='mini' circular src={avatar} />
                        <Item.Content  verticalAlign='middle' >
                            <Item.Header as='a' content='aaxd' />
                        </Item.Content>
                    </Item>
                </List>
            </Segment>
        </Segment.Group>
    
    )
}


class DetailPage extends Component {
    render() {
        return (
            <Grid>
                <Grid.Column width={10}>
                    <EventHeader />
                    <EventInfo />
                    <EventComment />
                </Grid.Column>
                <Grid.Column width={6}>
                    <h2>sidebar</h2>
                    <EventSideBar />
                </Grid.Column>
            </Grid>
        )
    }
}


export default DetailPage