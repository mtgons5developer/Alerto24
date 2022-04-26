import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import colors from '../config/colors'


const ProviderItem = ({ item, onSelectProvider }) => {


    function handleNav() {
        onSelectProvider(item);
    }


    return (
        <TouchableOpacity onPress={() => handleNav()} style={{
            marginTop: 20,
            borderColor: 'white', alignItems: 'center', width: '95%',
            marginStart: '2.5%', marginEnd: '2.5%', backgroundColor: 'white',
            elevation: 3, borderWidth: 1, flexDirection: 'row', marginBottom: 5,
        }}>

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
                    {item.name}
                </Text>

                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: colors.grey }}>
                    {item.street_address}
                </Text>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{ width: 10, height: 12 }} source={require('../assets/location.png')} />
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, marginStart: 10 }}>
                        0.5km
                    </Text>
                </View>

            </View>

            {
                item.is_active == 1 ?
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
}

export default ProviderItem