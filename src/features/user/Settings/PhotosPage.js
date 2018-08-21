import React, {Component} from 'react'
import {Image, Segment, Header, Divider, Grid, Button, Card, Icon} from 'semantic-ui-react'
import Dropzone from 'react-dropzone'
import Cropper from 'react-cropper'
import 'cropperjs/dist/cropper.css'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'
import {uploadPhoto, updateProfilePhoto, deletePhoto} from '../../../app/redux/actions/user'



class PhotosPage extends Component {
    
    state = {
        files: [],
        fileName: '',
        crop: null,
        image: {},
    }
    
    onDrop = (files) => {
        this.setState({
            files,
            fileName: files[0].name,
        })
    }
    
    cropImage = () => {
        if (this.refs.cropper.getCroppedCanvas()) {
            this.refs.cropper.getCroppedCanvas().toBlob((blob) => {
                let url = URL.createObjectURL(blob)
                this.setState({
                    crop: url,
                    image: blob,
                })
            }, 'image/jpeg')
        }
    }
    
    cancelCrop = () => {
        this.setState({
            files: [],
            image: '',
        })
    }
    
    uploadImage = async () => {
        try {
            await this.props.uploadPhoto(this.state.image, this.state.fileName)
            this.cancelCrop()
        } catch(error) {
            console.log('errorxxupdate image', error)
        }
    }
    
    handleDelete = (photo) => {
        this.props.deletePhoto(photo)
    }
    
    render() {
        // console.log('this.props', this.props)
        const {photos, profile, loading} = this.props
        
        return (
            <Segment>
                <Header dividing size='large' content='Your Photos' />
                <Grid>
                    <Grid.Row />
                    <Grid.Column width={4}>
                        <Header color='teal' sub content='Step 1 - Add Photo' />
                        <Dropzone onDrop={this.onDrop}>
                            <div style={{textAlign: 'center', paddingTop: 30}}>
                                <Icon name='upload' size='huge' />
                                <Header content='drop you photo here' />
                            </div>
                        </Dropzone>
                    </Grid.Column>
                    <Grid.Column width={1} />
                    <Grid.Column width={4}>
                        <Header sub color='teal' content='Step 2 - Resize image' />
                        {
                            this.state.files[0] &&
                            
                            <Cropper
                                ref='cropper'
                                src={this.state.files[0].preview}
                                style={{height: 200, width: '100%'}}
                                // Cropper.js options
                                aspectRatio={1}
                                scalable={true}
                                viewMode={0}
                                movable={true}
                                guides={false}
                                dragMode='move'
                                crop={this.cropImage}
                            />
                        }
                    </Grid.Column>
                    <Grid.Column width={1} />
                    <Grid.Column width={4}>
                        <Header sub color='teal' content='Step 3 - Preview and Upload' />
                        {
                            this.state.files[0] &&
                            <div>
                                <Image style={{minHeight: 'auto', minWidth: 200}} src={this.state.crop} />
                                <Button loading={loading} style={{width: 50}} onClick={this.uploadImage} positive icon='check' />
                                <Button  style={{width: 50}} onClick={this.cancelCrop} icon='close' />
                            
                            </div>
                        }
                    </Grid.Column>
                
                </Grid>
                
                <Divider />
                <Header sub color='teal' content='All Photos' />
                
                <Card.Group itemsPerRow={5}>
                    <Card>
                        <Image src={profile.photoURL || '/assets/user.png'} />
                        <Button positive>Main Photo</Button>
                    </Card>
    
                    {
                        photos &&
                        photos.map((photo) => {
                            return (
                                <Card key={photo.id}>
                                    <Image
                                        src={photo.url }
                                    />
                                    <div className='ui two buttons'>
                                        <Button basic color='green' loading={loading} onClick={() => this.props.updateProfilePhoto(photo.url)}>Main</Button>
                                        <Button basic icon='trash' loading={loading} color='red' onClick={() => this.handleDelete(photo)} />
                                    </div>
                                </Card>
                            )
                        })
                    }
                 
                  
                </Card.Group>
            </Segment>
        )
    }
}


const mapStateToProps = (state) => {
    let photos = state.firestore.ordered.photos || []
    let profile = state.firebase.profile
    let filteredPhotos = photos.filter((photo) => photo.url !== profile.photoURL )
    return {
        auth: state.firebase.auth,
        profile: profile,
        photos: filteredPhotos,
        loading: state.loading
    }
}

const actions = {
    uploadPhoto,
    updateProfilePhoto,
    deletePhoto,
}

const query = ({auth}) => {
    return [{
        collection: 'users',
        doc: auth.uid,
        subcollections: [{collection: 'photos'} ],
        storeAs: 'photos',
    }]
}

export default compose(
    connect(mapStateToProps, actions),
    firestoreConnect((auth) => query(auth)),
)(PhotosPage)

