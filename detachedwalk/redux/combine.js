//combine all the reducers
import { combineReducers } from 'redux'
import { Page } from "./reducers";

const myApp = combineReducers ({
  //Reducers
  Page
});

export default myApp;
