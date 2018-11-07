import React from 'react';
import { StyleSheet, Text, View, Image, Switch, Button} from 'react-native';

import {connect} from "react-redux";
import {ChangePage} from "../../redux/actions.js";

//

class Settings extends React.Component {
  render() {
    return (
      <View style={styles.container}>

    {/* TOP BAR  */}
      <View style={{flexDirection: "row"}}>
        <View style={{flexDirection: "column"}}>
        <View>
          <Image style={styles.profileIcon} source={require('./assets/img/profile.png')}/>
          <Text style={styles.pCaption}>Profile</Text>
        </View>
        
        <View>
          <Image style={styles.destIcon} source={require('./assets/img/dest1.png')}/>
        <Text style={styles.dCaption}>Destinations</Text>
        </View>
         
        <View>    
        <Image style={styles.settIcon} source={require('./assets/img/settings.png')}/>
        <Text style={styles.sCaption}>Settings</Text>
    </View>
  </View>       
</View>

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
  },
  profileIcon: {
    width: 65,
    height: 65,
    left: -90,
    top: 40
  },
  pCaption: {
    left: -80,
    top: 45
  },
  destIcon: {
    width: 65,
    height: 65,
    left: 50,
    top: -42 
  },
  dCaption: {
    top: -37,
    left: 45
  },
settIcon:  {
    top: -125,
    width: 80,
    height: 70,
    right: -190
},
sCaption: {
    top: -125,
    right: -200
},
genHeader: {
    fontSize: 25,
    left: -100,
    top: -100
},
notificationsBody: {
    fontSize: 16,
    left: -100,
    top: -90
}

});

function mapStateToProps(state){
  return {
  }
}

export default connect(mapStateToProps)(Settings);
