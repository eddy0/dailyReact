import React, {Component} from 'react'

import { Button,  Segment} from 'semantic-ui-react'


class UserDetailedSidebar extends Component {
    render() {
        return (
                <div>
                    
                        <Button
                            as='a'
                            to="/settings"
                            color="teal"
                            fluid
                            basic
                            content="Edit Profile"
                        />
                    
                        <Button color="teal" fluid basic content="Follow user" />
                   
                </div>
        )
    }
}


export default UserDetailedSidebar