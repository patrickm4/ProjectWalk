import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

import {connect} from "react-redux";
import {ChangePage} from "../../redux/actions.js";

class Login extends React.Component {

  email="";
  password="";

  state = {
    users:[]
  }

  handleFetch=()=>{
    var fd = new FormData();
    fd.append("email", this.email);
    fd.append("password", this.password);
    fetch("http://localhost:8888/insertusers.php", {
      method: "POST",
      body:fd
    }).then((resp)=>{
      return resp.json;
    }).then((json)=> {
      if(json){
        alert("THANK YOU");
      }
    })
  }

  handleEmail=(text)=>{
    this.email = text;
  }

  handlePass=(text)=>{
    this.password = text;
  }
  
  handleSelect=()=>{
    var fd = new FormData();
    fd.append("email", this.email);
    fd.append("password", this.password);
  
    fetch("http://localhost:8888/selectuser.php",{
      method:"POST",
      body:fd
    }).then((resp)=>{
      return resp.json();
    }).then((json)=>{
      if(json.length == 0){
        alert("Incorrect email or password");
      }
      else {
        this.props.dispatch(ChangePage(2));
      }

        
    }
      
    );
  }
  
  handlePage=()=>{
    this.props.dispatch(ChangePage(2));
  }
  

  render() {

    var users = this.state.users.map((obj, i)=>{
      return(
        <View key={i} style={{flexDirection:"row"}}>
        <Text>{obj.email}</Text>
        <Text>{obj.password}</Text>
        </View>
      )
    })

    return (
      <View style={styles.container}>
        <Image
          style={{width:200, height:200}}
          source={require("./img/logo.png")}
          />
      <Text
        style={[styles.walkRed, {padding: 20, marginBottom: 30, fontSize:50}]}
        >WALK</Text>
      <View style={styles.textInputBox}>
        <TextInput
          placeholder="Email"
          style={{height: 40, width: 250, borderColor: 'gray', borderWidth: 1}}
          underlineColorAndroid='transparent'
          autoCapitalize="none"
          onChangeText={this.handleEmail}
          />
      </View>
      <View style={styles.textInputBox}>
        <TextInput
          placeholder="Password"
          style={{height: 40, width: 250, borderColor: 'gray', borderWidth: 1}}
          underlineColorAndroid='transparent'
          secureTextEntry={true}
          onChangeText={this.handlePass}
          />
      </View>
      <View style={styles.butView}>
        <TouchableOpacity
          style={styles.butBox}
          onPress={this.handlePage}
          >
          <Text
            style={[styles.textContainer, {color:'white',}]}
            >
            Login</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{position:'absolute', bottom:0}}
        >
        <Text>Dont have an account? Sign up</Text>
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

  bottomStick :{
    //flex:1,
    justifyContent: 'space-between'
  },

  butBox: {
    backgroundColor: '#013b36',
    alignItems: 'center',
    width: 125,
    height: 50,
    borderRadius: 50
  },

  butView: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'center'
  },

  walkRed: {
    color: '#DB504A'
  },

  textInputBox: {
    padding: 10
  },

  textContainer: {
    lineHeight: 50,
  },
});

function mapStateToProps(state){
  return {
  }
}

export default connect(mapStateToProps)(Login);
