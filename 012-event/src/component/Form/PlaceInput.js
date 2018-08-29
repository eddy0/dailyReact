import React, {Component, Fragment} from 'react'
import {Form, Icon, Label} from 'semantic-ui-react'
import Script from 'react-load-script'



class PlaceInput extends Component {
    
    componentWillUnmount() {
        new window.google.maps.event.clearInstanceListeners(this.autocomplete)
    }
    
    initAutocomplete = () => {
        this.autocomplete = new window.google.maps.places.Autocomplete(
            (this.input),
            {types: ['geocode']})
        this.autocomplete.addListener('place_changed', this.fillInAddress)
    }
    
    fillInAddress = () => {
        var place = this.autocomplete.getPlace()
        let address = place.formatted_address
        let lat = place.geometry.location.lat()
        let lng = place.geometry.location.lng()
        
        this.props.input.onChange(address)
        
        if (this.props.input.name === 'venue' && this.props.input.value.length > 3) {
            this.props.checkChange({lat: lat, lng: lng})
        }
    }
    
    geolocate = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                var geolocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                }
                var circle = new window.google.maps.Circle({
                    center: geolocation,
                    radius: position.coords.accuracy,
                })
                this.autocomplete.setBounds(circle.getBounds())
            })
        }
    }
    
    render() {
        const {input, width, label, type, placeholder, meta: {touched, error, warning}} = this.props
        return (
            <Fragment>
                <Script
                    url="https://maps.googleapis.com/maps/api/js?key=AIzaSyAYVHNqmifVNgbn_Rzm1SLViGST1YOlfFg&libraries=places&language=en"
                    onLoad={this.initAutocomplete}
                />
                <Form.Field error={touched && !!error} width={width}>
                    <label>{label}</label>
                    <input
                        ref={(input) => this.input = input}
                        {...input}
                        placeholder={placeholder}
                        type={type}
                        onFocus={this.geolocate}
                        autoComplete={'off'}
                    />
                    {
                        touched &&
                        ( (error && <Label color='red' pointing='left'>{error}</Label>) ||
                            (warning && <Label color='orange' pointing='left'>{warning}</Label>))
                    }
                </Form.Field>
            </Fragment>
        )
    }
}


export default PlaceInput