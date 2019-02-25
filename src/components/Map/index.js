import React, { Component, Fragment } from 'react';
import { View } from 'react-native';
import MapView, {Marker} from "react-native-maps";
import { getPixelSize } from '../../utils.js';
import Search from '../Search';
import Directions from '../Directions';
import markerPin from "../../assets/marker.png";

import {LocationBox, LocationText} from './style.js';

var mapStyle=require('./mapStyle.json');

export default class Map extends Component {
    state = {
        region: null,
        destination: null,
        location: null        
    };
    async componentDidMount(){
        navigator.geolocation.getCurrentPosition(
           async ({ coords: { latitude, longitude } }) => {
               
                this.setState({ 
                    region: { 
                        latitude, 
                        longitude, 
                        latitudeDelta: 0.0143, 
                        longitudeDelta: 0.0134 
                    } 
                });
            }, //sucesso
            () => {}, //erro
            {
                timeout: 2000,
                enableHighAccuracy: true,
                MaximumAge: 1000,
            }
        );
    }
    handleLocationSelected = (data, { geometry }) => {
        const { location: { lat: latitude, lng: longitude }
    } = geometry; 
        this.setState({
            destination: {
                latitude,
                longitude,
                title: data.structured_formatting.main_text,
            },
        });
    };
render() {

    const { region, destination } = this.state;

    return (
      <View style={{flex: 1}}>
        <MapView 
            style={{flex: 1}}
            region={ region }
            showsMyLocationButton={true}
            showsPointsOfInterest
            showsUserLocation
            loadingEnabled
            followsUserLocation
            ref={el => this.mapView = el}
            customMapStyle={mapStyle}
        > 
            { destination && (
                <Fragment>
                    <Directions
                    origin={region}
                    destination={destination}
                    onReady={result => {
                        this.mapView.fitToCoordinates(result.coordinates, {
                            edgePaddingPadding: {
                                right: getPixelSize(50),
                                left: getPixelSize(50),
                                top: getPixelSize(50),
                                bottom: getPixelSize(50)
                            }
                        });
                    }}
                    />
                    <Marker 
                    coordinate={destination} 
                    anchor={{x:0, y:0}}
                    image={markerPin}
                    >  
                        <LocationBox>
                            <LocationText>
                                {destination.title}
                            </LocationText>
                        </LocationBox> 
                    </Marker>
                </Fragment>
            ) }
        </MapView>
        <Search onLocationSelected={ this.handleLocationSelected } />
    </View>
    );
  }
}