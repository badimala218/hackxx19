import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
<<<<<<< HEAD
import AllResultsScreen from '../screens/AllResultsScreen';
=======
import SettingsScreen from '../screens/SettingsScreen';
import ProduceScreen from '../screens/ProduceScreen';
>>>>>>> be75296c4c394ffc75c23f3aac5b39c644d9f4ad

const ProduceStack = createStackNavigator({
  Produce: ProduceScreen,
});

ProduceStack.navigationOptions = {
  tabBarLabel: 'Produce',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'ios-list'}
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Notifications',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

<<<<<<< HEAD
const AllResultsStack = createStackNavigator({
  AllResults: AllResultsScreen,
=======

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
>>>>>>> be75296c4c394ffc75c23f3aac5b39c644d9f4ad
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'All Results',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  ProduceStack,
  LinksStack,
  AllResultsStack,
});
