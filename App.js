import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainNav from "./navigation/MainNav";

export default function App() {

  const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer>

      <MainNav />

    </NavigationContainer>

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
