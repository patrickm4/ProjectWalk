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

      
        <View style={{ flex: 0,flexDirection: 'row', justifyContent: 'space-between',height: 150,width:340}}>
        <View style={{flexDirection:'column',alignSelf:'center'}}>
          <Image style={styles.profileIcon} source={require('./assets/img/profile.png')}/>
          <Text style={styles.pCaption}>Profile</Text>
        </View>
        
        <View style={{flexDirection:'column',alignSelf:'center'}}>
          <Image style={styles.destIcon} source={require('./assets/img/dest1.png')}/>
        <Text style={styles.dCaption}>Destinations</Text>
        </View>
         
        <View style={{flexDirection:'column', alignSelf:'center'}}>    
        <Image style={styles.settIcon} source={require('./assets/img/settings.png')}/>
        <Text style={styles.sCaption}>Settings</Text>
    </View>
  </View>       


     {/* GENERAL  */}
        <View style={{flex:0,alignSelf:'flex-start'}}>
        <Text style={styles.genHeader}>General Settings</Text>
          
        <View style={{flex:0,alignItems:'flex-start',flexDirection:'row'}}>
        <Text style={{fontSize:16}}>Notifications</Text>
        </View>
          
        <View style={{flex:0, alignSelf:'flex-start'}}>
        <Switch/>
            </View>
        </View>
        

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
      <View style={{height:100, alignItems:'flex-start'}}>
      <Button title="Change Password" style={styles.passwordBut} />
      <Button title="Change Email" style={styles.emailBut}/>
          
      </View>
        </View>



    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
   flexWrap: 'wrap',
   
    
  },
  profileIcon: {
    width: 65,
    height: 65,
   
    
 
  },
  pCaption: {
    
  },
  destIcon: {
    width: 65,
    height: 65,
    
  },

settIcon:  {
   
    width: 80,
    height: 70,
    
},
sCaption: {
  
},
genHeader: {
    fontSize: 25,
    //height: -10
    
},

locationBody: {
    fontSize: 16,
    
},
locationSwitch: {
    
},
mapHeader: {
  
    fontSize: 25,
  
},
DAbody: {
   
    fontSize: 16
},
DASwitch: {
  
},
NBEbody: {
    fontSize: 16
},
NBESwitch: {
   
},
STbody: {
 
    fontSize: 16
},
STSwitch: {
    
},
Checkbody:{
    fontSize: 16,
   
},
checkSwitch: {
   
},
profileHeader: {
    fontSize: 25,
   
},
buttonView:{
 
    top: -95,
    alignItems: 'flex-start'
}

});

function mapStateToProps(state){
  return {
  }
}

export default connect(mapStateToProps)(Settings);
