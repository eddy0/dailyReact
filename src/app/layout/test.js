import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MapWithAMarker = withGoogleMap(props =>
    <div>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
        <Marker
            position={{ lat: -34.397, lng: 150.644 }}
        />
    </GoogleMap>
    </div>
);

const Map = () => (
    <MapWithAMarker
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
    />
)

export default Map