import React from 'react'
import {Icon, Button} from 'semantic-ui-react'
// import {handleSocialLogin} from '../../../app/redux/actions/auth'
import {connect} from 'react-redux'



const SocialLogin = (props) => {
    return (
        <div>
            <Button onClick={() => props.dispatch(handleSocialLogin('facebook')) } type="button" style={{marginBottom: '10px'}} fluid color="facebook">
                <Icon name="facebook" /> Login with Facebook
            </Button>
            
            <Button onClick={() => props.dispatch(handleSocialLogin('google')) } type="button" fluid color="google plus">
                <Icon name="google plus" />
                Login with Google
            </Button>
        </div>
    )
}

export default connect()(SocialLogin)