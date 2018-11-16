import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class DangerModal1 extends React.Component {
  render() {
    return (
      <View style={styles.modalcontainer}>
        <View style={{flex:1,alignSelf:'center'}}>
        <Image style={styles.image} source={require('./assets/img/danger.png')}/>
        </View>
        
        <View style={{flex:4,alignItems:'center'}}>
        <Text style={{color:'white', fontWeight:'bold',fontSize:32, margin:10,textTransform:'uppercase'}}>Danger!</Text>
        <Text style={{color:'white', fontSize:20}}>
          1km away from you</Text>
        
        <Text style={{color:'white', margin: 5}}>Willingdon Ave and Halifax St</Text>
        <Text style={{color:'white',margin:5,fontStyle:'italic'}}>Burnaby, BC, Canada</Text>
        <Text style={{color:'white',margin:20}}>"Assault between two males at Brentwood Station."</Text>
        <Text style={{color:'white'}}>1 hour ago</Text>
          </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalcontainer: {
    backgroundColor: '#013b36',
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    opacity:50
  },
  image: {
    width:40,
    height:60,
    margin:15
    
  }
});
