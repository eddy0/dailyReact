import React, {Component} from 'react'
import {Container, Grid, Segment, Image, Header, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import PeopleHeader from '../People/PeopleHeader'
import PeopleInfo from '../People/PeopleInfo'
// import PeoplePhoto from '../People/PeoplePhoto'
import PeopleEvents from '../People/PeopleEvents'
import PeopleSidebar from '../People/PeopleSidebar'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'
import Loading from './Loading'
import {actionFetchUserEvent} from '../../action/event'



class PeopleDashboard extends Component {
    
  
    render() {
        const {user, photos, auth, uid, requesting, events, loading, actionFetchUserEvent} = this.props
        let isLoading = Object.keys(requesting).some((a) => a === false)
        if (isLoading) {
            return <Loading />
        }

        const isCurrentUser = auth.uid === uid
        
        return (
            <div style={{marginBottom: '50px'}}>
                <PeopleHeader user={user} />
                <Grid>
                    <Grid.Column width={12}>
                        <PeopleInfo user={user} />
                        {/*<PeoplePhoto  photos={photos}/>*/}
                        <PeopleEvents uid={uid} loading={loading} getUserEvent={actionFetchUserEvent} events={events} />
                    
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <PeopleSidebar isCurrentUser={isCurrentUser} />
                    </Grid.Column>
                </Grid>
            </div>
        
        )
    }
}


const mapStateToProps = (state, props) => {
    const uid = props.match.params.id
    let user = {}
    let storeUser = state.firestore.ordered.user
    if (storeUser && storeUser[0]) {
        user = storeUser[0]
    }
    
    return {
        uid,
        user,
        events:  state.events,
        photos: state.firestore.ordered.photos,
        auth: state.firebase.auth,
        requesting: state.firestore.status.requesting,
        loading: state.loading,
    }
}

const query = (id) => {
    return [
        {
            'collection': 'users',
            doc: id,
            storeAs: 'user'
        }
    ]
}


const actions = {
    actionFetchUserEvent
}

export default compose(
    connect(mapStateToProps, actions),
    firestoreConnect(({uid}) => query(uid)),
)(PeopleDashboard)

// export default withFirestore(connect(mapStateToProps)(PeopleDashboard))