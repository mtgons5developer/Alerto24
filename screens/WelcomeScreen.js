import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, View, Image, Text, AsyncStorage } from "react-native";
import PushController from '../services/firebaseService'
import colors from "../config/colors";
const WelcomeScreen = ({ navigation }) => {

  let deviceToken = ""

  async function handleNavigation() {
    let token = await AsyncStorage.getItem("token")
    let type = await AsyncStorage.getItem("user_type")
    setTimeout(() => {
      if (token != null) {

        if (type == "user") {
          navigation.replace('Root')
        } else {
          navigation.replace('RootAdmin')
        }

      } else {

        console.log(deviceToken)
        navigation.replace('Welcome', {
          "deviceToken": deviceToken
        })
      }

    }, 2000)
  }

  const pull_data = (data) => {
    console.log("Data", data)
    deviceToken = data.token
  }

  function handleNotificationNavigation() {
    navigation.navigate("TaskQueued")
  }


  useEffect(() => {
    handleNavigation()
  }, [])

  return (

    <View style={{ backgroundColor: colors.brown, width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>

      <PushController handleNavigation={handleNotificationNavigation} func={pull_data} />

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
