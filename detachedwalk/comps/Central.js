import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';

import Profile from "./Profile/Profile";
import Settings from "./Settings/Settings";
import Destination from './Destination/Destination';


import {connect} from "react-redux";
import {ChangePage} from "../redux/actions.js"


class Central extends React.Component {

  handleButton=(page)=>{
    this.props.dispatch(ChangePage(page));
  }

  render() {

    var curpage = 0;

    //we are changing state to use global state
    switch (this.props.page){
      case 2:
      curpage = <Profile/>
        break;
      case 3:
      curpage = <Settings/>
        break;
      case 4:
      curpage = <Destination/>
          break;
    }

    var curDisplay = 0;

    return (
      <View style={styles.container}>
        {/* TOP BAR  */}
          <View style={{height: 100,flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection:'column',alignSelf:'center'}}>
              <TouchableOpacity
                onPress={this.handleButton.bind(this, 2)}
                >
                <Image style={styles.profileIcon} source={require('./Settings/assets/img/profile.png')}/>
                <Text style={styles.pCaption}>Profile</Text>
              </TouchableOpacity>
            </View>

            <View style={{flexDirection:'column',alignSelf:'center'}}>
              <Image style={styles.destIcon} source={require('./Settings/assets/img/dest1.png')}/>
              <Text style={styles.dCaption}>Destinations</Text>
            </View>

            <View style={{flexDirection:'column', alignSelf:'center'}}>
              <Image style={styles.settIcon} source={require('./Settings/assets/img/settings.png')}/>
              <Text style={styles.sCaption}>Settings</Text>
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

  },
  profileIcon: {
    width: 65,
    height: 65,
  },
  pCaption: {

  },
  destIcon: {
    width: 65,
    height: 65,
  },
  dCaption: {

  },
  settIcon:  {
      width: 80,
      height: 70,
  },
  sCaption: {

  },
});

function mapStateToProps(state){
  return {
    page:state.Page.page
  }
}

export default connect(mapStateToProps)(Central);
