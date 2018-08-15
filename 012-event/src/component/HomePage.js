import React, {Component} from 'react'
import {Button, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import SignedInMenu from './SignedInMenu'



class HomePage extends Component {
    render() {
        return (
            <div style={{
                position: 'absolute',
                left: 0,
                top:0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(110deg, lightblue 20%, darkseagreen)'
            }}>
            
                <div className='home' style={{
                    position: 'absolute',
                    left: '50%',
                    top:' 50%',
                    transform: 'translate(-50%, -50%)',
                    color: 'white',
                    textAlign: 'center',
                }}>
                    <h2>Come and Join the Event</h2>
                    <Button inverted icon  as={Link} to='/event'  >
                        <span style={{marginRight: '0.5rem'}}>Get Started</span>
                        <Icon name='arrow right' />
                    </Button>
                </div>
            </div>
        )
    }
}


export default HomePage