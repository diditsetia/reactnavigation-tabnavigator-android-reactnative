import React,{ Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHightLight,
  Image,

} from 'react-native';

import {
  TabNavigator
} from 'react-navigation';

// import HomeScreen from "./screens/HomeScreen";
import NotificationsScreen from "./screens/NotificationsScreen";

const MyApp = TabNavigator({

   Home : {
   screen: require('./screens/HomeScreen').default,
 },
 Notifications : {
   screen: NotificationsScreen,
 },
},{
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
  showLabel : true,
  showIcon : true,
  activeTintColor: '#000000',
  inactiveTintColor: '#C7CCCF',
  style: {
   backgroundColor: '#EBEDEF',
 }, indicatorStyle : {
   backgroundColor: '#000000',
 }, tabStyle: {
   borderTopWidth: 1,
   borderTopColor: '#d6d4d4',

 },
  },

});


export default MyApp;
