import React, { useEffect } from "react";
import { ImageBackground, StyleSheet, View, Image, Text, AsyncStorage } from "react-native";


import colors from "../config/colors";

const WelcomeScreen = ({ navigation }) => {

  async function handleNavigation() {
    let token = await AsyncStorage.getItem("token")
    setTimeout(() => {
      if (token != null) {
        navigation.replace('Root')
      } else {
        navigation.replace('Welcome')
      }

    }, 2000)
  }


  useEffect(() => {
    handleNavigation()
  }, [])

  return (

    <View style={{ backgroundColor: colors.brown, width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ height: 50, width: 145 }}>
        <Image style={{ height: '100%', width: '100%', resizeMode: 'contain' }} source={require('../assets/logo.png')} />


      </View>
      <Text style={{ fontSize: 20, color: '#fff', marginTop: 10 }}>
        Tag Line
      </Text>

    </View>

  );
}


export default WelcomeScreen;
