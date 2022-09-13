import React from 'react';


import {View,Image} from 'react-native'

export default function Splash({ navigation }) {
  setTimeout(() => {
    navigation.replace('Chat');
  }, 5000);
  return (
    <View> 
    <Image style={{height:'100%', width:'100%'}} resizeMode="cover"  source={require("../src/assets/splash.png")} />
   </View>


  );

}

