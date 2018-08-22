import React, {Component} from 'react'
import { Grid, Item, Segment} from 'semantic-ui-react'



class UserDetailedHeader extends Component {
    render() {
        const {photoURL, displayName } = this.props.user
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
                                        <p>Software Developer</p>
                                        <p>30, lives in London</p>
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


export default UserDetailedHeader