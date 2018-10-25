import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';

import {connect} from "react-redux";
import {ChangePage} from "../../redux/actions.js"

class Profile extends React.Component {
  render() {
    return (
      <View style={styles.pcontainer}>


        <Image style={styles.destinations} source={require('./assets/img/dest1.png')} />
        <Text style={styles.destText}>Destinations</Text>

         <Image style={styles.pImage} source={require('./assets/img/default.jpg')} />
         <Text style={styles.name}>Your Name</Text>
        {/*^^we can decide later on how we are going to input the user's name into this text, like a function*/}

        <Image style={styles.homeInfo} source={require('./assets/img/homeinfo.png')} />
        <Text style={styles.homeInfoText}>Home Info</Text>

        <Image style={styles.settings} source={require('./assets/img/settings.png')} />
        <Text style={styles.settText}>Settings</Text>

        <View style={styles.logoutButton}>
          <Button title="LOG OUT" onPress={""} />
        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  pcontainer: {
    flex: 1,
    backgroundColor: '#33936F',
    width: 500,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutButton: {
    position: 'absolute',
    bottom: 10,
    left: 200,
    height: 40,
    backgroundColor: "#ECF0F1",
  },
  name: {
    color: "#ECF0F1",
    top: 10,
    fontSize: 20
  },
  pImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  destinations: {
    width: 80,
    height: 80,
    position: 'absolute',
    top: 150,
    left: 210,
    borderRadius: 40,
  },
  destText: {
    color: "#ECF0F1",
    top: -10,
  },
  homeInfo: {
    width: 80,
    height: 80,
    position: 'absolute',
    top: 290,
    left: 90,
    borderRadius: 40,
  },
  homeInfoText: {
    color: "#ECF0F1",
    top: -10,
    left: -117
  },
  settings: {
    width: 90,
    height: 80,
    position: 'absolute',
    top: 295,
    right: 90,
  },
  settText: {
    color: "#ECF0F1",
    bottom: 28,
    right: -111
  }
});

function mapStateToProps(state){
  return {
  }
}

export default connect(mapStateToProps)(Profile);
