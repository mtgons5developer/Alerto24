import React, { useState } from "react";
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity, StatusBar } from "react-native";
import colors from "../config/colors";

const ForgotPassword = ({ navigation }) => {

    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const onChangeEmail = (val) => {
        setData({
            ...data,
            email: val
        })
    }



    const onChangePassword = (val) => {
        setData({
            ...data,
            password: val
        })
    }

    return (

        <View style={{ width: '100%', height: '100%', backgroundColor: colors.white }}>
            <StatusBar backgroundColor={colors.white} />

            <View style={styles.header}>

                <Image style={{ width: 24, height: 24, position: 'absolute', start: 20 }} source={require('../assets/IconLeft.png')} />

                <Text style={{ fontSize: 20, color: colors.black, textAlign: 'center' }}>
                    Reset Password
                </Text>
            </View>

            <View style={{ width: '100%', height: '100%', marginTop: '25%' }}>

                <Text style={{ fontSize: 32, color: colors.black, textAlign: 'center', marginStart: '5%', marginEnd: '5%', fontWeight: 'bold' }}>
                    Uh-Oh!
                </Text>

                <Text style={{ fontSize: 16, color: colors.black, textAlign: 'center', marginStart: '5%', marginEnd: '5%' }}>
                    It seems like you have forgot your password, Please enter your registered email address below to recieve a recovery email to restore your account.
                </Text>

                <View style={{
                    width: '90%', marginEnd: '5%',
                    marginStart: '5%', borderRadius: 5, elevation: 3,
                    marginTop: '10%', flexDirection: 'row', alignItems: 'center', marginTop: '20%', backgroundColor: '#fff'
                }}>
                    <TextInput
                        style={{ paddingStart: 10, paddingEnd: 10, color: '#000', flex: 1 }}
                        placeholder="Email Address"
                        placeholderTextColor={colors.grey}
                        onChangeText={onChangeEmail}

                    />

                    <Image style={{ width: 24, height: 24, resizeMode: 'contain', end: 10, }} source={require('../assets/mail.png')} />
                </View>

                <TouchableOpacity onPress={() => navigation.replace("ForgotPasswordDone")} style={{ width: '90%', marginEnd: '5%', marginStart: '5%', borderRadius: 5, backgroundColor: colors.yellow, marginTop: '10%' }}>
                    <Text style={{ fontSize: 16, color: colors.black, textAlign: 'center', marginTop: 15, marginBottom: 15 }}>
                        Send Email
                    </Text>
                </TouchableOpacity>


            </View>



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

export default ForgotPassword;