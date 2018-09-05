import React, {Component} from 'react'
import {Feed, Segment} from 'semantic-ui-react'
import EventActivityItem from '../Activity/EventActivityItem'
import {firestoreConnect} from 'react-redux-firebase'
import {connect} from 'react-redux'
import {compose} from 'redux'
import Loading from './Loading'



class EventActivity extends Component {
    render() {
        const {activities} = this.props
        
        if (!activities) {
            return <Loading/>
        }
        return (
            <div>
                    <Segment>
                        <Feed>
                            {
                                activities &&
                                activities.map((activity) => (
                                    <EventActivityItem key={activity.id} activity={activity} />
                                ))
                            }
                        
                        </Feed>
                    </Segment>
            </div>
        )
    }
    
}



const mapStateToProps = (state) => {
    return {
        activities: state.firestore.ordered.activities
    }
}

const query = [
    {
        collection: 'activities',
        orderBy: ['timestamp', 'desc'],
        limit: 5
    },
]

export default compose(
    firestoreConnect(query),
    connect(mapStateToProps)
)(EventActivity)