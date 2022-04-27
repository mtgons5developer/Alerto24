import React, { useEffect, useState } from 'react'

import { View, Text, AsyncStorage, StyleSheet, TouchableOpacity, ActivityIndicator, Image } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import ProviderItem from '../components/ProviderList'
import axios from 'axios'
import colors from '../config/colors'

const TaskQueued = ({ navigation }) => {

    const [indicator, setIndicator] = useState(false)

    const [taskList, setTaskList] = useState([])


    async function getTaskList(params) {

        let token = await AsyncStorage.getItem("token")

        var data = {}

        var config = {
            method: 'get',
            url: 'https://dataxphilippines.com/api/getNotificationList',
            headers: {
                'Authorization': 'Bearer ' + token,

            },
            data: data
        };

        setIndicator(true)

        axios(config)
            .then(function (response) {
                const json = response.data.data
                setTaskList(json)
                setIndicator(false)
            })
            .catch(function (error) {
                console.log(error);
                setIndicator(false)
            });

    }

    const onApiHit = () => {
        getTaskList()
    }




    const renderItem = (item) => {
        <ProviderItem
            navigation={navigation}
            onApiHit={onApiHit}
            item={item} />
    }



    useEffect(() => {
        getTaskList()
    }, [])

    return (
        <View style={{ flex: 1 }}>

            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ start: 20, position: 'absolute' }}>
                    <Image style={{ width: 24, height: 24 }} source={require('../assets/IconLeft.png')} />
                </TouchableOpacity>
                <Text style={{ fontSize: 16, color: 'black', textAlign: 'center' }}>
                    Tasks
                </Text>
            </View>

            {indicator ?

                <View style={{ position: 'absolute', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size={'large'} color={colors.yellow} />
                </View> : null

            }


            <FlatList
                data={taskList}
                renderItem={(item) => {
                    return (
                        <ProviderItem item={item} onApiHit={onApiHit} />
                    )
                }}
                keyExtractor={item => item.id}
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


export default TaskQueued