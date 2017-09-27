import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHightLight,
  Button,
  Image,
  Dimensions,
  LayoutAnimation,
  Platform,
  UIManager
} from 'react-native';

import { Container,  Header, Content, Left, Right,  Thumbnail, Card, List, ListItem} from 'native-base';
import { width, height, totalSize } from 'react-native-dimension';
import Switch from 'react-native-customisable-switch';

class ProfilScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Profil',
    tabBarIcon: ({ tintColor }) => (
     <Image
       source={require('../img/profile.png')}
       style={[styles.icon, {tintColor: tintColor}]}
     />
   ),
  };

  constructor (){
    super();
    if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    this.state={
      status: true
    }
  }

  ShowHidePersonalInformation = () => {
    if (this.state.status == true)
      {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
        this.setState({status: false})
      } else {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
        this.setState({status:true})
      }
  }

  render(){
    return (
        <Container>
          <Content>
            <View style={{ flex: 1,backgroundColor: '#F7F7F7'}} >
              <View style={{flexDirection: 'row'}}>
                <View>

                  <Text style={{fontSize: 22, fontWeight: 'bold', marginLeft: 12, marginTop: 25, color:'#000'}}>
                    Alena
                  </Text>
                  <Text  style={{fontSize: 22, fontWeight: 'bold', marginLeft: 12, color:'#000'}}>
                    Fernanda JR.
                  </Text>
                  <Text  style={{fontSize: 12, fontWeight: 'bold', marginLeft: 12, color:'#cf2b5d'}}>
                    @alenajr
                  </Text>

                  <Text style={{fontSize: 13, fontWeight: 'bold', marginLeft: 12,marginTop: 10, color:'#7A7676' }} >
                    Modeling, Acting, Spg,
                  </Text>
                  <Text style={{fontSize: 13, fontWeight: 'bold', marginLeft: 12, color:'#7A7676'}}>
                    User, Model...
                  </Text>

                  <Text  style={{fontSize: 13, fontWeight: 'bold', marginLeft: 12,marginTop: 10, color:'#7A7676'}}>
                    Bandung, Jawa Barat
                  </Text>

                </View>
                <Right>
                    <Image style={{marginRight: 12, marginTop: 20, borderRadius: 100, height:160, width:160, borderColor:'#ddd', borderWidth: 1, }}  source={require('./Components/img/foto2.png')} />
              </Right>
              </View>

              <View style={{flexDirection: 'row'}}>
              <View style={styles.wrapgold}>
                  <Left>
                   <Image  style={{width: 15, height: 20, marginTop: 10 , marginBottom: 5 }}  source={require('./Components/img/gold.png')} />
                   </Left>
                   <Text style={{fontSize:14, fontWeight: 'bold', textAlign: 'center'}}>
                    8000
                   </Text>
                   <Text style={{fontSize: 12, marginBottom: 20, textAlign:'center'}}>
                      Reputations
                    </Text>
              </View>
                <View>
                   <Image  style={{width: 1, height: 25, marginTop: 15 , marginLeft: 5, marginRight: 5,}}  source={require('./Components/img/line.png')} />
                </View>
                <View style={styles.wrapgold}>
                  <Left>
                    <Image  style={{width: 20, height: 20, marginTop: 10 , marginBottom: 5 }}  source={require('./Components/img/star.png')} />
                  </Left>
                  <Text style={{ fontSize:14, fontWeight: 'bold', textAlign: 'center'}}>
                      325
                  </Text>
                  <Text style={{fontSize: 12, marginBottom: 20, textAlign:'center'}}>
                    Reviews
                  </Text>
                </View>
                <View style={styles.propswitch}>
                  <Switch
                    defaultValue={false}
                    activeText={'PROFIL'}
                    inactiveText={'CHAT'}
                    activeTextColor={'#000'}
                    inactiveTextColor={'#000'}
                    activeBackgroundColor={'#cf2b5d'}
                    activeButtonBackgroundColor={'#cf2b5d'}
                    activeBackgroundColor={'#fff'}
                    inactiveBackgroundColor={'#fff'}
                    inactiveButtonBackgroundColor={'#cf2b5d'}
                    fontSize={10}
                    fontWeight={'bold'}
                    switchWidth={120}
                    switchHeight={50}
                    switchBorderRadius={25}
                    switchBorderWidth={1}
                    switchBorderColor={'#ddd'}
                    buttonWidth={40}
                    buttonHeight={40}
                    buttonBorderRadius={25}
                    buttonBorderWidth={0}
                    animationTime={150}
                    padding={true}
                    onChangeValue={(value) => {
                        console.log(value);
                      }}
                  />
                </View>
              </View>
            </View>

            <View style={{flex:1, backgroundColor:'#f2f2f2'}}>
              <View style={{marginTop:12,justifyContent:'center',backgroundColor:'#2a87e7', height: Dimensions.get('window').height / 4.5 , marginBottom: 12}}>
                  <Text style={{fontSize: 16, marginLeft: 12, fontWeight:'bold',color:'#fff'}}>
                    Profile Progress : Advanced
                  </Text>
                  <View style={{flexDirection:'row'}}>
                    <View style={{marginTop:10, borderRadius:20, backgroundColor:'#1973cf', marginLeft: 12, height: Dimensions.get('window').height / 53.5 , width: Dimensions.get('window').width / 1.4    }} >
                      <View style={{borderRadius: 20,backgroundColor:'#fff', height: Dimensions.get('window').height / 53.5 , width: Dimensions.get('window').width / 2.0 }}>
                      </View>
                    </View>
                    <Text style={{color: '#fff',marginLeft:10,fontSize:22, fontWeight:'bold'}}>65%</Text>
                  </View>
                  <Text style={{color: '#fff', fontSize: 14, marginTop: 15, paddingLeft: 15, marginRight: 12 ,fontWeight:'bold'}}>
                    Please complete your profile information to Increase your Profile Appearance
                  </Text>
              </View>
            </View>

            <View style={{flex:1, backgroundColor:'#f2f2f2'}}>
              <Card >
                <View style={{ marginLeft:12, marginRight: 12, height: Dimensions.get('window').height/14, justifyContent:'center',borderBottomWidth:1, borderBottomColor:'#e0e0e0', marginBottom:15, marginTop:5,}}>
                  <View style={{flexDirection:'row'}}>
                     <Image  style={{width: Dimensions.get('window').width/18 , height: Dimensions.get('window').height /28 }}  source={require('./Components/img/iconuser.png')} />
                     <Text style={{marginLeft: 10,fontSize:16, fontWeight:'bold', color:'#000'}}>
                       Personal Information
                     </Text>
                     <Right>
                     <Image style={{width: Dimensions.get('window').width/18 , height: Dimensions.get('window').height /28, marginRight:15, marginTop:2}}  source={require('./Components/img/iconedit.png')} />
                     </Right>
                  </View>
                </View>

                <View>
                  { this.state.status ?
                  <Content>
                <View style={{ marginLeft:12, marginRight:12, marginBottom:15}}>
                  <Text style={{fontSize:15, fontWeight: 'bold', marginBottom:13,color:'#000'}}>
                    About
                  </Text>
                  <Text style={{fontSize:15,marginBottom: 15,}}>
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Text>
                </View>

                <View style={{backgroundColor:'#fff',marginBottom:15,marginLeft:12}}>
                  <View style={{flexDirection:'row'}}>
                    <View style={{backgroundColor:'#fff', width:Dimensions.get('window').width/2}}>
                    <Text style={{fontSize:15, fontWeight: 'bold', marginBottom:5,color:'#000'}}>
                      Gender
                    </Text>
                    <Text style={{fontSize:15}}>
                      Woman
                    </Text>
                    </View>

                    <View style={{backgroundColor:'#fff', width:Dimensions.get('window').width/2}}>
                    <Text style={{fontSize:15, fontWeight: 'bold', marginBottom:5,color:'#000'}}>
                      Religion
                    </Text>
                    <Text style={{fontSize:15}}>
                      Koghucu
                    </Text>
                    </View>
                  </View>
                </View>

                  </Content> : null
                  }
                  <Button title='hide text component' onPress={this.ShowHidePersonalInformation} />
                </View>

              </Card>
            </View>

          </Content>
        </Container>
    );
  }
}

export default ProfilScreen

const styles = StyleSheet.create ({
  Container : {
    flex: 1,
  },
  icon: {
    width:26,
    height:26,
  },
  shadow : {
    shadowColor:'#000',
    shadowOpacity: 0,
    borderRadius:100,
    elevation: 2,
  },
  wrapgold : {
    width: width(25),
  },
  propswitch :{
    flex: 1,
    marginLeft: 20,
    marginTop: 15,
  }
});
