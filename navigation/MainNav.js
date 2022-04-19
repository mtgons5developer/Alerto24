import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import EmailVerified from '../screens/EmailVerified'
import ForgotPassword from '../screens/ForgotPassword'
import LoginScreen from '../screens/LoginScreen'
import NewLoginScreen from '../screens/NewLoginScreen'
import ResetPasswordDone from '../screens/ResetPasswordDone'
import NewSignUpScreen from '../screens/SignUpScreen'
import SignUpScreen2 from '../screens/SignUpScreen2'
import VerifyEmail from '../screens/VerifyEmail'
import WelcomeScreen from '../screens/WelcomeScreen'
import WelcomeScreen2 from '../screens/WelcomeScreen2'
import RootStackNavigator from './BottomTabNavigator'


const Stack = createNativeStackNavigator()

const MainNav = () => {

    return (
        <Stack.Navigator

            screenOptions={{ headerShown: false }}
            initialRouteName='Splash'
        >
            <Stack.Screen name='Splash' component={WelcomeScreen} />
            <Stack.Screen name='Welcome' component={WelcomeScreen2} />
            <Stack.Screen name='NewLogin' component={NewLoginScreen} />
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='NewSignup' component={NewSignUpScreen} />
            <Stack.Screen name='SignUp' component={SignUpScreen2} />
            <Stack.Screen name='VerifyEmail' component={VerifyEmail} />
            <Stack.Screen name='EmailVerfied' component={EmailVerified} />
            <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
            <Stack.Screen name='ForgotPasswordDone' component={ResetPasswordDone} />
            <Stack.Screen name='Root' component={RootStackNavigator} />

        </Stack.Navigator>
    )

}

export default MainNav