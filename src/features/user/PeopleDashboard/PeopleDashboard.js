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
        const {user} = this.props
        if (!user) {
            return <Loading />
        }
        
        return (
            <div style={{marginBottom: '50px'}}>
                <UserDetailedHeader user={user} />
                
                <Grid>
                    <Grid.Column width={12}>
                        <UserDetailedInfo />
                        <UserDetailedPhoto />
                        <UserDetailedEvents />
                    
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <UserDetailedSidebar />
                    </Grid.Column>
                </Grid>
            </div>
        
        )
    }
}


const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    console.log('ok', id)
    let user = {}
    let users = state.firestore.data.users
    if (users && Object.keys(users).length > 0) {
        user = Object.keys(users).map((usersId) => {
            if (usersId === id) {
                return users[usersId]
            }
        })[0]
    }
    console.log('user', user, users)
    
    return {
        user,
        photos: state.firestore.ordered.photos,
        id
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
    }]
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect(({id}) => query(id)),
 
)(PeopleDashboard)

// export default withFirestore(connect(mapStateToProps)(PeopleDashboard))