import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Image, Segment, Header, Divider, Grid, Button, Icon} from 'semantic-ui-react'
import Dropzone from 'react-dropzone'
import Cropper from 'react-cropper'
import 'cropperjs/dist/cropper.css'
import {actionUpdateAvatar} from '../../action/user'
import {message} from 'antd'



const props = {
    name: 'file',
    multiple: true,
    action: '//jsonplaceholder.typicode.com/posts/',
    onChange(info) {
        console.log('info', info)
        
        const status = info.file.status
        if (status !== 'uploading') {
            console.log(info.file, info.fileList)
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`)
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`)
        }
    },
}


class SettingPhoto extends Component {
    
    state = {
        files: [],
        fileName: '',
        crop: null,
        image: {},
    }
    
    onDrop = (files) => {
        console.log('files', files)
        
        this.setState({
            files,
            fileName: files[0].preview.split('/').slice(-1)[0] + '.jpg',
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
        window.scrollTo(0, 0)
    }
    
    uploadImage = async () => {
        try {
            await this.props.actionUpdateAvatar(this.state.image, this.state.fileName)
            message.success(`Avatar update successfully.`)
            this.cancelCrop()
        } catch(error) {
            console.log('errorxxupdate image', error)
        }
    }
    
    render() {
        console.log('this.state', this.state)
        
        return (
            <Segment>
                <Header dividing size='large' content='Setting Your Avatar' />
                <Grid>
                    <Grid.Column width={12}>
                        <Header color='teal' sub content='Step 1 - Add Photo' />
                        <Dropzone style={{marginLeft: 'auto', marginRight: 'auto'}} onDrop={this.onDrop}>
                            <div style={{textAlign: 'center', paddingTop: 30}}>
                                <Icon name='upload' size='huge' />
                                <Header content='drop you photo here' />
                            </div>
                        </Dropzone>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Header color='teal' sub content='Step 2 - resize' />
                        {
                            this.state.files[0] &&
                            
                            <Cropper
                                ref='cropper'
                                src={this.state.files[0].preview}
                                style={{height: 200, width: '100%'}}
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
                    <Grid.Column width={12}>
                        <Header color='teal' sub content='Step 3 - confirm' />
                        {
                            this.state.files[0] &&
                            <div>
                                <Image style={{minHeight: 'auto', minWidth: 200}} src={this.state.crop} />
                            </div>
                        }
                    </Grid.Column>
                    
                    <Grid.Column width={12}>
                        {
                            this.state.files[0] &&
                            <div>
                                <Button style={{width: 50}} onClick={this.uploadImage} positive icon='check' />
                                <Button style={{width: 50}} onClick={this.cancelCrop} icon='close' />
                            
                            </div>
                        }
                    </Grid.Column>
                </Grid>
                <Divider />
            </Segment>
        )
    }
}


const actions = {
    actionUpdateAvatar,
}

export default connect(null, actions)(SettingPhoto)


