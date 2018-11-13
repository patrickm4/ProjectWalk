import React from 'react';
import { StyleSheet, Text, View, Image, Switch, Button} from 'react-native';
//import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

import {connect} from "react-redux";
import {ChangePage} from "../../redux/actions.js";

//

class Settings extends React.Component {
    

  render() {
    return (
      <View style={styles.container}>

    {/* TOP BAR  */}
        {/* hello  */}
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
        <Switch style={styles.notSwitch}/>
   
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
      <Button title="Change Email" style={styles.emailBut}/>
      </View>
        </View>



    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexWrap: 'wrap',
   
    
  },
  profileIcon: {
    width: 65,
    height: 65,
    top: 45,
    
   alignItems: 'flex-start'
  },
  pCaption: {
    left: -80,
    top: 45
  },
  destIcon: {
    width: 65,
    height: 65,
    left: 65,
    top: -42 
  },
  dCaption: {
    top: -37,
    left: 60
  },
settIcon:  {
    top: -125,
    width: 80,
    height: 70,
    right: -210
},
sCaption: {
    top: -125,
    right: -220
},
genHeader: {
    fontSize: 25,
    left: -90,
    top: -100
},
notificationsBody: {
    fontSize: 16,
    left: -90,
    top: -90
},
notSwitch: {
  right: 10,
    top: -119,
 // flexWrap: 'nowrap'
  alignItems: 'flex-end'
},
locationBody: {
    fontSize: 16,
    top: -100,
    left: -90
},
locationSwitch: {
    right:-220,
    top: -126
},
mapHeader: {
    left: -90,
    fontSize: 25,
    top: -100
},
DAbody: {
    top: -90,
    left: -90,
    fontSize: 16
},
DASwitch: {
    top:-120,
    right:-220
},
NBEbody: {
    top: -100,
    left: -90,
    fontSize: 16
},
NBESwitch: {
    top: -127,
    right:-220
},
STbody: {
    top: -105,
    left: -90,
    fontSize: 16
},
STSwitch: {
    top: -132,
    right: -220
},
Checkbody:{
    fontSize: 16,
    top: -100,
    left: -90
},
checkSwitch: {
    top: -130,
    right: -220
},
profileHeader: {
    fontSize: 25,
    left: -90,
    top: -100
},
buttonView:{
   left: -100,
    top: -95,
    alignItems: 'flex-start'
}

});

function mapStateToProps(state){
  return {
  }
}

export default connect(mapStateToProps)(Settings);
