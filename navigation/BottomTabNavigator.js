import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import colors from '../config/colors'
import Home from '../screens/RootStack/Home'
import Inbox from '../screens/RootStack/Inbox'
import Profile from '../screens/RootStack/Profile'
import Search from '../screens/RootStack/Search'
import CatNav from '../screens/RootStack/Stacknavigation'

const RootStack = createBottomTabNavigator()

const CustomTabBarButton = ({ children, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{
            top: -30,
            alignItems: 'center',
            ...styles,
            backgroundColor: '#fff',
            width: 80, height: 80, borderRadius: 40, elevation: 8
        }}>
            <View  >
                {children}
            </View>
        </TouchableOpacity>

    )

}

const RootStackNavigator = () => {


    return (
        <RootStack.Navigator



            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#fff',
                    height: 70, borderRadius: 15, elevation: 3,
                },
                tabBarActiveTintColor: colors.yellow,
                tabBarInactiveTintColor: colors.grey,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
            }}

        >
            <RootStack.Screen name="Home" component={Home}

                options={{
                    tabBarLabel: 'Home',

                    tabBarLabelStyle: { color: colors.grey },
                    unmountOnBlur: true,

                    tabBarIcon: ({ color, size }) => (
                        <View style={styles.viewLabelStyle}>

                            <Image source={require('../assets/home.png')} style={{ width: 18, height: 18, resizeMode: 'contain' }} />

                            <Text style={styles.textStyleLabel}>
                                Home
                            </Text>
                        </View>
                    ),

                }}
            />
            <RootStack.Screen name="Search" component={Search}

                options={{
                    tabBarLabelStyle: { color: colors.grey },
                    tabBarLabel: 'Search',
                    unmountOnBlur: true,
                    tabBarIcon: ({ color, size }) => (
                        <View style={styles.viewLabelStyle}>
                            <Image source={require('../assets/Vector-8.png')} style={{ width: 18, height: 18 }} />
                            <Text style={styles.textStyleLabel}>
                                Search
                            </Text>
                        </View>

                    ),
                }}

            />
            <RootStack.Screen name="Categories" component={CatNav}

                options={{

                    unmountOnBlur: true,
                    tabBarShowLabel: false,
                    headerShown: false,



                    tabBarIcon: ({ color, size }) => (

                        <View style={styles.viewLabelStyle} >
                            <Image source={require('../assets/plus.png')} style={{ width: 24, height: 24, resizeMode: 'contain' }} />
                        </View>


                    ),
                    tabBarStyle: { display: "none" },
                    tabBarButton: ((props) => (<CustomTabBarButton  {...props} />))
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
                        <View style={styles.viewLabelStyle}>
                            <Image source={require('../assets/Vector-9.png')} style={{ width: 18, height: 18, resizeMode: 'contain' }} />
                            <Text style={styles.textStyleLabel}>
                                Inbox
                            </Text>
                        </View>
                    ),

                }}
            />
            <RootStack.Screen name="Profile" component={Profile}

                options={({ route }) => ({
                    tabBarLabel: 'Profile',
                    tabBarLabelStyle: { color: colors.grey },
                    unmountOnBlur: true,
                    tabBarIcon: ({ color, size }) => (
                        <View style={styles.viewLabelStyle}>
                            <Image source={require('../assets/Vector-10.png')} style={{ width: 18, height: 18, resizeMode: 'contain' }} />
                            <Text style={styles.textStyleLabel}>
                                Profile
                            </Text>

                        </View>
                    )


                })}


            />



        </RootStack.Navigator>
    )
}


const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5, elevation: 5
    },
    textStyleLabel: {
        fontSize: 10,
        color: '#707070'
    },
    viewLabelStyle: {
        justifyContent: 'center', alignItems: 'center'
    }
})




export default RootStackNavigator