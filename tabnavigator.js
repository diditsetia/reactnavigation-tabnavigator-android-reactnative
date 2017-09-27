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
 Job : {
   screen: require('./screens/JobScreen').default,
 },

 Notifications : {
   screen: NotificationsScreen,
 },
 Profil : {
   screen : require('./screens/ProfilScreen').default,
 },

 Settings: {
   screen : require('./screens/SettingsScreen').default,
 },

},{
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
  showLabel : true,
  showIcon : true,
  activeTintColor: '#cf2b5d',
  inactiveTintColor: '#C7CCCF',
  labelStyle: {

  fontSize: 8,
    },
  iconStyle: {
    marginTop : 3,
  },
  style: {
   backgroundColor: '#ffffff',
 }, indicatorStyle : {
   backgroundColor: '#cf2b5d',
 }, tabStyle: {

   borderTopWidth: 1,
   borderTopColor: '#ebebf2',

 },
  },

});


export default MyApp;
