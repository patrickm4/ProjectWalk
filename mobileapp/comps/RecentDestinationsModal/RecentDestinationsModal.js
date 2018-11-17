import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';

export default class RecentDestinationsModal extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.modalcontainer}>
        <Text style={{fontSize:20, fontWeight:'bold',margin:15}}>Recent Destinations</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
          
          <Text style={{alignItems:'flex-start',margin:10}}>Recent place</Text>
          
          <View style={{width:20, height:20}}>
          <Image style={{width:20, height:35}} source={require('./assets/img/marker.png')}/>
          </View>
          </View>
          
      <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
          
          <Text style={{alignItems:'flex-start',margin:10}}>Recent place</Text>
          
          <View style={{width:20, height:20}}>
          <Image style={{width:20, height:35}} source={require('./assets/img/marker.png')}/>
          </View>
          </View>
          
           <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
          
          <Text style={{alignItems:'flex-start',margin:10}}>Recent place</Text>
          
          <View style={{width:20, height:20}}>
          <Image style={{width:20, height:35}} source={require('./assets/img/marker.png')}/>
          </View>
          </View>
                 <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
          
          <Text style={{alignItems:'flex-start',margin:10}}>Recent place</Text>
          
          <View style={{width:20, height:20}}>
          <Image style={{width:20, height:35}} source={require('./assets/img/marker.png')}/>
          </View>
          </View>
                 <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
          
          <Text style={{alignItems:'flex-start',margin:10}}>Recent place</Text>
          
          <View style={{width:20, height:20}}>
          <Image style={{width:20, height:35}} source={require('./assets/img/marker.png')}/>
          </View>
          </View>
                
    <View style={styles.closeView}>
      <TouchableOpacity style={styles.closeBut}>
        <Text style={{color:'white',lineHeight:30,alignSelf:'center'}}>Close</Text>  
          </TouchableOpacity>
          </View> 
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //made the background blue so u were able to see the modal, you can change it later
    backgroundColor: '#00A9CB',
    //height: 300,
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    opacity:50
  },
  modalcontainer: {
    alignItems: 'center',
    width: 310,
    height: 400,
    backgroundColor: 'white',
    borderColor: '#013B36',
    borderStyle: 'solid',
    borderWidth: 5,
    borderRadius:10
  },
  closeBut: {
    backgroundColor: '#013B36',
    alignItems:'center',
    width: 100,
    height:30,
    borderRadius:10,
    //alignSelf:'center'
  },
  closeView: {
    display:'flex',
    //flexDirection:'row',
    justifyContent:'center',
    margin:10
  }
  
});
