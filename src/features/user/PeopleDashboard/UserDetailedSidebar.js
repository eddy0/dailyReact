import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import { Button} from 'semantic-ui-react'


class UserDetailedSidebar extends Component {
    render() {
        const {isCurrentUser} = this.props
    
        return (
            
                <div>
                    {
                        isCurrentUser
                            ? <Button
                                as={Link}
                                to="/settings"
                                color="teal"
                                fluid
                                basic
                                content="Edit Profile"
                            />
                            :  <Button color="teal" fluid basic content="Follow user" />
                    }
                </div>
        )
    }
}


export default UserDetailedSidebar