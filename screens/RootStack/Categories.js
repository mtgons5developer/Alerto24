import React, { useState, useEffect } from 'react'

import { View, Text, StatusBar, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import colors from '../../config/colors';


const Categories = ({ navigation }) => {

    const [tasks, setTasks] = useState([

        {
            id: 1,
            tasksName: "Task A",
            status: "Completed"
        },

        {
            id: 2,
            tasksName: "Task A",
            status: "Completed"
        },


    ])


    const renderItem = () => {
        <View style={{ flexDirection: 'column', width: '100%' }}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={style.textStyleList}>
                    Task A
                </Text>
                <Text style={style.textStyleListStatus}>
                    Do this or do that.
                </Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
                <Text style={style.textStyleList}>
                    Status
                </Text>
                <Text style={style.textStyleListStatus}>
                    Completed
                </Text>
            </View>

            <View style={{ height: 1, backgroundColor: colors.grey }}>

            </View>

        </View>
    }




    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: 'white', flexDirection: 'column' }}>
            <StatusBar backgroundColor={'white'} />

            <View style={styles.header}>

                <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', start: 10 }}>
                    <Image style={{ width: 19, height: 16 }} source={require('../../assets/GroupP.png')} />
                </TouchableOpacity>

                <Text style={{ fontSize: 16, color: '#000', textAlign: 'center' }}>
                    Services
                </Text>
            </View>

            <View style={{ marginTop: 25, marginStart: 30, fontSize: 16, }}>
                <Text style={{ color: '#565656' }}>Select a service you need from below</Text>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 12, justifyContent: 'space-evenly' }}>

                <TouchableOpacity style={style.boxStyle} onPress={() => navigation.navigate("service", {
                    "service_id": 1
                })}>

                    <Image style={{ width: 24, height: 24, resizeMode: 'contain' }} source={require('../../assets/ambulance.png')} />

                    <Text style={style.textStyle}>
                        B1
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity style={style.boxStyle} onPress={() => navigation.navigate("service", {
                    "service_id": 2
                })}>

                    <Image style={{ width: 24, height: 24 }} source={require('../../assets/none.png')} />

                    <Text style={style.textStyle}>
                        B2
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity style={style.boxStyle} onPress={() => navigation.navigate("service", {
                    "service_id": 3
                })}>

                    <Image style={{ width: 24, height: 24 }} source={require('../../assets/police.png')} />

                    <Text style={style.textStyle}>
                        B3
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity style={style.boxStyle} onPress={() => navigation.navigate("service", {
                    "service_id": 4
                })}>

                    <Image style={{ width: 24, height: 24, resizeMode: 'contain' }} source={require('../../assets/firebrigade.png')} />

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
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />

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
        color: colors.yellow,
    },
    boxStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        borderRadius: 2.4,
        backgroundColor: '#fff',
        elevation: 4
    },
    textStyleList: {
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        colors: colors.grey
    },
    textStyleListStatus: {
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        color: colors.yellow
    }
})


export default Categories

