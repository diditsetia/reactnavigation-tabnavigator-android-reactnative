import React  from 'react';
import SVGImage from 'react-native-svg-image';
import {
  StyleSheet,
  Text,
  View,
  TouchableHightLight,
  Button,
  Image,
} from 'react-native';

 class HomeScreen extends React.Component{
   static navigationOptions = {
     tabBarLabel : "Rumah",
     tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../img/home1.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return(
      <View>
        <Button
          onPress= { () => this.props.navigation.navigate('Notifications')}
          title = "go to user"
          />

      </View>

    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

export default HomeScreen
