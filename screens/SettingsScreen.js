import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHightLight,
  Button,
  Image,
} from 'react-native';

class SettingsScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Settings',
    tabBarIcon: ({ tintColor }) => (
     <Image
       source={require('../img/seting.png')}
       style={[styles.icon, {tintColor: tintColor}]}
     />
   ),

  };

  render(){
    return (
      <Button
        onPress = { ()=> this.props.navigation.goBack()}
        title=" Settings "
        />
    );
  }
}

export default SettingsScreen

const styles = StyleSheet.create ({
  icon: {
    width:26,
    height:26,
  },
});
