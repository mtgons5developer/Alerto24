import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, AsyncStorage, ToastAndroid } from 'react-native'
import colors from '../config/colors'
import axios from 'axios'

const ProviderItem = ({ item, onApiHit }) => {


    const [providerItem, setProviderItem] = useState(item.item)



    function handleNav(params) {
        if (params == "1") {
            setProviderItem({
                ...providerItem,
                status: 1
            })
        } else {
            setProviderItem({
                ...providerItem,
                status: 2
            })
        }

        // onApiHit()
    }


    async function handleAcceptReject(params) {
        let token = await AsyncStorage.getItem("token")

        var data = {
            "status": params,
            "id": providerItem.id
        }
        var config = {
            method: 'post',
            url: 'https://dataxphilippines.com/api/acceptReject',
            headers: {
                'Authorization': 'Bearer ' + token,

            },
            data: data
        };

        axios(config)
            .then(function (response) {
                if (response.data.success == true) {

                    handleNav(params)





                } else {
                    ToastAndroid.showWithGravity(response.data.message, ToastAndroid.SHORT, ToastAndroid.CENTER)
                }
            })
            .catch(function (error) {
                console.log(error.response.data);
            });

    }



    return (
        <View onPress={() => handleNav()} style={{
            marginTop: 20,
            borderColor: 'white',
            alignItems: 'center',
            width: '95%',
            marginStart: '2.5%',
            marginEnd: '2.5%', backgroundColor: 'white',
            borderRadius: 12,
            elevation: 3, borderWidth: 1,
            flexDirection: 'column', marginBottom: 5,
        }}>


            <View style={{
                padding: 10, borderRadius: 10,
                alignItems: 'center',
                width: '95%',
                marginStart: '2.5%', marginEnd: '2.5%',
                flexDirection: 'row', elevation: 5, backgroundColor: 'white', marginTop: '5%'
            }}>
                <View style={{
                    width: 50, height: 50, borderRadius: 20,
                    alignItems: 'center', backgroundColor: colors.yellow,
                    alignItems: 'center', justifyContent: 'center',
                    marginStart: 10
                }}>
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: colors.white }}>
                        Logo
                    </Text>
                </View>
                <View style={{ flexDirection: 'column', marginStart: 10 }}>
                    <Text>
                        {providerItem.message}
                    </Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={{ width: 10, height: 12 }} source={require('../assets/location.png')} />
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, marginStart: 10 }}>
                            0.5km
                        </Text>
                    </View>

                </View>

            </View>



            {providerItem.status == 0 ?

                <View style={{
                    width: '100%',
                    marginTop: '5%', marginBottom: '5%',
                    flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
                }}>
                    <TouchableOpacity onPress={() => handleAcceptReject("2")} style={{
                        borderRadius: 10, backgroundColor: colors.brown,
                        paddingBottom: 10, paddingTop: 10,
                        justifyContent: 'center', alignItems: 'center', width: '45%',
                        marginStart: '2.5%', marginEnd: '2.5%'
                    }}>
                        <Text style={{ color: colors.white }}>
                            Reject
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleAcceptReject("1")} style={{
                        borderRadius: 10, backgroundColor: colors.yellow, paddingBottom: 10, paddingTop: 10,
                        justifyContent: 'center', alignItems: 'center', width: '45%',
                        marginStart: '2.5%', marginEnd: '2.5%'
                    }}>

                        <Text style={{ color: colors.white }}>
                            Accept
                        </Text>

                    </TouchableOpacity>
                </View> : null
            }

            {providerItem.status == 1 ?

                <TouchableOpacity style={{
                    borderRadius: 10, backgroundColor: colors.yellow,
                    paddingBottom: 10, paddingTop: 10,
                    justifyContent: 'center', alignItems: 'center', width: '95%',
                    marginStart: '2.5%', marginEnd: '2.5%', marginTop: '5%'
                }}>
                    <Text style={{ color: colors.white }}>
                        Accepted
                    </Text>
                </TouchableOpacity> : null

            }


            {providerItem.status == 2 ?

                <TouchableOpacity style={{
                    borderRadius: 10, backgroundColor: colors.brown,
                    paddingBottom: 10, paddingTop: 10,
                    justifyContent: 'center', alignItems: 'center', width: '95%',
                    marginStart: '2.5%', marginEnd: '2.5%',
                    marginTop: '5%'
                }}>
                    <Text style={{ color: colors.white }}>
                        Rejected
                    </Text>
                </TouchableOpacity> : null

            }









        </View>

    )
}



export default ProviderItem