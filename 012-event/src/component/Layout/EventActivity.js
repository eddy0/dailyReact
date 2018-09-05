import React, {Component} from 'react'
import {Feed, Segment} from 'semantic-ui-react'
import EventActivityItem from '../Activity/EventActivityItem'
import {firestoreConnect} from 'react-redux-firebase'
import {connect} from 'react-redux'
import {compose} from 'redux'



class EventActivity extends Component {
    render() {
        const {activites} = this.props
        return (
            <div>
                    <Segment>
                        <Feed>
                            {
                                activites &&
                                activites.map((activity) => (
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
        activities: state.firestore.ordered.activity
    }
}

const query = [
    {
        collection: 'activity',
        orderBy: ['timestamp', 'desc'],
        limit: 5
    },
]

export default compose(
    firestoreConnect(query),
    connect(mapStateToProps)
)(EventActivity)