import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import LoginScreen from "./app/screens/LoginScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from "./app/screens/RegisterScreen";
export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <RegisterScreen/>
  );
}
