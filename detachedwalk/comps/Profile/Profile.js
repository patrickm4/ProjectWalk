import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';

import {connect} from "react-redux";
import {ChangePage} from "../../redux/actions.js"

class Profile extends React.Component {

  handleButton=(switchPageNum)=>{
    this.props.dispatch(ChangePage(switchPageNum))
  }

  render() {
    return (
      <View style={styles.pcontainer}>

        <View
          style={{height:100, alignItems: "center"}}
          >
          <TouchableOpacity
            style={styles.destinations}
            onPress={this.handleButton.bind(this, 4)}
            >
            {/*page 3 is the settings page*/}
            <Image style={{width: 80, height: 80}} source={require('./assets/img/dest1.png')} />
          </TouchableOpacity>
          <Text style={styles.destText}>Destinations</Text>
        </View>

        <View
          style={{flex:0, alignItems: 'center', flexDirection:"row"}}
          >
          <View
            style={{flex:1, alignItems: 'center'}}
            >
            <TouchableOpacity
              onPress={this.handleButton.bind(this, 6)}
              >
              <Image style={{width: 90, height: 90, borderRadius: 50}} source={require('./assets/img/homeinfo.png')} />
              <Text style={styles.destText}>HomeInfo</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{flex:0, alignItems: 'center'}}
            >
            <Image
              style={{width:100, height:100, borderRadius:50}}
              source={require('./assets/img/default.jpg')} />
            <Text style={styles.name}>Your Name</Text>
            {/*^^we can decide later on how we are going to input the user's name into this text, like a function*/}
          </View>

          <View
            style={{flex:1, alignItems: 'center'}}
            >
            <TouchableOpacity
              onPress={this.handleButton.bind(this, 3)}
              >
              {/*page 3 is the settings page*/}
              <Image style={{width: 90, height: 85}} source={require('./assets/img/settings.png')} />
              <Text style={styles.destText}>Settings</Text>
            </TouchableOpacity>
          </View>

         </View>

        <View style={styles.logoutButton}>
          <Button title="LOG OUT" onPress={this.handleButton.bind(this, 1)} />
        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  pcontainer: {
    flex: 1,
    backgroundColor: '#33936F',
    width: 425,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutButton: {
    alignItems: 'center',
    bottom: -150,
    //display: 'flex',
    //flexDirection: 'row',
    //height: 40,
    backgroundColor: "#ECF0F1",
    borderRadius: 50,
   // width: 10,
    //height: 10
  },
  name: {
    color: "#ECF0F1",
    top: 10,
    fontSize: 20
  },
  pImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  destinations: {
    width: 80,
    height: 80,
    borderRadius: 80,
    justifyContent: 'center',
   // marginBottom: 5
  },
  destText: {
    color: "#ECF0F1",
    top: -5,
    fontSize: 16
  },
  homeSett: {
   flexDirection: 'row',
    //justifyContent: 'space-evenly',
    //alignContent: 'space-between',
   //alignItems: 'baseline',
   // alignItems: 'stretch',
   // flex: .5
  //display: 'flex',

  },
  homeInfo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    //justifyContent: 'flex-start',
    left: 5,


  },
  settings: {
    width: 90,
    height: 80,
    //justifyContent:'space-between',
   // alignItems: 'flex-start'
  },

});

function mapStateToProps(state){
  return {
  }
}

export default connect(mapStateToProps)(Profile);
