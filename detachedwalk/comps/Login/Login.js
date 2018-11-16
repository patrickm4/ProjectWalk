import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import proj4 from 'proj4';

import {connect} from "react-redux";
import {ChangePage} from "../../redux/actions.js";

class Login extends React.Component {

  email="";
  password="";

  state = {
    users:[],
    dlatlng:"",
    x: 491104.5,
    y: 5456842.89,
    zone:10,
    zoneL:'U'
  }

  handleFetch=()=>{
    var fd = new FormData();
    fd.append("email", this.email);
    fd.append("password", this.password);
    fetch("http://a07yd3a6okcidwap.cbetxkdyhwsb.us-east-1.rds.amazonaws.com/insertusers.php", {
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
    console.log("email", text);
    this.email = text;
  }

  handlePass=(text)=>{
    this.password = text;
  }

  handleSelect=async ()=>{
    var fd = new FormData();
    console.log("handleSelectStart");
    fd.append("email", this.email);
    fd.append("password", this.password);

    var resp = await fetch("https://walk2.herokuapp.com/mysql/selectuser.php",{
      method:"POST",
      body:fd
    })

    var json = await resp.json();
    console.log(json);
    if(json.length == 0 || "" || null){
      console.log("ifistrue");
      alert("Incorrect email or password");
    }
    else {
      console.log("ifisfalse");
      this.props.dispatch(ChangePage(2));
    }
    console.log("handleSelectEND");
  }

  handlePage=()=>{
    this.props.dispatch(ChangePage(2));
  }


    handlePage=()=>{

      {/*
      var utmObj = require('utm-latlng');

      var utm = new utmObj();

      utm.convertUtmToLatLng(this.state.x, this.state.y, this.state.zone, this.state.zoneL);
      utm.convertLatLngToUtm(49.264276, -123.122274);
      console.log(utm);
      */}


      var utm = "+proj=utm +zone=10";
      var wgs84 = "+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs";
      console.log(proj4(utm,wgs84,[491104.5, 5456842.89]));

      console.log("page2");

      this.props.dispatch(ChangePage(2));
    }

    handleSignUp=()=>{
      this.props.dispatch(ChangePage(5));
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
          onPress={this.handleSelect}
          >
          <Text
            style={[styles.textContainer, {color:'white',}]}
            >
            LOGIN</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{position:'absolute', bottom:0}}
        >
        <View
            style={{flexDirection: "row"}}
            >
            <Text>Dont have an account?</Text>
            <TouchableOpacity
              onPress={this.handleSignUp}
              >
              <Text

                >Sign up</Text>
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
