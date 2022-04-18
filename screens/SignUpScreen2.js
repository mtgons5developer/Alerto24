import React, { useState } from "react";
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity, StatusBar } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { Form, FormField, SubmitButton } from "../components/forms";
import { AsyncStorage } from '@react-native-async-storage/async-storage';

import {
    ToastAndroid,
    Platform,
    AlertIOS,
} from 'react-native';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import colors from "../config/colors";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCEjcCPhzeEtj9Tp_MDZM3waHxM97JeahM",
//   authDomain: "schooapp2022.firebaseapp.com",
//   databaseURL: "https://schooapp2022-default-rtdb.firebaseio.com",
//   projectId: "schooapp2022",
//   storageBucket: "schooapp2022.appspot.com",
//   messagingSenderId: "26197024544",
//   appId: "1:26197024544:web:209e7d360fb391cc3ac145",
//   measurementId: "G-74SZW3KGPH"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);


// const validationSchema = Yup.object().shape({
//   email: Yup.string().required().email().label("Email"),
//   password: Yup.string().required().min(4).label("Password"),
// });

// function LoginScreen({ navigation }) {
//   setTimeout(function (params) {
//     navigation.navigate('Dashboard')

//   }, 100)

const SignUpScreen = () => {

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
                    Login
                </Text>
            </View>

            <Text style={{ fontSize: 16, color: colors.black, textAlign: 'center', marginTop: '20%' }}>
                Please enter you credentials to continue.
            </Text>

            <View style={{
                width: '90%', marginEnd: '5%', marginStart: '5%',
                borderRadius: 5, backgroundColor: '#fff',
                elevation: 3, marginTop: '15%', flexDirection: 'row', alignItems: 'center',
            }}>

                <TextInput
                    style={{ paddingStart: 10, paddingEnd: 10, color: '#000', flex: 1 }}
                    placeholderTextColor={colors.grey}
                    placeholder="Email Address"
                    onChangeText={onChangeEmail}
                />
                <Image style={{ width: 24, height: 24, resizeMode: 'contain', end: 10 }} source={require('../assets/mail.png')} />
            </View>

            <View style={{
                width: '90%', marginEnd: '5%',
                marginStart: '5%', borderRadius: 5, elevation: 3,
                marginTop: '10%', flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff',
            }}>
                <TextInput
                    style={{ paddingStart: 10, paddingEnd: 10, color: '#000', flex: 1 }}
                    placeholder="Password"
                    placeholderTextColor={colors.grey}
                    onChangeText={onChangePassword}

                />

                <Image style={{ width: 24, height: 24, resizeMode: 'contain', end: 10 }} source={require('../assets/lock.png')} />
            </View>



            <View style={{ width: '90%', marginEnd: '5%', marginStart: '5%' }}>
                <Text style={{ fontSize: 16, marginStart: 5, color: colors.yellow, textAlign: 'right', marginTop: 20 }}>
                    Forgot Password?
                </Text>

            </View>

            <View style={{ width: '90%', marginEnd: '5%', marginStart: '5%', borderRadius: 5, backgroundColor: colors.yellow, marginTop: '5%' }}>
                <Text style={{ fontSize: 16, color: colors.black, textAlign: 'center', marginTop: 15, marginBottom: 15 }}>
                    Sign In
                </Text>
            </View>

            <View style={{ position: 'relative', bottom: 0, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '25%' }}>
                <Text style={{ fontSize: 16, color: colors.black, textAlign: 'center' }}>
                    Don't have an Account?
                </Text>
                <TouchableOpacity>
                    <Text style={{ fontSize: 20, color: colors.brown, marginStart: 5, color: colors.yellow, marginTop: '2%' }}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>

        </View>


    );


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

export default SignUpScreen;