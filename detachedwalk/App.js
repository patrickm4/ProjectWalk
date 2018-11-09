import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import thunkMiddleware from 'redux-thunk'
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import reducers from "./redux/combine";

import Main from "./comps/Main";
import { PermissionsAndroid } from 'react-native';

const store = createStore (
  reducers,
  applyMiddleware(
    thunkMiddleware
  )
);

export default class App extends React.Component {

  componentWillMount=async ()=>{
      try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
              {
              'title': 'Location Permission Permission',
              'message': 'App needs access to your Location ' +
                  '.'
              }
            )

            const granted2 = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
              {
              'title': 'Location Permission Permission',
              'message': 'App needs access to your Location ' +
                  '.'
              }
            )
        if (granted2 === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("You can use the Location")
        } else {
          console.log("Location permission denied")
      }
    } catch (err) {
      console.warn(err)
    }
  }

  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
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
