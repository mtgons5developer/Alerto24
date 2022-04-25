import React from 'react'
import { View, TextInput, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../config/colors'

const NewLoginScreen = ({ navigation, route }) => {
    return (
        <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: colors.white, flexDirection: 'column' }}>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '10%' }}>

                <Text style={{ fontSize: 20, color: colors.black }}>
                    Choose an option to
                </Text>

                <Text style={{ fontSize: 20, color: colors.brown, marginStart: 5 }}>
                    Log In
                </Text>

            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Login', {
                "deviceToken": route.params.deviceToken
            })}>

                <View style={styles.boxView}>
                    <Image style={styles.imageStyle} source={require('../assets/user.png')} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '5%' }}>

                    <Text style={{ fontSize: 20, color: colors.black }}>
                        Login as
                    </Text>

                    <Text style={{ fontSize: 20, color: colors.brown, marginStart: 5 }}>
                        User
                    </Text>

                </View>
            </TouchableOpacity>

            <Text style={{ fontSize: 20, color: colors.black, marginTop: '10%', marginBottom: '10%' }}>
                -----------or-----------
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate('Login', {
                "deviceToken": route.params.deviceToken
            })}>



                <View style={styles.boxView}>
                    <Image style={styles.imageStyle} source={require('../assets/user.png')} />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '5%' }}>

                    <Text style={{ fontSize: 20, color: colors.black }}>
                        Login as
                    </Text>

                    <Text style={{ fontSize: 20, color: colors.brown, marginStart: 5 }}>
                        Admin
                    </Text>

                </View>

            </TouchableOpacity>
            <Text style={{ fontSize: 16, color: colors.black, marginTop: '10%' }}>
                Don't have an Account?
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate("NewSignup", {
                "deviceToken": route.params.deviceToken
            })} style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, color: colors.brown, marginStart: 5, color: colors.yellow }}>
                    Sign Up
                </Text>

            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    boxView: {
        backgroundColor: colors.brown,
        borderRadius: 17, marginTop: '5%'
    },
    imageStyle: {
        width: 35,
        height: 39.03,
        resizeMode: 'contain',
        margin: 50
    }
})

export default NewLoginScreen