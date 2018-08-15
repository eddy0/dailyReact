import React, {Component} from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


//AIzaSyAYVHNqmifVNgbn_Rzm1SLViGST1YOlfFg

export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
    };
    
    onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }
    
    render() {
        console.log(this.props)
    
        if (!this.props.google) {
            return <div>Loading...</div>;
        }
        
        return (
            <div
                style={{
                    position: "relative",
                    height: "calc(100vh - 20px)"
                }}
            >
                <Map style={{}} google={this.props.google} zoom={14}>
                    <Marker
                        onClick={this.onMarkerClick}
                        icon={{
                            url: "/img/icon.svg",
                            anchor: new this.props.google.maps.Point(32, 32),
                            scaledSize: new this.props.google.maps.Size(64, 64)
                        }}
                        name={"Current location"}
                    />
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                    >
                        <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                        </div>
                    </InfoWindow>
                </Map>
            </div>
        );
    }
}


export default GoogleApiWrapper({
    apiKey: ('AIzaSyAYVHNqmifVNgbn_Rzm1SLViGST1YOlfFg')
})(MapContainer)