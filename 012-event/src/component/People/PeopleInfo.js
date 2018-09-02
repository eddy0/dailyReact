import React, {Component} from 'react'
import {Grid, Header, Icon, List, Segment} from 'semantic-ui-react'


class PeopleInfo extends Component {
    render() {
        const {user} = this.props
        return (
            <Segment>
                <Grid>
                    <Grid.Column width={10}>
                        <Header>
                            <Icon name="smile" size="huge" />
                            <Header.Content>About Bruce</Header.Content>
                        </Header>
                        <List>
                            {
                                user.occupation &&
                                <List.Item>
                                    I am a: <strong>Software Developer</strong>
                                </List.Item>
                            }
                            {
                                user.city &&
                                <List.Item>Originally from:
                                    <strong></strong>
                                </List.Item>
                            }
                            {
                                user.createAt &&
                                <List.Item>Member Since:
                                    <strong>{' '}{new Date(Date(user.createAt)).toLocaleString('en-US', {
                                        year: 'numeric', month: 'long', day: '2-digit'
                                    })}</strong>
                                </List.Item>
                            }
                            {
                                user.details &&
                                <List.Item>
                                    <p>
                                        {user.details}
                                    </p>
                                </List.Item>
                            }
                        </List>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Header>
                            <Icon name="heart outline" size="huge" />
                            <Header.Content>Interests</Header.Content>
                        </Header>
                        <List>
                            {
                                user.interests &&
                                user.interests.map((interest, index) => {
                                    return (
                                        <List.Item key={index}>
                                            <List.Icon name="heart" size="large" />
                                            <List.Content>{interest}</List.Content>
                                        </List.Item>
                                    )
                                })}
                        </List>
                    </Grid.Column>
                </Grid>
            </Segment>
        )
    }
}


export default PeopleInfo