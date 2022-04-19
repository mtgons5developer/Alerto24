import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import navigationTheme from "./navigation/navigationTheme";
import AppNavigator from "./navigation/AppNavigator";
import LoginScreen from "./screens//LoginScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewLoginScreen from "./screens/NewLoginScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import WelcomeScreen2 from "./screens/WelcomeScreen2";
import NewSignUpScreen from "./screens/SignUpScreen";
import ForgotPassword from "./screens/ForgotPassword";
import ResetPasswordDone from "./screens/ResetPasswordDone";
import SignUpScreen from "./screens/SignUpScreen2";

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NewSignUpScreen />
    // <NavigationContainer theme={navigationTheme}>
    //   <Stack.Navigator >
    //     <Stack.Screen
    //       options={{ headerShown: false }}
    //       name="LoginScreen"
    //       component={LoginScreen}
    //     />
    //     <Stack.Screen
    //       options={{ headerShown: false }}
    //       name="Dashboard"
    //       component={AppNavigator}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
    // <LoginScreen/>
  );
}
