import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, TouchableOpacity } from 'react-native';

import {connect} from "react-redux";
import {ChangePage} from "../../redux/actions.js"

class Signup extends React.Component {

  fullName="";
  email="";
  password="";

  handleCreate=async()=>{
    var fd = new FormData();
    fd.append("fullname", this.fullName);
    fd.append("email", this.email);
    fd.append("password", this.password);

    var resp = await fetch("https://walk2.herokuapp.com/mysql/insertusers.php",{
      method:"POST",
      body:fd
    })

    var json = await resp.json();
    console.log(json);
    if(json){
      alert("Thank You!")
      this.props.dispatch(ChangePage(2))
    }
  }

  handleEmail=(text)=>{
    this.email = text;
  }

  handlePass=(text)=>{
    this.password = text;
  }

  handleName=(text)=>{
    this.fullName = text;
  }

  handlePrev=()=>{
    this.props.dispatch(ChangePage(1))
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{flexDirection: 'row'}}
          >
          <View
            style={{width:80, height: 40}}
            ></View>
          <View
            style={{width:40, height:40}}
            >
            <TouchableOpacity
              onPress={this.handlePrev}
              >
              <Image
                style={{width:40, height:40}}
                source={require('./img/Arrow.png')}
                />
            </TouchableOpacity>
          </View>
        </View>
      <View style={styles.head}>
<Text style={{color: "#33936F", fontSize: 30}}>WELCOME!</Text>
</View>
<View style={styles.input}>
        <TextInput
          placeholder="Full Name"
          style={{height: 40, width: 250, borderColor: 'gray', borderWidth: 1}}
          underlineColorAndroid='transparent'
          autoCapitalize="none"
          onChangeText={this.handleName}
          />
      </View>
      <View style={styles.input}>
        <TextInput
          placeholder="Email"
          style={{height: 40, width: 250, borderColor: 'gray', borderWidth: 1}}
          underlineColorAndroid='transparent'
          onChangeText={this.handleEmail}
          />
      </View>

      <View style={styles.input}>
        <TextInput
          placeholder="Password"
          style={{height: 40, width: 250, borderColor: 'gray', borderWidth: 1}}
          underlineColorAndroid='transparent'
          secureTextEntry={true}
          onChangeText={this.handlePass}
          />
      </View>
      <View style={styles.or}>
        <Text style={{color:"grey", fontSize: 15}}>Or</Text>
      </View>
      <View style={styles.gg}>
      <Image style={styles.googlesignin} source={require('./img/googlesignin.png')} />
      </View>
<View style={styles.cr}>
      <TouchableOpacity
        style={styles.butBox}
        onPress={this.handleCreate}
        >
        <Text
          style={{lineHeight: 50, color:'white'}}
          >CREATE</Text>
      </TouchableOpacity>

      </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: 500,
    alignItems: 'stretch',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  head: {
    padding: 25,
    alignItems: 'center',
  },
  input: {
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center',
  },
  googlesignin: {
    width:130,
    height:35,
  },
  gg: {
    padding:25,
    alignItems: 'center',
  },
or: {
  padding:20,
  alignItems: 'center',
},
cr: {
  padding:35,
  color: "#013B36",
  alignItems: 'center',
},

butBox: {
  backgroundColor: '#013b36',
  alignItems: 'center',
  width: 125,
  height: 50,
  borderRadius: 50
},

});

function mapStateToProps(state){
  return {
  }
}

export default connect(mapStateToProps)(Signup);
