/**
 * Created by Rohail on 4/27/2017.
 */


import React, { Component } from 'react';
import {
  Button,
  Alert,
  Text,
  View
} from 'react-native';

import greetingStyles from "./styles/greeting"

const OnButtonTap = () => {
  Alert.alert('Button has been pressed!');
};
export default class Greeting extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <View>
        <Text color="#1E90FF" style={greetingStyles.textHeader}>Hi, {this.props.name}</Text>
        <Button
          onPress={OnButtonTap}
          title="Tap Here"
          color="#4169E1"
        />
      </View>
    )
  }
}
