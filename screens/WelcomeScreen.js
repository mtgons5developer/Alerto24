import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import Button from "../components/Button";
import colors from "../config/colors";

function WelcomeScreen(props) {
  return (

    <View style={{ backgroundColor: colors.brown, width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ height: 50, width: 145 }}>
        <Image style={{ height: '100%', width: '100%', resizeMode: 'contain' }} source={require('../assets/logo.png')} />


      </View>
      <Text style={{ fontSize: 20, color: '#fff', marginTop: 10 }}>
        Tag Line
      </Text>

    </View>
    // <ImageBackground
    //   blurRadius={10}
    //   style={styles.background}
    //   source={require("../assets/background.jpg")}
    // >
    //   <View style={styles.logoContainer}>
    //     <Image style={styles.logo} source={require("../assets/logo-red.png")} />
    //     <Text style={styles.tagline}>Sell What You Don't Need</Text>
    //   </View>
    //   <View style={styles.buttonsContainer}>
    //     <Button title="Login" />
    //     <Button title="Register" color="secondary" />
    //   </View>
    // </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
