import React from 'react'
import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity } from 'react-native'
import colors from "../config/colors";
const VerifyEmail = ({ navigation }) => {
    return (

        <View style={{ width: '100%', height: '100%', backgroundColor: colors.white }}>
            <StatusBar backgroundColor={colors.white} />

            <View style={styles.header}>

                <Image style={{ width: 24, height: 24, position: 'absolute', start: 20 }} source={require('../assets/IconLeft.png')} />

                <Text style={{ fontSize: 20, color: colors.black, textAlign: 'center' }}>
                    Verify Email
                </Text>
            </View>
            <View style={{ width: '90%', marginEnd: '5%', marginStart: '5%', height: 200, justifyContent: 'center', alignItems: 'center', marginTop: '30%' }}>
                <Text style={{ color: '#000', fontSize: 24, fontWeight: '600' }}>Email Verification</Text>

                <Text style={{ marginTop: 25, color: '#000', fontSize: 16, textAlign: 'justify' }}>
                    We have sent you an Email with a verification link in it. Please check you mailbox to verify Email and continue seemlessly. Do check your spam folder if you don’t find the Email in your inbox.
                </Text>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("EmailVerfied")} style={{ width: '90%', marginEnd: '5%', marginStart: '5%', borderRadius: 5, backgroundColor: colors.yellow, marginTop: '5%', marginBottom: 35 }}>
                <Text style={{ fontSize: 16, color: colors.black, textAlign: 'center', marginTop: 15, marginBottom: 15, fontWeight: '600' }}>
                    Got It.
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
export default VerifyEmail 