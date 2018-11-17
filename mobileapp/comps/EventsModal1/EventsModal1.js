import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class EventsModal1 extends React.Component {
  render() {
    return (
      <View style={styles.modalcontainer}>
        <View style={{flex:1,alignSelf:'center'}}>
        <Image style={styles.image} source={require('./assets/img/nearbyevents.png')}/>
        </View>
        
        <View style={{flex:4,alignItems:'center'}}>
        <Text style={{color:'white', fontWeight:'bold',fontSize:32, margin:10,textTransform:'uppercase'}}>Nearby Event</Text>
        
        <Text style={{color:'white', fontSize:20}}>
        1km away from you</Text>
        
        <Text style={{color:'white', margin: 5}}>Harwood Park</Text>
        <Text style={{color:'white',margin:5,fontStyle:'italic'}}>Vancouver, BC, Canada</Text>
         
          
        {/*Real time info for event or restaurant*/}
        <View style={{flexDirection:'row',marginTop:15,alignItems:'flex-start'}}>
        
        <Image style={styles.smallimg} source={require('./assets/img/music.png')}/>
        <Text style={{color:'white'}}>"Pop Rock Event at Harwood Park"</Text>
        
        </View>
        
        <View style={{flexDirection:'row', marginTop:5,alignItems:'flex-start'}}>
        <Image style={styles.smallimg} source={require('./assets/img/eventusers.png')}/>
        <Text style={{color:'white'}}>5 Walk users currently in the area</Text> 
          </View>
          
        <Text style={{color:'white'}}>Today at 7:00pm</Text>
          
          </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalcontainer: {
    backgroundColor: '#00A9CB',
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    opacity:50
  },
  image: {
    width:50,
    height:50,
    margin:25
  },
  smallimg: {
    width:20,
    height:24
  }
});
