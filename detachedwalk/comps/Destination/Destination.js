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

  x = 491104.5;
  y = 5456842.89;
  nearCrimes = [];
  nearCrimesLongLat = [];
  locationObj = {};


  state = {
    mapRegion: null,
    error: null,
    latitude: null,
    longitude: null,
    convertedUTM: [],
    modal: false,
    mapRef: null,
    newArr: [],

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

    markerPos :{
      latitude: 49.2567,
      longitude: -123.0073
    },

    VGHmarker: {
      lat: 49.2616,
      long:-123.1239
    },

    guildford: {
      latitude: 49.1987,
      longitude: -122.8125
    }
  }

  componentWillMount(){
    //utm to latlong
    //var utm = "+proj=utm +zone=10";
    //var wgs84 = "+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs";
    //console.log(proj4(utm,wgs84,[491104.5, 5456842.89]));

    var latlong = "+proj=longlat +no_defs";
    var wgs84 = "+proj=utm +zone=10 +ellps=WGS84 +datum=WGS84 +no_defs";

    this.setState({
      //convertedUTM: proj4(utm,wgs84,[491104.5, 5456842.89])
      convertedUTM: proj4(latlong,wgs84,[-123.1239, 49.2616])
    })
  }

  handleCrime=async ()=>{
    // console.log("handleCrimeCall");
    // //console.log(this.state.convertedUTM[0]);
    // var inLong = this.state.convertedUTM[0];
    // var inLat = this.state.convertedUTM[1]
    // var inMark = {
    //   latitude: inLat,
    //   longitude: inLong
    // }
    // var zoomMark = {
    //   latitude: inLat,
    //   longitude: inLong,
    //   latitudeDelta: 0.0922,
    //   longitudeDelta: 0.0421,
    // }
    // this.setState({
    //   markerPos: inMark
    // })
    //this.x = this.state.convertedUTM[0];
    //this.y = this.state.convertedUTM[1];
    var fd = new FormData();

    fd.append("x", this.x);
    fd.append("y", this.y);

    var resp = await fetch("https://walk2.herokuapp.com/mysql/searchCrimeData.php",{
      method:"POST",
      body:fd
    })

    var json = await resp.json();
    console.log(json);
    this.nearCrimes = json;
    console.log("yeetyaw", this.nearCrimes);

    for(var i = 0 ; i < this.nearCrimes.length ;i++){
      var convertedLongLat = [];
      var utm = "+proj=utm +zone=10";
      var wgs84 = "+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs";
      var newX = parseInt(this.nearCrimes[i].x);
      var newY = parseInt(this.nearCrimes[i].y);
      console.log("parsed", newX, newY, "desrap");
      console.log(proj4(utm,wgs84,[newX, newY]));
      convertedLongLat = proj4(utm,wgs84,[newX, newY]);
      console.log("thisvar", convertedLongLat[0]);
      //convertedLongLat: proj4(utm,wgs84,[491104.5, 5456842.89])

      //convertedLongLat.push(proj4(utm,wgs84,[newX, newY]);

      this.nearCrimesLongLat.push({
        lat:convertedLongLat[1],
        lng:convertedLongLat[0]
      })
    }
    this.setState({
      newArr:this.nearCrimesLongLat
    })
    /*  console.log("yawayeet", this.nearCrimesLongLat[0][1], this.nearCrimesLongLat[0][0], this.nearCrimesLongLat[1][1], this.nearCrimesLongLat[1][0], );

    for(var r = 0; r < this.nearCrimesLongLat.length ; r++){
    console.log("check nearcrimeslonglat", this.nearCrimesLongLat[r])
    this.locationObj = Object.assign({a: this.nearCrimesLongLat[r][1], b: this.nearCrimesLongLat[r][0]}, this.nearCrimesLongLat[r]);
    console.log("assignedObj", this.locationObj);
    this.state.newArr.push(this.locationObj);
    }
    console.log("dNewArr", this.state.newArr[0].a);
    //var utm = "+proj=utm +zone=10";
    //var wgs84 = "+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs";
    //console.log(proj4(utm,wgs84,[491104.5, 5456842.89]));
    //convertedUTM: proj4(utm,wgs84,[491104.5, 5456842.89])
    */


  }

  handleCheckpoint=async()=>{
    var fd = new FormData();

    fd.append("x", this.x);
    fd.append("y", this.y);

    var resp = await fetch("https://walk2.herokuapp.com/mysql/searchCrimeData.php",{
      method:"POST",
      body:fd
    })

    var json = await resp.json();
    console.log(json);
    this.nearCrimes = json;
    console.log("yeetyaw", this.nearCrimes);

    for(var i = 0 ; i < this.nearCrimes.length ;i++){
      var convertedLongLat = [];
      var utm = "+proj=utm +zone=10";
      var wgs84 = "+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs";
      var newX = parseInt(this.nearCrimes[i].x);
      var newY = parseInt(this.nearCrimes[i].y);
      console.log("parsed", newX, newY, "desrap");
      console.log(proj4(utm,wgs84,[newX, newY]));
      convertedLongLat = proj4(utm,wgs84,[newX, newY]);
      console.log("thisvar", convertedLongLat[0]);
      //convertedLongLat: proj4(utm,wgs84,[491104.5, 5456842.89])

      //convertedLongLat.push(proj4(utm,wgs84,[newX, newY]);

      this.nearCrimesLongLat.push({
        lat:convertedLongLat[1],
        lng:convertedLongLat[0]
      })
    }
    this.setState({
      newArr:this.nearCrimesLongLat
    })
  /*  console.log("yawayeet", this.nearCrimesLongLat[0][1], this.nearCrimesLongLat[0][0], this.nearCrimesLongLat[1][1], this.nearCrimesLongLat[1][0], );

    for(var r = 0; r < this.nearCrimesLongLat.length ; r++){
    console.log("check nearcrimeslonglat", this.nearCrimesLongLat[r])
    this.locationObj = Object.assign({a: this.nearCrimesLongLat[r][1], b: this.nearCrimesLongLat[r][0]}, this.nearCrimesLongLat[r]);
    console.log("assignedObj", this.locationObj);
    this.state.newArr.push(this.locationObj);
    }
    console.log("dNewArr", this.state.newArr[0].a);
    //var utm = "+proj=utm +zone=10";
    //var wgs84 = "+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs";
    //console.log(proj4(utm,wgs84,[491104.5, 5456842.89]));
    //convertedUTM: proj4(utm,wgs84,[491104.5, 5456842.89])
    */

  }

  componentDidMount() {
    //console.log("yes");
    setInterval(()=>{
      if(this.watchID){
        return false;
      }
      //console.log("getLoc");
      this.watchID = Geolocation.getCurrentPosition((position) => {
        //console.log("geowatch", position);
        var initialRegion = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }

        //console.log(initialRegion);
        //console.log("BRUUUUHHHHH");

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
    //console.log(this.state.newArr);
    var newPoints = this.state.newArr.map((obj, i)=>{
      return(
        <MapView.Marker
          key={i}
          coordinate={{
            latitude: obj.lat,
            longitude: obj.lng
          }}
          />
      )
    })






    const GOOGLE_MAPS_APIKEY  = "AIzaSyAjmeDspw7sOJc5knFHDAw0XOnBB1cVA70";
    //console.log(this.state.InitialPosition);
    return (
      <View style={styles.container}>
        {newPoints}
        <View style={{height:100}}></View>
        <View
          style={{height:200, flex: 2, alignItems: 'center'}}
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
        {newPoints}
        <MapView.Marker
          coordinate={this.state.markerPosition}
          />
        <MapView.Marker
          coordinate={this.state.markerPos}
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
          <TouchableOpacity
            onPress={this.handleCheckpoint}
            >
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
            onPress={this.handleCrime}
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
   //height: 100,
   //width: 400,
   flex: 5,
   backgroundColor: '#333'
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
