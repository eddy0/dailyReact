import React, {Component} from 'react'
import {Container, Grid, Segment, Image, Header, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import UserDetailedHeader from './UserDetailedHeader'
import UserDetailedInfo from './UserDetailedInfo'
import UserDetailedPhoto from './UserDetailedPhoto'
import UserDetailedEvents from './UserDetailedEvents'
import UserDetailedSidebar from './UserDetailedSidebar'
import Loading from '../../../app/layout/Loading'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'



class PeopleDashboard extends Component {
    
    render() {
        const {user, photos, auth, id, requesting} = this.props
        let isLoading = Object.keys(requesting).some((a) => a === false)
        // if (isLoading) {
        //     return <Loading />
        // }
        
        const isCurrentUser = auth.uid === id
        
        return (
            <div style={{marginBottom: '50px'}}>
                <UserDetailedHeader user={user} />
                
                <Grid>
                    <Grid.Column width={12}>
                        <UserDetailedInfo />
                        <UserDetailedPhoto  photos={photos}/>
                        <UserDetailedEvents />
                    
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
    const id = props.match.params.id
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
        id,
        auth: state.firebase.auth,
        requesting: state.firestore.status.requesting,
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

export default compose(
    connect(mapStateToProps),
    firestoreConnect(({id}) => query(id)),
 
)(PeopleDashboard)

// export default withFirestore(connect(mapStateToProps)(PeopleDashboard))