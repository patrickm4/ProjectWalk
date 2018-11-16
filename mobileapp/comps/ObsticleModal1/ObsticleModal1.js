import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class ObstacleModal1 extends React.Component {
  render() {
    return (
      <View style={styles.modalcontainer}>
        <View style={{flex:1,alignSelf:'center'}}>
        <Image style={styles.image} source={require('./assets/img/obsticle.png')}/>
        </View>
        
        <View style={{flex:4,alignItems:'center'}}>
        <Text style={{color:'white', fontWeight:'bold',fontSize:32, margin:10,textTransform:'uppercase'}}>Obsticle!</Text>
        <Text style={{color:'white', fontSize:20}}>
        0.5km away from you</Text>
        
        <Text style={{color:'white', margin: 5}}>Goard Way</Text>
        <Text style={{color:'white',margin:5,fontStyle:'italic'}}>Burnaby, BC, Canada</Text>
        <Text style={{color:'white',margin:20}}>"Heavy construction work."</Text>
        <Text style={{color:'white'}}>1 minute ago</Text>
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
    width:50,
    height:50,
    margin:25
    
  }
});
