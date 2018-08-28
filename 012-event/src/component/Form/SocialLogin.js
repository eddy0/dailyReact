import React from 'react'
import {Icon, Button} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {handleSocialLogin} from '../../action/auth'



const SocialLogin = (props) => {
    return (
        <div>
            <Button style={{marginBottom: '10px'}} onClick={() => props.dispatch(handleSocialLogin('github')) } type="button" fluid >
                <Icon name="github" />
                Login with Github
            </Button>
    
            <Button onClick={() => props.dispatch(handleSocialLogin('google')) } type="button" style={{marginBottom: '10px'}} fluid color="google plus">
                <Icon name="google plus" />
                Login with Google
            </Button>
    
            
            <Button onClick={() => props.dispatch(handleSocialLogin('facebook')) } type="button" style={{marginBottom: '10px'}} fluid color="facebook">
                <Icon name="facebook" /> Login with Facebook
            </Button>
            
           
           
        </div>
    )
}

export default connect()(SocialLogin)