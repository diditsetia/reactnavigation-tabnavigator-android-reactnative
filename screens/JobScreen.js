import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHightLight,
  Button,
  Image,
} from 'react-native';

class JobScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Job',
    tabBarIcon: ({ tintColor }) => (
     <Image
       source={require('../img/job.png')}
       style={[styles.icon, {tintColor: tintColor}]}
     />
   ),

  };

  render(){
    return (
      <Button
        onPress = { ()=> this.props.navigation.goBack()}
        title=" Job "
        />
    );
  }
}

export default JobScreen

const styles = StyleSheet.create ({
  icon: {
    width:26,
    height:26,
  },
});
