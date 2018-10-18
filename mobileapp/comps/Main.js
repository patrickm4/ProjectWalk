import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


import {connect} from "react-redux";
import {ChangePage} from "../redux/actions.js"

import Login from "./Login/Login";
import Profile from "./Profile/Profile";

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
      curpage = <Profile />
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
