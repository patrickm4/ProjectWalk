import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class PopularEatsModal1 extends React.Component {
  render() {
    return (
      <View style={styles.modalcontainer}>
        <View style={{flex:1,alignSelf:'center'}}>
        <Image style={styles.image} source={require('./assets/img/popeats.png')}/>
        </View>
        
        <View style={{flex:4,alignItems:'center'}}>
        <Text style={{color:'white', fontWeight:'bold',fontSize:32, margin:10,textTransform:'uppercase'}}>Popular Eats</Text>
        
        <Text style={{color:'white', fontSize:20}}>
        4km away from you</Text>
        
        <Text style={{color:'white', margin: 5}}>586 Hornby Street</Text>
        <Text style={{color:'white',margin:5,fontStyle:'italic'}}>Vancouver, BC, Canada</Text>
         
          
        {/*Real time info for event or restaurant*/}
        <View style={{flexDirection:'row',marginTop:15,alignItems:'flex-start'}}>
        
        <Image style={styles.forkimg} source={require('./assets/img/popeats.png')}/>
        <Text style={{color:'white'}}>La Taqueria Pinche Taco Shop</Text>
        
        </View>
        
        <View style={{flexDirection:'row', marginTop:5,alignItems:'flex-start'}}>
        <Image style={styles.smallimg} source={require('./assets/img/eventusers.png')}/>
        <Text style={{color:'white'}}>45 Walk users have eaten here</Text> 
        </View>
        
        <View style={{flexDirection:'row',marginTop:5,alignItems:'flex-start'}}>
        <Image style={styles.timeimg} source={require('./assets/img/time.png')}/> 
        <Text style={{color:'white'}}>11am - 8:30pm</Text>
           </View>
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
    width:35,
    height:50,
    margin:25
  },
  smallimg: {
    width:20,
    height:24
  },
  forkimg: {
    height:25,
    width:15
  },
  timeimg: {
    width:22,
    height:22
  }
});
