import React, { useEffect, useState } from 'react'

import { View, Text, StatusBar, StyleSheet, TextInput, Image, ScrollView, FlatList, TouchableOpacity, AsyncStorage } from 'react-native'
import colors from '../../config/colors'
import axios from 'axios'
import ProviderItem from '../../components/ProviderList'


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
                setProvider(json)

            })
            .catch(function (error) {
                console.log(error);
            });
    }




    async function getToken() {

        token = await AsyncStorage.getItem("token")


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

            <ScrollView>

                {

                    provider.length != 0 && provider.map((dataObj) => {
                        return (
                            <TouchableOpacity key={dataObj.id} onPress={() => handleOnSelectProviders(dataObj)} style={{
                                marginTop: 20,
                                borderColor: 'white', alignItems: 'center', width: '95%',
                                marginStart: '2.5%', marginEnd: '2.5%', backgroundColor: 'white',
                                elevation: 3, borderWidth: 1, flexDirection: 'row', marginBottom: 5,
                            }}>

                                {

                                    selectedProviders.includes(dataObj) ?
                                        <Image style={{ width: 16, height: 16, position: 'absolute', end: 10, top: 10 }} source={require('../../assets/checked.png')} /> :
                                        <Image style={{ width: 16, height: 16, position: 'absolute', end: 10, top: 10 }} source={require('../../assets/unchecked.png')} />


                                }



                                <View style={{
                                    width: 40, height: 40, borderRadius: 20,
                                    alignItems: 'center', backgroundColor: colors.yellow,
                                    justifyContent: 'center', alignItems: 'center',
                                    marginStart: 23
                                }}>
                                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: colors.white }}>
                                        Logo
                                    </Text>
                                </View>


                                <View style={{ flexDirection: 'column', marginStart: 19, marginTop: 14, marginBottom: 14 }}>
                                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: colors.grey }}>
                                        {dataObj.name}
                                    </Text>

                                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: colors.grey }}>
                                        {dataObj.street_address}
                                    </Text>

                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image style={{ width: 10, height: 12 }} source={require('../../assets/location.png')} />
                                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, marginStart: 10 }}>
                                            0.5km
                                        </Text>
                                    </View>

                                </View>

                                {
                                    dataObj.is_active == 1 ?
                                        <View style={{ position: 'absolute', end: 10, bottom: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                                            <View style={{ height: 5, width: 5, borderRadius: 2.5, backgroundColor: colors.green, marginEnd: 5, }}>

                                            </View>

                                            <Text >
                                                Available
                                            </Text>

                                        </View> :
                                        <View style={{
                                            position: 'absolute', end: 10,
                                            bottom: 10, flexDirection: 'row',
                                            justifyContent: 'center', alignItems: 'center'
                                        }}>

                                            <View style={{
                                                height: 5, width: 5, borderRadius: 2.5,
                                                backgroundColor: colors.yellow,
                                                marginEnd: 5
                                            }}>

                                            </View>
                                            <Text>
                                                Not Available
                                            </Text>

                                        </View>

                                }

                            </TouchableOpacity>

                        )
                    })

                }
            </ScrollView>


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


