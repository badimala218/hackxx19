import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import AllResultsScreen from '../screens/AllResultsScreen';
import ProduceScreen from '../screens/ProduceScreen';
import NotificationsScreen from '../screens/NotificationsScreen';

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

const NotificationsStack = createStackNavigator({
  Notifications: NotificationsScreen,
});

NotificationsStack.navigationOptions = {
  tabBarLabel: 'Notifications',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'ios-alert'}
    />
  ),
};

const AllResultsStack = createStackNavigator({
  AllResults: AllResultsScreen,
});

AllResultsStack.navigationOptions = {
  tabBarLabel: 'All Results',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'ios-trending-up'}
    />
  ),
};

export default createBottomTabNavigator({
  ProduceStack,
  NotificationsStack,
  AllResultsStack,
});
