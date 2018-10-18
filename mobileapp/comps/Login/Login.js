import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

export default class Login extends React.Component {

  handleButton=()=>{
    this.props.dispatch(ChangePage(2))
  }

  render() {
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
          />
      </View>
      <View style={styles.textInputBox}>
        <TextInput
          placeholder="Password"
          style={{height: 40, width: 250, borderColor: 'gray', borderWidth: 1}}
          underlineColorAndroid='transparent'
          />
      </View>
      <View style={styles.butView}>
        <TouchableOpacity
          style={styles.butBox}
          onPress={this.handleButton}
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
