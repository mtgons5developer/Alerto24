import React from "react"
import { Text, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Categories from "./Categories"
import Services from "./Services"
import ServiceProvider from "./ServiceProvider"


const Stack = createStackNavigator()

const CatNav = () => {
    return (
        <Stack.Navigator

            screenOptions={{
                headerShown: false
            }}

        >
            <Stack.Screen name="category" component={Categories} />
            <Stack.Screen name="service" component={Services} />
            <Stack.Screen name="serviceprovider" component={ServiceProvider} />
        </Stack.Navigator>


    )
}
export default CatNav