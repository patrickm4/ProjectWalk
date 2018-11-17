import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';

import Profile from "./Profile/Profile";
import Settings from "./Settings/Settings";
import Destination from './Destination/Destination';


import {connect} from "react-redux";
import {ChangePage} from "../redux/actions.js";
import {ChangeDisplay} from "../redux/actions.js";


class Central extends React.Component {

  handleButton=(page)=>{
    this.props.dispatch(ChangePage(page));
  }

  handleDisplay=(n)=>{
    this.props.dispatch(ChangeDisplay(n));
  }



  render() {

    var curDisplay = null;

    switch (this.props.cDisp){
      case 7:
      curDisplay = <Settings/>
        break;
      case 6:
      curDisplay = <Destination/>
          break;
    }

    return (
      <View style={styles.container}>
        {/* TOP BAR  */}
          <View style={{height:5}}></View>
          <View style={{height: 100, width: '95%', flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{alignItems:'center'}}>
              <TouchableOpacity
                onPress={this.handleButton.bind(this, 2)}
                >
                <Image style={styles.profileIcon} source={require('./Settings/assets/img/profile.png')}/>
              </TouchableOpacity>
                <Text style={styles.pCaption}>Profile</Text>
            </View>

            <View style={{alignItems:'center'}}>
              <TouchableOpacity
                onPress={this.handleDisplay.bind(this, 6)}
                >
                <Image style={styles.destIcon} source={require('./Settings/assets/img/dest1.png')}/>
              </TouchableOpacity>
              <Text style={styles.dCaption}>Destinations</Text>
            </View>

            <View style={{alignItems:'center'}}>
              <TouchableOpacity
                onPress={this.handleDisplay.bind(this, 7)}
                >
                <Image style={styles.settIcon} source={require('./Settings/assets/img/settings.png')}/>
              </TouchableOpacity>
              <Text style={styles.sCaption}>Settings</Text>
            </View>
          </View>
          {curDisplay}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  profileIcon: {
    width: 65,
    height: 65,
    padding:10
  },
  pCaption: {

  },
  destIcon: {
    width: 65,
    height: 65,
    padding:10
  },
  dCaption: {

  },
  settIcon:  {
      width: 65,
      height: 65,
      padding:10
  },
  sCaption: {

  },
});

function mapStateToProps(state){
  return {
    page:state.Page.page,
    cDisp:state.Page.centralPage
  }
}

export default connect(mapStateToProps)(Central);
