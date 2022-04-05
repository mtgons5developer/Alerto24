import React from "react";
import { StyleSheet, Image } from "react-native";
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
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEjcCPhzeEtj9Tp_MDZM3waHxM97JeahM",
  authDomain: "schooapp2022.firebaseapp.com",
  databaseURL: "https://schooapp2022-default-rtdb.firebaseio.com",
  projectId: "schooapp2022",
  storageBucket: "schooapp2022.appspot.com",
  messagingSenderId: "26197024544",
  appId: "1:26197024544:web:209e7d360fb391cc3ac145",
  measurementId: "G-74SZW3KGPH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen({ navigation }) {
setTimeout(function (params) {
  navigation.navigate('Dashboard')

},100)
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <Form
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => onFormSubmit(values)}
        validationSchema={validationSchema}
      >
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </Form>
    </Screen>
  );
  function onFormSubmit(values) {
    // alert('code changed');

    signInWithEmailAndPassword(auth, values.email, values.password).then( function (response) {
      // alert(JSON.stringify(response))
     // await AsyncStorage.setItem('auth',response)
      navigation.navigate('Dashboard')

    }).catch( function (err) {
     // await AsyncStorage.setItem('auth',null)

      const msg = 'Invalid Email or Password. Please Try Again';
      if (Platform.OS === 'android') {
        ToastAndroid.show(msg, ToastAndroid.SHORT)
      } else {
        // AlertIOS.alert(msg);
        alert(msg)
      }

    });
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
