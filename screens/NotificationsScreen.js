import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHightLight,
  Button,
  Image,
} from 'react-native';

class NotificationsScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'USER',
    tabBarIcon: ({ tintColor }) => (
     <Image
       source={require('../img/people.png')}
       style={[styles.icon, {tintColor: tintColor}]}
     />
   ),

  };

  render(){
    return (
      <Button
        onPress = { ()=> this.props.navigation.goBack()}
        title="go back home"
        />
    );
  }
}

export default NotificationsScreen

const styles = StyleSheet.create ({
  icon: {
    width:26,
    height:26,
  },
});
