import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, TextInput, Image } from 'react-native';

export default class HomeInfo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{alignItems:'center'}}>
        <Text style={{fontSize:25, flex:0, height:50}}>Home Information</Text>
        
        <Text>Home Address:</Text>
      
          
      <TextInput placeholder="123 Main Street" style={{margin:15, alignSelf:'center', borderColor:'gray',borderWidth:1,width:150, height:30}}></TextInput>
        
        <View style={styles.butView}>
          <TouchableOpacity style={styles.butBox}>
          <Text style={{color:'white',lineHeight: 30, alignSelf:'center'}}>SAVE</Text>
          {/* When clicking "SAVE", user's home address will appear inside the text input......same with emergency contact*/}
          </TouchableOpacity>
      </View>
          
      <Text style={{margin:15}}>Emergency Contact Information:</Text>
       
          
      <TextInput placeholder="Name" style={{margin:5,alignSelf:'center', borderColor:'gray', borderWidth:1,width:150, height:30}}>
       </TextInput>
        
          <TextInput placeholder="Phone Number" style={{margin:0,alignSelf:'center', borderColor:'gray', borderWidth:1,width:150, height:30}}>
       </TextInput>
          
      <View style={styles.butView}>
      <TouchableOpacity style={styles.butBox2}>
      <Image style={{width: 50, height: 50}} source={require('./assets/img/add.png')} />
      </TouchableOpacity> 
          </View> 
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
  butView: {
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'center',
    margin: 15
  },
  butBox: {
    backgroundColor: '#013b36',
    alignItems: 'center',
    width: 80,
    height: 30,
    borderRadius: 50,
  },
  butBox2: {
    //backgroundColor: '#013b36',
    alignItems: 'center',
    //width: 80,
   // height: 30,
   // borderRadius: 50,
  }

  
});
