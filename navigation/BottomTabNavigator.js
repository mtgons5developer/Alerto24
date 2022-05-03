import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'

import { Image } from 'react-native'
import VideoPickerComponent from '../components/VideoPickerComponent'
import colors from '../config/colors'
import Categories from '../screens/RootStack/Categories'
import Home from '../screens/RootStack/Home'
import Inbox from '../screens/RootStack/Inbox'
import Profile from '../screens/RootStack/Profile'
import Search from '../screens/RootStack/Search'
import CatNav from '../screens/RootStack/Stacknavigation'
import Upload from '../screens/RootStack/Upload'

const RootStack = createBottomTabNavigator()

const RootStackNavigator = () => {
    return (
        <RootStack.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: { backgroundColor: '#fff', paddingBottom: 2, height: 60 },
                tabBarActiveTintColor: '#ffff',
                tabBarInactiveTintColor: '#fff',
                tabBarHideOnKeyboard: true
            }}

        >
            <RootStack.Screen name="Home" component={Home}

                options={{
                    tabBarLabel: 'Home',
                    tabBarLabelStyle: { color: colors.grey },
                    unmountOnBlur: true,

                    tabBarIcon: ({ color, size }) => (
                        <Image source={require('../assets/home.png')} style={{ width: 18, height: 18 }} />
                    ),

                }}
            />
            <RootStack.Screen name="Search" component={Search}

                options={{
                    tabBarLabelStyle: { color: colors.grey },
                    tabBarLabel: 'Search',
                    unmountOnBlur: true,
                    tabBarIcon: ({ color, size }) => (
                        <Image source={require('../assets/Vector-8.png')} style={{ width: 18, height: 18 }} />
                    ),
                }}

            />
            <RootStack.Screen name="Categories" component={CatNav}

                options={{
                    tabBarLabelStyle: { color: colors.grey },
                    unmountOnBlur: true,
                    headerShown: false,
                    tabBarLabel: 'Categories',
                    tabBarIcon: ({ color, size }) => (
                        <Image source={require('../assets/upload.png')} style={{ width: 18, height: 18 }} />
                    ),
                    tabBarStyle: { display: "none" }
                }}
            />

            {/* <RootStack.Screen name="Upload" component={VideoPickerComponent}

                options={{
                    tabBarLabelStyle: { color: colors.grey },
                    unmountOnBlur: true,
                    headerShown: false,
                    tabBarLabel: 'Upload',
                    tabBarIcon: ({ color, size }) => (
                        <Image source={require('../assets/upload.png')} style={{ width: 18, height: 18 }} />
                    ),
                    tabBarStyle: { display: "none" }
                }}
            /> */}



            <RootStack.Screen name="Inbox" component={Inbox}

                options={{
                    tabBarLabelStyle: { color: colors.grey },
                    tabBarLabel: 'Inbox',
                    unmountOnBlur: true,
                    tabBarIcon: ({ color, size }) => (
                        <Image source={require('../assets/Vector-9.png')} style={{ width: 18, height: 18 }} />
                    ),

                }}
            />
            <RootStack.Screen name="Profile" component={Profile}

                options={({ route }) => ({
                    tabBarLabel: 'Profile',
                    tabBarLabelStyle: { color: colors.grey },
                    unmountOnBlur: true,
                    tabBarIcon: ({ color, size }) => <Image source={require('../assets/Vector-10.png')} style={{ width: 18, height: 18 }} />
                })}


            />



        </RootStack.Navigator>
    )
}

export default RootStackNavigator