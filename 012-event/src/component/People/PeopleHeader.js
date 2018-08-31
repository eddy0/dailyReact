import React, {Component} from 'react'
import { Grid, Item, Segment} from 'semantic-ui-react'


class PeopleHeader extends Component {
    render() {
        const {photoURL, displayName,  } = this.props.user
        return (
            <Grid>
                <Grid.Column width={16}>
                    <Segment>
                        <Item.Group>
                            <Item>
                                <Item.Image circular size='small' src={photoURL} />
                                <Item.Content verticalAlign='middle'>
                                    <Item.Header >{displayName}</Item.Header>
                                    <Item.Description>
                                        {
                                            ['city', 'occupation', 'dob'].forEach((name) => {
                                                return (
                                                    <p>{this.props.user[name]}</p>
                                                )
                                            })
                                        }
                                    </Item.Description>
                                </Item.Content>
                            </Item>
                        </Item.Group>
                    </Segment>
                </Grid.Column>
            </Grid>
        )
    }
}


export default PeopleHeader