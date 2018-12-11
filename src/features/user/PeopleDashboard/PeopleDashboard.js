import React, {Component} from 'react'
import { Grid } from 'semantic-ui-react'
import UserDetailedHeader from './UserDetailedHeader'
import UserDetailedInfo from './UserDetailedInfo'
import UserDetailedPhoto from './UserDetailedPhoto'
import UserDetailedEvents from './UserDetailedEvents'
import UserDetailedSidebar from './UserDetailedSidebar'
import Loading from '../../../app/layout/Loading'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'
import {getUserEvent} from '../../../app/redux/actions/user'



class PeopleDashboard extends Component {
    
    async componentDidMount() {
        let events = await this.props.getUserEvent(this.props.uid)
    
    }
    
    render() {
        const {user, photos, auth, uid, requesting, events, loading, getUserEvent} = this.props
        let isLoading = Object.keys(requesting).some((a) => a === false)
        if (isLoading) {
            return <Loading />
        }
        
        const isCurrentUser = auth.uid === uid
        
        return (
            <div style={{marginBottom: '50px'}}>
                <UserDetailedHeader user={user} />
                
                <Grid>
                    <Grid.Column width={12}>
                        <UserDetailedInfo />
                        <UserDetailedPhoto  photos={photos}/>
                        <UserDetailedEvents uid={uid} loading={loading} getUserEvent={getUserEvent} events={events} />
                    
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <UserDetailedSidebar isCurrentUser={isCurrentUser} />
                    </Grid.Column>
                </Grid>
            </div>
        
        )
    }
}


const mapStateToProps = (state, props) => {
    const uid = props.match.params.id
    let user = {}
    let users = state.firestore.ordered.user
    if (users && users[0]) {
        // user = Object.keys(users).map((usersId) => {
        //     if (usersId === id) {
        //         return users[usersId]
        //     }
        // })[0]
        user = users[0]
    }
    

    return {
        user,
        photos: state.firestore.ordered.photos,
        uid,
        auth: state.firebase.auth,
        requesting: state.firestore.status.requesting,
        events: state.events,
        loading: state.loading,
    }
}

const query = (id) => {
    return [{
        'collection': 'users',
        doc: id,
        subcollections: [{
            'collection': 'photos',
        }],
        storeAs: 'photos'
    },
        {
            'collection': 'users',
            doc: id,
            storeAs: 'user'
        }
    ]
}


const actions = {
    getUserEvent
}

export default compose(
    connect(mapStateToProps, actions),
    firestoreConnect(({uid}) => query(uid)),
 
)(PeopleDashboard)

// export default withFirestore(connect(mapStateToProps)(PeopleDashboard))