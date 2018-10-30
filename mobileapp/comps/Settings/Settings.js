import React from 'react';
import { StyleSheet, Text, View, Image, Switch, Button} from 'react-native';

import {connect} from "react-redux";
import {ChangePage} from "../../redux/actions.js";

class Settings extends React.Component {
  render() {
    return (
      <View style={styles.container}>

    {/* TOP BAR   */}
        <Image style={styles.profileIcon} source={require('./assets/img/profile.png')}/>
        <Text style={styles.pCaption}>Profile</Text>
        <Image style={styles.destIcon} source={require('./assets/img/dest1.png')}/>
        <Text style={styles.dCaption}>Destinations</Text>
        <Image style={styles.settIcon} source={require('./assets/img/settings.png')}/>
        <Text style={styles.sCaption}>Settings</Text>



     {/* GENERAL  */}
        <Text style={styles.genHeader}>General Settings</Text>
        <Text style={styles.notificationsBody}>Notifications</Text>
        <Switch style={styles.notifySwitch}/>
        <Text style={styles.locationBody}>Show My Location</Text>
        <Switch style={styles.locationSwitch}/>


     {/*MAP SETTINGS*/}
      <Text style={styles.mapHeader}>Map Settings</Text>
      <Text style={styles.DAbody}>Show Dangerous Activities</Text>
      <Switch style={styles.DASwitch}/>
      <Text style={styles.NBEbody}>Show Nearby Events</Text>
      <Switch style={styles.NBESwitch}/>
      <Text style={styles.STbody}>Allow Safety Tips</Text>
      <Switch style={styles.STSwitch}/>
      <Text style={styles.Checkbody}>Allow Checkpoints</Text>
      <Switch style={styles.checkSwitch}/>

      {/*PROFILE SETTINGS*/}
      <Text style={styles.profileHeader}>Profile Settings</Text>
      <View style={styles.buttonView}>
      <Button title="Change Password" style={styles.passwordBut} />
      <Button title="Change Email" style={styles.emailBut} />
      </View>
        </View>



    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileIcon: {
    width: 65,
    height: 65,
    position: 'absolute',
    top: 40,
    left: 15
  },
  pCaption: {
    position: 'absolute',
    top: 110,
    left: 26
  },
  destIcon: {
    width: 65,
    height: 65,
    position: 'absolute',
    top: 40
  },
  dCaption: {
    position: 'absolute',
    top: 110
  },
  settIcon: {
    width: 65,
    height: 65,
    position: 'absolute',
    top: 45,
    right: 20
  },
  sCaption: {
    position: 'absolute',
    top: 110,
    right: 27
  },
  genHeader: {
    fontSize: 25,
    position: 'absolute',
    top: 150,
    left: 20,
  },
  notificationsBody: {
    fontSize: 18,
    position: 'absolute',
    top: 195,
    left: 20
  },
  notifySwitch: {
    position: 'absolute',
    right: 20,
    top: 190
  },
  locationBody: {
    fontSize: 18,
    position: 'absolute',
    top: 240,
    left: 20
  },
  locationSwitch: {
    position: 'absolute',
    right: 20,
    top: 235,
  },
  mapHeader: {
    fontSize: 25,
    position: 'absolute',
    left: 20,
    top: 290
  },
  DAbody: {
    fontSize: 18,
    position: 'absolute',
    left: 20,
    top: 335
  },
  DASwitch: {
    position: 'absolute',
    right: 20,
    top: 330
  },
  NBEbody: {
    fontSize: 18,
    position: 'absolute',
    left: 20,
    top: 382
  },
  NBESwitch: {
    position: 'absolute',
    right: 20,
    top: 378
  },
  STbody: {
    fontSize: 18,
    position: 'absolute',
    left: 20,
    top: 430
  },
  STSwitch: {
    position: 'absolute',
    right: 20,
    top: 425
  },
  Checkbody: {
    fontSize: 18,
    position: 'absolute',
    left: 20,
    top: 477
  },
  checkSwitch: {
    position: 'absolute',
    right: 20,
    top: 469
  },
  profileHeader: {
    fontSize: 25,
    left: 20,
    top: 525,
    position: 'absolute',
  },
  buttonView: {
  position: 'absolute',
   marginTop: 700,

  },


});

function mapStateToProps(state){
  return {
  }
}

export default connect(mapStateToProps)(Settings);
