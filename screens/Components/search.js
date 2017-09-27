import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
} from 'react-native';

const Search = () => {
const { navbar,navTextInput,backPic, picSrc } = styles;

return (

      <View style={{flex: 1, justifyContent: 'center',}}>
          <TextInput style={navTextInput} underlineColorAndroid={'#FFFFFF'} placeholder='  search talent'/>
      </View>

 ) ;
 };

const styles = {
  navbar : {
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#CF2B5D',
    height:55,
},
  navTextInput : {
    height: 40,
    backgroundColor:'#FFFFFF',
    borderBottomLeftRadius:3,
    borderTopLeftRadius:3,
    borderBottomRightRadius:3,
    borderTopRightRadius:3,
},
  backPic : {
    justifyContent:'center',
    height:40,
    width:40,
    backgroundColor:'#FFFFFF',
    borderBottomRightRadius:3,
    borderTopRightRadius:3,
    borderBottomLeftRadius: 3,
    borderTopLeftRadius: 3,
  },


};

export default Search;
