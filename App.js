import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import navigationTheme from "./navigation/navigationTheme";
import AppNavigator from "./navigation/AppNavigator";
import LoginScreen from "./screens//LoginScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator >
        <Stack.Screen
          options={{ headerShown: false }}
          name="LoginScreen"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Dashboard"
          component={AppNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // <LoginScreen/>
  );
}
