import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
//import {Location, Permissions} from 'expo';
//mport { MapView } from 'expo';
//import { MapViewDirections } from 'expo';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import {connect} from "react-redux";
import {ChangePage} from "../../redux/actions.js";

class Destination extends React.Component {

  async componentWillMount(){
    const { status } = await Permissions.askAsync( Permissions.LOCATION );
  }

  state = {
    mapRegion: null,
    error: null,
    latitude: null,
    longitude: null,

    InitialPosition: {
      latitude: 49.2485,
      longitude: -123.0014,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },

    markerPosition :{
      latitude: 49.2567,
      longitude: -123.0073
    },

    guildford: {
      latitude: 49.1987,
      longitude: -122.8125
    }
  }

  componentDidMount() {
    this.watchID = navigator.geolocation.watchPosition((position) => {
      console.log(position);
      var initialRegion = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }

      console.log(initialRegion);
      this.setState({
           InitialPosition: initialRegion,
           markerPosition: initialRegion
         });
    },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 200000, maximumAge: 1000 },
    );
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  onRegionChange = (InitialPosition) => {
  this.setState({ InitialPosition });
}

  handlePage=(num)=>{
    this.props.dispatch(ChangePage(num))
  }

  render() {

    const GOOGLE_MAPS_APIKEY  = "AIzaSyAjmeDspw7sOJc5knFHDAw0XOnBB1cVA70";
    console.log(this.state.InitialPosition);
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={{left:0, top: 40, position: "absolute"}}
          onPress={this.handlePage.bind(this, 2)}
          >
          <Text
            style={{fontSize:30}}
            >Back</Text>
        </TouchableOpacity>
        <View
          style={{height:200}}
          >
          <TextInput
            style={{height: 40, width: 100, borderColor: 'gray', borderWidth: 1}}
            placeholder="Destination"
            underlineColorAndroid='transparent'
            />
          <Text> Current Location </Text>
              <Text> {this.state.error} </Text>
        </View>
      <MapView
        style={styles.map}
        initialRegion={this.state.InitialPosition}
        region={this.state.InitialPosition}
      >
        <MapView.Marker
          coordinate={this.state.markerPosition}
          />
        {/*
        <MapViewDirections
          origin={this.state.InitialPosition}
          destination={this.state.guildford}
          apikey={GOOGLE_MAPS_APIKEY}
          mode={"walking"}
          stroke={3}
          strokeCOlor="hotpink"
          />
          */}
      </MapView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   ...StyleSheet.absoluteFillObject,
   flex: 1,
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center',
 },
 map: {
   //...StyleSheet.absoluteFillObject,
   //position: 'absolute',
   //bottom: 0,
   //justifyContent: 'flex-end',
   height: 400,
   width: 400,
 },
});

function mapStateToProps(state){
  return {
  }
}

export default connect(mapStateToProps)(Destination);
