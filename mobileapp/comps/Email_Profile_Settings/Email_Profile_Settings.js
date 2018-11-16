import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, TextInput } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{alignItems:'center'}}>
        <Text style={{fontSize:25, flex:0, height:50}}>Profile Settings</Text>
        
        <Text>New Email:</Text>
          
      <TextInput style={{margin:15, alignSelf:'center', color:'gray', borderColor:'gray', borderWidth:1,width:150, height:30}}>New Email</TextInput>
      
      <Text>Confirm New Email:</Text>
          
      <TextInput style={{margin:15,alignSelf:'center', color:'gray', borderColor:'gray', borderWidth:1,width:150, height:30}}>
        Confirm New Email</TextInput>
          
        <View style={styles.butView}>
          
        <TouchableOpacity style={styles.butBox}>
          <Text style={{color:'white',lineHeight: 50, alignSelf:'center'}}>SAVE</Text>
            
          
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
    width: 125,
    height: 50,
    borderRadius: 50,
    
  }
  
});
