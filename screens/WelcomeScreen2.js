import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import Button from "../components/Button";
import colors from "../config/colors";

function WelcomeScreen2(props) {
    return (

        <View style={{ backgroundColor: colors.white, width: '100%', height: '100%', alignItems: 'center' }}>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '10%' }}>
                {/* <Image style={{ height: '100%', width: '100%', resizeMode: 'contain' }} source={require('../assets/logo.png')} /> */}
                <Text style={{ fontSize: 20, color: colors.black }}>
                    Welcome to the
                </Text>

                <Text style={{ fontSize: 20, color: colors.brown, marginStart: 5 }}>
                    App
                </Text>

            </View>

            <Text style={{ fontSize: 16, color: colors.black, marginStart: 5, marginTop: 10 }}>
                We are glad to see you
            </Text>


            <View style={{ justifyContent: 'center', alignItems: 'center', height: '70%' }}>
                <Image style={{ width: 64, height: 64, resizeMode: 'contain' }} source={require('../assets/arrow_up.png')} />
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={{ fontSize: 14, color: colors.black }}>
                        Swipe up to
                    </Text>

                    <Text style={{ fontSize: 14, color: colors.brown, marginStart: 5 }}>
                        Login
                    </Text>

                </View>
            </View>

            <View style={{ height: '10%', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, color: colors.brown, marginStart: 5, color: colors.yellow }}>
                    Sign Up
                </Text>

            </View>

        </View>

    );
}



export default WelcomeScreen2;
