import React, {Component} from 'react'
import {Grid, Segment, Image, Item, Header, Button, Icon, Comment, Form, List, Label} from 'semantic-ui-react'
import image from '../assets/categoryImages/drinks.jpg'
import avatar from '../assets/images/user.png'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


const EventHeader = ({event}) => {
    let {id,  date, hostedBy, title} = event
    return (
        <Segment.Group>
            <Segment basic attached='top' style={{padding: 0}}>
                <Image src={image} fluid />
            </Segment>
            <Segment>
                <Item.Group>
                    <Item.Content>
                        <Header size='huge' content={title} />
                        <p>{date}</p>
                        <p>Hosted By {hostedBy} </p>
                    </Item.Content>
                </Item.Group>
            </Segment>
            <Segment basic attached='bottom'>
                <Button color='teal'>Join the Event</Button>
                <Button as={Link} to={`/manage/${id}`} color='orange' floated='right'>Manage</Button>
            </Segment>
        </Segment.Group>
    )
}

const EventInfo = ({event}) => {
    let { date, title, location} = event
    return (
        <Segment.Group>
            <Segment attached>
                <Grid>
                    <Grid.Column width={1}>
                        <Icon color='teal' size='large' name='info' />
                    </Grid.Column>
                    <Grid.Column width={15}>
                        <p>{title}</p>
                    </Grid.Column>
                </Grid>
            </Segment>
            <Segment attached>
                <Grid>
                    <Grid.Column width={1}>
                        <Icon color='teal' size='large' name='calendar' />
                    </Grid.Column>
                    <Grid.Column width={15}>
                        <p>{date}</p>
                    </Grid.Column>
                </Grid>
            </Segment>
            
            <Segment>
                <Grid>
                    <Grid.Column width={1}>
                        <Icon color='teal' size='large' name='marker' />
                    </Grid.Column>
                    <Grid.Column width={11}>
                        <p>{location}</p>
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
            <Header attached='top' inverted textAlign='center' color='grey' size='huge' content='Comment' />
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

const EventSideBar = ({event}) => {
    let {attendees, hostedBy } = event
    return (
        <Segment.Group>
            <Segment textAlign='center' attached='top' inverted color='teal'>
                {attendees && attendees.length} {attendees && attendees.length === 1 ? 'person': 'people' } going
            </Segment>
            <Segment attached>
                <List divided>
                    {
                        attendees && attendees.map((attendee) => {
                            return (
                                <Item key={attendee.id} >
                                    {attendee.name === hostedBy
                                        ?  <Label style={{position: 'absolute'}} color='blue' ribbon='right'>Hoster</Label>
                                        : null
                                    }
                                    <Item.Image size='tiny'  src={attendee.photoURL} />
                                    <Item.Content  verticalAlign='middle'>
                                        <Item.Header as='a' content={attendee.name} />
                                    </Item.Content>
                                </Item>
                            )
                        })
                    }

                </List>
            </Segment>
        </Segment.Group>
    
    )
}


class DetailPage extends Component {
    componentDidMount() {
            window.scrollTo(0, 0)
    }
    render() {
        let event = this.props.event
        return (
            <Grid>
                <Grid.Column width={10}>
                    <EventHeader event={event} />
                    <EventInfo event={event} />
                    <EventComment event={event} />
                </Grid.Column>
                <Grid.Column width={6}>
                    <h2>sidebar</h2>
                    <EventSideBar event={event} />
                </Grid.Column>
            </Grid>
        )
    }
}


const mapStateToProps = (state, props) => {
    let {match} = props
    let id = match.params.id
    let event = []
    if (id && state.events.length > 0) {
        event = state.events.find((e) => e.id === id)
    }
    return {
        event,
    }
}

export default connect(mapStateToProps)(DetailPage)