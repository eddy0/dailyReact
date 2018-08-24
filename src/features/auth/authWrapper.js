import {connectedReduxRedirect} from 'redux-auth-wrapper/history4/redirect'
import {openModal} from '../../app/redux/actions/modal'



export const userIsAuthenticated = connectedReduxRedirect({
    wrapperDisplayName: 'UserIsAuthenticated',
    allowRedirectBack: true,
    redirectPath:'/events',
    authenticatedSelector: ({firebase: {auth}}) => auth.isLoaded && ! auth.isEmpty,
    redirectAction: newLocation => dispatch => dispatch(openModal('UnauthedModal'))
    
})