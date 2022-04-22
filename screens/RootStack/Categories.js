import React, { useState, useEffect } from 'react'

import { View, Text, StatusBar, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import colors from '../../config/colors';


const Categories = ({ navigation }) => {

    const [tasks, setTasks] = useState([])


    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
            <StatusBar backgroundColor={'white'} />

            <View style={styles.header}>
                <Text style={{ fontSize: 16, color: 'black', textAlign: 'center' }}>
                    Services
                </Text>
            </View>

            <View style={{ marginTop: 25, marginStart: 30, fontSize: 16, color: '#565656' }}>
                <Text style={{ color: '#565656' }}>Select a service you need from below</Text>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 12, justifyContent: 'space-evenly' }}>

                <TouchableOpacity style={style.boxStyle}>

                    <Image style={{ width: 24, height: 24 }} source={require('../../assets/GroupH.png')} />

                    <Text style={style.textStyle}>
                        B1
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity style={style.boxStyle}>

                    <Image style={{ width: 24, height: 24 }} source={require('../../assets/GroupH.png')} />

                    <Text style={style.textStyle}>
                        B2
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity style={style.boxStyle}>

                    <Image style={{ width: 24, height: 24 }} source={require('../../assets/GroupH.png')} />

                    <Text style={style.textStyle}>
                        B3
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity style={style.boxStyle}>

                    <Image style={{ width: 24, height: 24 }} source={require('../../assets/GroupH.png')} />

                    <Text style={style.textStyle}>
                        B4
                    </Text>

                </TouchableOpacity>

            </View>


            <Text style={{ fontSize: 16, fontFamily: 'Poppins-Medium', marginStart: 10, marginTop: 12 }}>
                Tasks
            </Text>

            <FlatList
                style={{ marginTop: 12 }}
                data={tasks}
                nestedScrollEnabled
                renderItem={renderItemSecond}

                keyExtractor={(item, index) => item.id}
            />


            {/* <View style={{
                marginTop: 21, borderWidth: 1, marginEnd: 30, marginStart: 30,
                flex: 1, borderRadius: 5, justifyContent: 'center', alignItems: 'center',
                backgroundColor: 'white', elevation: 4, borderColor: 'white'
            }}>
                <TouchableOpacity onPress={() => navigation.navigate("service")}>
                    <Image style={{ height: 49, width: 49 }} source={require('../../assets/GroupH.png')} />
                </TouchableOpacity>
                <Text style={{ color: '#F3CB3B', fontSize: 16, marginTop: 15 }}>category 1</Text>
            </View>

            <View style={{
                marginTop: 21, borderWidth: 1, marginEnd: 30, marginStart: 30, flex: 1,
                borderRadius: 5, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white',
                elevation: 4, borderColor: 'white'
            }}>

                <TouchableOpacity onPress={() => navigation.navigate("service")}>
                    <Image style={{ height: 49, width: 49 }} source={require('../../assets/GroupH.png')} />
                </TouchableOpacity>
                <Text style={{ color: '#F3CB3B', fontSize: 16, marginTop: 15 }}>category 2</Text>
            </View>

            <View style={{
                marginTop: 21, borderWidth: 1, marginEnd: 30, marginStart: 30,
                flex: 1, borderRadius: 5, justifyContent: 'center', alignItems: 'center',
                backgroundColor: 'white', elevation: 4, borderColor: 'white', marginBottom: 20
            }}>

                <TouchableOpacity onPress={() => navigation.navigate("service")}>
                    <Image style={{ height: 49, width: 49 }} source={require('../../assets/GroupH.png')} />
                </TouchableOpacity>
                <Text style={{ color: '#F3CB3B', fontSize: 16, marginTop: 15 }}>category 3</Text>
            </View> */}

        </View>
    )
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


const style = StyleSheet.create({
    textStyle: {
        fontFamily: 'Poppins-Medium',
        fontSize: 7.68,
        marginTop: 8,
        colors: colors.yellow,
    },
    boxStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 35,
        borderRadius: 2.4,
        backgroundColor: '#fff', elevation: 4
    }
})


export default Categories

