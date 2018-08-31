import React, {Component} from 'react'
import {Header, Icon, Segment, Menu, Card, Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import format from 'date-fns/format'
import Loading from '../Layout/Loading'



class PeopleEvents extends Component {
    state = {activeItem: 'all'}
    
    handleItemClick = (name) => {
        this.setState({activeItem: name})
        this.props.getUserEvent(this.props.uid, name)
    }
    
    render() {
        const {activeItem} = this.state
        const {events, loading} = this.props
        if (loading) {
            return <Loading/>
        }
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
                <Card.Group itemsPerRow={4}>
                    {
                        events &&
                        events.map((event) => (
                            <Card as={Link} to={`/event/${event.id}`} key={event.id}>
                                <Image src={`/assets/categoryImages/${event.category}.jpg`} />
                                <Card.Content>
                                    <Card.Header>{event.title}</Card.Header>
                                    <Card.Meta>
                                        <div className='date'>{format(event.date && event.date.toDate(), 'DD MMM YYYY')}</div>
                                        <div className='date'>{format(event.date && event.date.toDate(), 'HH:mm')}</div>
                                    </Card.Meta>
                                </Card.Content>
                            </Card>
                        ))
                    }
                </Card.Group>
            </Segment>
        )
    }
}


export default PeopleEvents