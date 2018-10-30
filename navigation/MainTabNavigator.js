import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

//import TabBarIcon from '../components/TabBarIcon';
import SendScreen from '../screens/SendScreen';
import SettingsScreen from '../screens/SettingsScreen'

const HomeStack = createStackNavigator({
    Home: SendScreen,
  });

HomeStack.navigationOptions = {
  tabBarLabel: 'Wallet',
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
}); 

SettingsStack.navigationOptions = {
    tabBarLabel: 'Settings',
  };

export default createBottomTabNavigator({
    HomeStack,
    SettingsStack,
});