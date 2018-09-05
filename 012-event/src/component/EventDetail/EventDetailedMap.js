import React from 'react'
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps'


const Map = withGoogleMap((props) => {
    const {lat, lng} = props.location
    return (
        <GoogleMap
            defaultZoom={12}
            defaultCenter={{lat: lat, lng: lng}}
        >
            <Marker
                position={{lat: lat, lng: lng}}
            />
        </GoogleMap>
    )
})

const EventDetailedMap = (props) => (
    <Map
        containerElement={<div style={{height: `300px`, width: '100%'}} />}
        mapElement={<div style={{height: `100%`}} />}
        {...props}
    />
)

export default EventDetailedMap