import React, {Component} from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import AppleScreen from './AppleScreen';
import { Button, Alert} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

//const AppleStack = createStackNavigator({
  //Apple: AppleScreen

//});


export default class ProduceScreen extends React.Component {
  static navigationOptions = {
    title: 'Produce Section',
  };

  render() {

      return (
      <Button
       onPress= {() => Alert.alert('Sorry this button does not work!')}
       title="Apple"
       color="#ff0000"
       />
     )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#ADD8E6',
  },
});
