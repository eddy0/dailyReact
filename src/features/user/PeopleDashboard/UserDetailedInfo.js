import React, {Component} from 'react'
import {Grid, Header, Icon, List, Segment} from 'semantic-ui-react'



class UserDetailedInfo extends Component {
    render() {
        return (
            <Segment>
                <Grid>
                    <Grid.Column width={10}>
                        <Header >
                            <Icon name='smile' size='huge' />
                            <Header.Content>About Bruce</Header.Content>
                        </Header>
                        <List>
                            <List.Item>I am a:
                                <strong>Software Developer</strong>
                            </List.Item>
                            <List.Item>Originally from:
                                <strong>UK</strong>
                            </List.Item>
                            <List.Item>Member Since:
                                <strong>10 March 2018</strong>
                            </List.Item>
                            <List.Item>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                    sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Header >
                            <Icon name='heart outline' size='huge' />
                            <Header.Content>Interests</Header.Content>
                        </Header>
                        <List>
                            <List.Item>
                                <List.Icon name='heart' size='large'/>
                                <List.Content> Interest 1</List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='heart' size='large'/>
                                <List.Content> Interest w</List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='heart' size='large'/>
                                <List.Content> Interest e</List.Content>
                            </List.Item>
                        </List>
            
                    </Grid.Column>
                </Grid>
            </Segment>
        )
    }
}


export default UserDetailedInfo