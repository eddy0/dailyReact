import React, {Component} from 'react'
import {Header, Icon, Image, Segment} from 'semantic-ui-react'
import Lazyload from 'react-lazyload'



class UserDetailedPhoto extends Component {
    render() {
        const {photos} = this.props
        return (
            <Segment>
                <Header>
                    <Icon name='picture' size='huge' />
                    <Header.Content>Photos</Header.Content>
                </Header>
                
                <Image.Group size="small">
                    {photos &&
                    photos.map(photo => (
                        <Lazyload
                            key={photo.id}
                            height={150}
                            offset={-150}
                            placeholder={<Image src={'/assets/user.png'} />}
                        >
                            <Image src={photo.url} />
                        </Lazyload >
                    ))}
                </Image.Group>
            
            </Segment>
        )
    }
}


export default UserDetailedPhoto