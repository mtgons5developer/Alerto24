import React from 'react'

import { View, Text, Image, StyleSheet } from 'react-native'
import colors from '../config/colors'


const ResetPasswordDone = () => {
    return (
        <View style={{ width: '100%', height: '100%', alignItems: 'center', backgroundColor: colors.white }}>
            <View style={styles.header}>

                <Image style={{ width: 24, height: 24, position: 'absolute', start: 20 }} source={require('../assets/IconLeft.png')} />

                <Text style={{ fontSize: 20, color: colors.black, textAlign: 'center' }}>
                    Reset Password
                </Text>
            </View>

            <View style={{ width: '90%', marginEnd: '5%', marginStart: '5%', height: 200, justifyContent: 'center', alignItems: 'center', marginTop: '10%', flexDirection: 'column' }}>
                <Image style={{ width: '100%', height: '100%', position: 'absolute', start: 20, resizeMode: 'contain' }} source={require('../assets/winner.png')} />
            </View>


            <Text style={{ fontSize: 16, color: colors.black, textAlign: 'center', marginStart: '10%', marginEnd: '10%', marginTop: '10%' }}>
                Your account password has been reset.Please log in with new credentioals to get access to you account. Thanks :)
            </Text>

            <View style={{ width: '90%', marginEnd: '5%', marginStart: '5%', borderRadius: 5, backgroundColor: colors.yellow, marginTop: '15%' }}>
                <Text style={{ fontSize: 16, color: colors.black, textAlign: 'center', marginTop: 15, marginBottom: 15 }}>
                    Login
                </Text>
            </View>

        </View>
    )
}

export default ResetPasswordDone
const styles = StyleSheet.create({

    header: {
        flexDirection: 'row',
        height: 64,
        justifyContent: 'center',
        elevation: 3,
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center'
    }
})

