import React, {Component} from 'react'
import {Header, Icon, Segment, Menu, Card, Image} from 'semantic-ui-react'



class UserDetailedEvents extends Component {
    state = {activeItem: 'all'}
    
    handleItemClick = (name) => this.setState({activeItem: name})
    
    render() {
        const {activeItem} = this.state
        return (
            <Segment>
                <Header>
                    <Icon name='calendar' size='huge' />
                    <Header.Content>Events</Header.Content>
                </Header>
                <Menu secondary pointing>
                    <Menu.Item
                        name='All Events'
                        active={activeItem === 'all'}
                        onClick={() => this.handleItemClick('all')}
                    />
                    <Menu.Item
                        name='Future Events'
                        active={activeItem === 'future'}
                        onClick={() => this.handleItemClick('future')}
                    />
                    <Menu.Item
                        name='Past Events'
                        active={activeItem === 'past'}
                        onClick={() => this.handleItemClick('past')}
                    />
                    <Menu.Item
                        name='Events Hosted'
                        active={activeItem === 'events'}
                        onClick={() => this.handleItemClick('events')}
                    />
                
                </Menu>
                <Card.Group itemsPerRow={5}>
                    <Card>
                        <Image src="http://placeimg.com/150/100/arch" />
                        <Card.Content>
                            <Card.Header>Event</Card.Header>
                            <Card.Meta>
                                <span className='date'>Joined in 2015</span>
                            </Card.Meta>
                        </Card.Content>
                    
                    </Card>
                    
                    <Card>
                        <Image src="http://placeimg.com/150/100/arch" />
                        <Card.Content>
                            <Card.Header>Event</Card.Header>
                            <Card.Meta>
                                <span className='date'>Joined in 2015</span>
                            </Card.Meta>
                        </Card.Content>
                    
                    </Card>
                
                </Card.Group>
            </Segment>
        )
    }
}


export default UserDetailedEvents