import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  Container,
  Header,
  Content,
  Left,
  Right,


    } from 'native-base';

export default class allEventScreen extends React.Component {

  render () {
      return (
        <Container>
          <View style={{ flex:1, backgroundColor: '#F7F7F7'}}>
            <View style={{height:50, justifyContent: 'center',}}>
            <View style={{ flexDirection: 'row'}}>
              <Text style={{fontSize: 14, marginLeft: 12, fontWeight: 'bold',color:'#D8D7D7'}}>
                 Recommendation Event
              </Text>
              <Right>
              <Text style={{fontSize: 14, marginRight: 33, fontWeight: 'bold', color:'#cf2b5d'}}>
                 See All
              </Text>
              </Right>

            </View>
            </View>
          </View>
        </Container>

    );
  }
}
