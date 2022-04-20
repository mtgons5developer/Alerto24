import React from 'react'
import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity } from 'react-native'
import colors from "../config/colors";
const EmailVerified = ({ navigation }) => {
    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: colors.white }}>
            <StatusBar backgroundColor={colors.white} />

            <View style={styles.header}>

                <Image style={{ width: 24, height: 24, position: 'absolute', start: 20 }} source={require('../assets/IconLeft.png')} />

                <Text style={{ fontSize: 20, color: colors.black, textAlign: 'center' }}>
                    Email Verified
                </Text>
            </View>
            <View style={{ width: '90%', height: 100, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#000000', fontSize: 24, marginStart: 40, fontFamily: 'Poppins-SemiBold.ttf' }}> Congratulations :)</Text>

            </View>
            <View style={{ width: '90%', marginEnd: '5%', marginStart: '5%', height: 200, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Image style={{ width: '100%', height: '100%', position: 'absolute', start: 20, resizeMode: 'contain' }} source={require('../assets/winner.png')} />
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ textAlign: 'justify', marginStart: 30, marginEnd: 30, color: '#000000', marginTop: 50.89, fontFamily: 'Poppins-Regular.ttf' }}>
                    Your Email has been verified successfully and you can now continue to your account to access Hundreds of popular guided meditation practices, at the palm of your hand.
                </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Root")} style={{ width: '90%', marginEnd: '5%', marginStart: '5%', borderRadius: 5, backgroundColor: colors.yellow, marginTop: 35, marginBottom: 35 }}>
                <Text style={{ fontSize: 16, color: colors.black, textAlign: 'center', marginTop: 15, marginBottom: 15, fontWeight: '600', fontWeight: '600' }}>
                    Continue
                </Text>
            </TouchableOpacity>

        </View>
    )
}
const styles = StyleSheet.create({

    header: {
        flexDirection: 'row',
        height: 64,
        justifyContent: 'center',
        elevation: 3,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
});
export default EmailVerified