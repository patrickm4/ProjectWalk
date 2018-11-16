import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Login from "./Login/Login";
import Profile from "./Profile/Profile";
import Settings from "./Settings/Settings";
import Destination from './Destination/Destination';
import Signup from './Signup/Signup';
import Central from './Central';

import {connect} from "react-redux";
import {ChangePage} from "../redux/actions.js"


class Main extends React.Component {

  handleButton=(page)=>{
    this.props.dispatch(ChangePage(page));
  }

  render() {

    var curpage = <Login />

    //we are changing state to use global state
    switch (this.props.page){
      case 1:
      curpage = <Login />
        break;
      case 2:
      curpage = <Profile/>
        break;
      case 3:
      curpage = <Settings/>
        break;
      case 4:
      curpage = <Destination/>
          break;
      case 5:
      curpage = <Signup />
        break;
      case 6:
      curpage = <Central/>
        break;
    }



    return (
      <View style={styles.container}>
        {curpage}
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
});

function mapStateToProps(state){
  return {
    page:state.Page.page
  }
}

export default connect(mapStateToProps)(Main);
