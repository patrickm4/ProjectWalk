import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
//import {Location, Permissions} from 'expo';
//import { MapView } from 'expo';
//import { MapViewDirections } from 'react-native-maps-directions';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Polyline } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

import proj4 from 'proj4';

import {connect} from "react-redux";
import {ChangePage} from "../../redux/actions.js";

class Destination extends React.Component {


  state = {
    mapRegion: null,
    error: null,
    latitude: null,
    longitude: null,
    convertedUTM: [],

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

  handleCrime=()=>{


  }

  testCheckpoint=()=>{
    var utm = "+proj=utm +zone=10";
    var wgs84 = "+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs";
    //console.log(proj4(utm,wgs84,[491104.5, 5456842.89]));

    this.setState({
      convertedUTM: proj4(utm,wgs84,[491104.5, 5456842.89])
    })

    console.log(this.state.convertedUTM[0]);
    console.log("testchk");
  }

  componentDidMount() {
    console.log("yes");
    setInterval(()=>{
      if(this.watchID){
        return false;
      }
      console.log("getLoc");
      this.watchID = Geolocation.getCurrentPosition((position) => {
        console.log("geowatch", position);
        var initialRegion = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }

        //console.log(initialRegion);
        console.log("BRUUUUHHHHH");

        this.setState({
             InitialPosition: initialRegion,
             markerPosition: initialRegion
           });
      },
        (error) => {
          clearInterval(this.watchID)
          this.watchID = null;
          console.log(error);
          this.setState({ error: error.message })},
        { enableHighAccuracy: true, timeout: 5000, maximumAge: 1000 },
      );
    }, 1000)

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
    //console.log(this.state.InitialPosition);
    return (
      <View style={styles.container}>
        <View
          style={{height:200, flex:1}}
          >
        <TouchableOpacity
          style={{left:0, position: "absolute"}}
          onPress={this.handlePage.bind(this, 2)}
          >
          <Text
            style={{fontSize:30}}
            >Back</Text>
        </TouchableOpacity>
        </View>
        <View
          style={{height:200, flex: 2}}
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
        provider={PROVIDER_GOOGLE}
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
      <View
        style={styles.destNav}
        >
        <View
          style={{padding: 15}}
          >
          <TouchableOpacity>
            <Image
              style={{width:80, height: 80}}
              source={require('./img/Checkpoint.png')}
              />
          </TouchableOpacity>
        </View>
        <View
          style={{padding: 15}}
          >
          <TouchableOpacity
            onPress={this.handleCrime()}
            >
            <Image
              style={{width:80, height: 80}}
              source={require('./img/Nearby.png')}
              />
          </TouchableOpacity>
        </View>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   ...StyleSheet.absoluteFillObject,
   flex: 1,
   flexDirection: 'column',
   alignItems: 'stretch',
 },
 map: {
   //...StyleSheet.absoluteFillObject,
   //position: 'absolute',
   //bottom: 0,
   //justifyContent: 'flex-end',
   height: 400,
   width: 400,
   flex: 5,
 },
 destNav: {
   height:20,
   backgroundColor: "#fff",
   flex: 1.7,
   flexDirection: "row",
   justifyContent: "space-between",
 }
});

function mapStateToProps(state){
  return {
  }
}

export default connect(mapStateToProps)(Destination);
