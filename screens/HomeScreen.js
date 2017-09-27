import React  from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHightLight,
  Button,
  Image,
  ScrollView,
} from 'react-native';

import {
  Container,
  Header,
  Content,
  Tab,
  Tabs
    } from 'native-base';
  import Tab1 from './Components/scr/allEventScreen';
  import Tab2 from './Components/scr/hotEventScreen';
  import Tab3 from './Components/scr/nearbyScreen';
  import Tab4 from './Components/scr/upcomingScreen';

  import  Search from './Components/search';
  import Slider from './Components/slider';



 class HomeScreen extends React.Component{
   static navigationOptions = {
     tabBarLabel : "Home",
     tabBarIcon: ({ tintColor }) => (
      <View>
      <Image
        source={require('../img/home.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
      </View>
    ),
  };

  render() {
    return(
      <ScrollView>
      <Container>
          <Slider />
          <Header style={{backgroundColor: '#cf2b5d'}}>
            <Search />
          </Header>

          <Tabs initialPage={0} tabBarUnderlineStyle={{backgroundColor:'#cf2b5d'}}>

            <Tab heading="ALL EVENT" tabStyle={{backgroundColor: '#fff'}} activeTabStyle={{backgroundColor:'#fff'}} textStyle={{ fontSize: 12, fontWeight: 'bold', color:'#C7CCCF'}} activeTextStyle={{color: '#cf2b5d', fontWeight: 'bold', fontSize:12,}}>

              <Tab1/>
            </Tab>

            <Tab heading="HOT EVENT" tabStyle={{backgroundColor: '#fff'}} activeTabStyle={{backgroundColor:'#fff'}} textStyle={{ fontSize: 12, fontWeight: 'bold', color : '#C7CCCF'}} activeTextStyle={{color: '#cf2b5d', fontWeight: 'bold', fontSize:12,}}>
              <Tab2/>
            </Tab>

            <Tab heading="NEARBY" tabStyle={{backgroundColor: '#fff'}} activeTabStyle={{backgroundColor:'#fff'}} textStyle={{ fontSize: 12, fontWeight: 'bold', color: '#C7CCCF'}} activeTextStyle={{color: '#cf2b5d', fontWeight: 'bold', fontSize:12,}}>
              <Tab3/>
            </Tab>

            <Tab heading="UPCOMING"  tabStyle={{backgroundColor: '#fff'}} activeTabStyle={{backgroundColor:'#fff'}} textStyle={{ fontSize: 12, fontWeight: 'bold' , color: '#C7CCCF'}} activeTextStyle={{color: '#cf2b5d', fontWeight: 'bold', fontSize:12,}}>
              <Tab4/>
            </Tab>

          </Tabs>

        </Container>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,

  },


});

export default HomeScreen
