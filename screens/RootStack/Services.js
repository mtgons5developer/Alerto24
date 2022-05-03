import React, { useEffect, useState } from 'react'

import { View, Text, StatusBar, StyleSheet, TextInput, Image, ScrollView, FlatList, TouchableOpacity, AsyncStorage } from 'react-native'
import colors from '../../config/colors'
import axios from 'axios'


const Services = ({ navigation, route }) => {

    const [provider, setProvider] = useState([])

    let token = ""

    const [selectedProviders, setSelectedProviders] = useState([])


    function handleServiceByAdmin(tokenParam) {

        var data = {
            "categoryID": route.params.service_id
        }

        var config = {
            method: 'post',
            url: 'https://dataxphilippines.com/api/adminByCat',
            headers: {
                'Authorization': 'Bearer ' + tokenParam,
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                const json = response.data.data

                console.log(response)

                setProvider(json)

            })
            .catch(function (error) {
                console.log(error);
            });
    }




    async function getToken() {

        token = await AsyncStorage.getItem("token")

        console.log(token)

        handleServiceByAdmin(token)

    }



    function handleOnSelectProviders(dataObj) {


        let dataObj2 = dataObj

        let providerItems = [...selectedProviders];

        if (providerItems.includes(dataObj2)) {
            let index = providerItems.indexOf(dataObj2)
            if (index > -1) {
                providerItems.splice(index, 1);
            }

        }
        else {
            providerItems.push(dataObj2)
        }

        setSelectedProviders(providerItems)

    }


    async function sendAdminNotification() {
        token = await AsyncStorage.getItem("token")
        let ids = []

        console.log(selectedProviders.length)

        selectedProviders.forEach((item, index) => {
            ids[index] = item.id
        })

        let adminIDS = ids.join(",")

        console.log(token)


        var data = {
            "categoryID": route.params.service_id,
            "adminIDS": adminIDS,
            "message": "Testing Issue Message"
        }


        var config = {
            method: 'post',
            url: 'https://dataxphilippines.com/api/addAdminNotification',
            headers: {
                'Authorization': 'Bearer ' + token,
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }






    useEffect(() => {
        getToken()
    }, [])


    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
            <StatusBar backgroundColor={'white'} />

            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ start: 20, position: 'absolute' }}>

                    <Image style={{ width: 19, height: 16, }} source={require('../../assets/GroupP.png')} />
                </TouchableOpacity>
                <Text style={{ fontSize: 16, color: 'black', textAlign: 'center' }}>
                    Services
                </Text>
            </View>

            <View style={{ marginTop: 25, marginStart: 30, fontSize: 16, color: '#565656' }}>
                <Text style={{ color: '#565656', fontWeight: '500' }}>Select a service you need from below</Text>
            </View>


            <TouchableOpacity onPress={() => sendAdminNotification()} style={{
                width: '90%', marginEnd: '5%', marginStart: '5%', borderRadius: 5,
                backgroundColor: colors.yellow, marginTop: '5%', marginBottom: 20
            }}>
                <Text style={{ fontSize: 16, color: colors.black, textAlign: 'center', marginTop: 15, marginBottom: 15 }}>
                    Proceed
                </Text>
            </TouchableOpacity>


        </View >
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
export default Services


