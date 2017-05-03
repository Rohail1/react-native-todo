/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import {Provider}  from "react-redux"
import {createStore} from "redux"
import reducers from "./App/reducers"


const store = createStore(reducers);

import Greeting from './App/components/greeting';
import TODO from './App/components/todo';

export default class reactNativeTodo extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.viewParent}>
          <TODO name="Rohail"/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  viewParent : {
    flex : 1,
    flexDirection: 'column',
    justifyContent : 'flex-start',
    alignItems : 'center',

//    padding : 20
  }
});

AppRegistry.registerComponent('reactNativeTodo', () => reactNativeTodo);
