import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';


export default class Main extends React.Component {


  render() {
    return (
      <View style={styles.container}>
      <View style={styles.head}>
<Text style={{color: "#33936F", fontSize: 30}}>WELCOME!</Text>
</View>
<View style={styles.input}>
        <TextInput
          placeholder="Full Name"
          style={{height: 40, width: 250, borderColor: 'gray', borderWidth: 1}}
          underlineColorAndroid='transparent'
          autoCapitalize="none"
          />
      </View>
      <View style={styles.input}>
        <TextInput
          placeholder="Email"
          style={{height: 40, width: 250, borderColor: 'gray', borderWidth: 1}}
          underlineColorAndroid='transparent'
          secureTextEntry={true}
          />
      </View>

      <View style={styles.input}>
        <TextInput
          placeholder="Password"
          style={{height: 40, width: 250, borderColor: 'gray', borderWidth: 1}}
          underlineColorAndroid='transparent'
          secureTextEntry={true}
          />
      </View>
      <View style={styles.or}>
        <Text style={{color:"grey", fontSize: 15}}>Or</Text>
      </View>
      <View style={styles.gg}>
      <Image style={styles.googlesignin} source={require('./img/googlesignin.png')} />
      </View>
<View style={styles.cr}>
      <Button style={{height: 20, width: 20, color: "#fff"}} title="CREATE"
      onPress={this.handleButton.bind(this, 1)}
      ></Button>
      </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: 500,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  head: {
    padding: 25,

  },
  input: {
    padding: 10,
    flexDirection: 'column',
  },
  googlesignin: {
    width:130,
    height:35,
  },
  gg: {
    padding:25,
  },
or: {
  padding:20,
},
cr: {
  padding:35,
  backgroundColor: "#013B36",
}
 
});


