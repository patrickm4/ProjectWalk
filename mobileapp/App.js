import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import thunkMiddleware from 'redux-thunk'
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import reducers from "./redux/combine";

import Main from "./comps/Main";

const store = createStore (
  reducers,
  applyMiddleware(
    thunkMiddleware
  )
);

export default class App extends React.Component {
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
