import React from 'react'

import { View, Text, StatusBar, StyleSheet, TextInput, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import colors from '../../config/colors'

const Services = ({ navigation }) => {

    const renderItem = ({ item }) => {
        return (
            <View style={{
                marginTop: 20,
                borderColor: 'white', alignItems: 'center', width: '95%',
                marginStart: '2.5%', marginEnd: '2.5%', backgroundColor: 'white',
                elevation: 3, borderWidth: 1, flexDirection: 'row', marginBottom: 5
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
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14 }}>
                        Providers's Name
                    </Text>

                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14 }}>
                        Cebu Tops Rd, Cebu City, Philippines
                    </Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={{ width: 10, height: 12 }} source={require('../../assets/location.png')} />
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, marginStart: 10 }}>
                            0.5km
                        </Text>
                    </View>
                </View>
            </View>

        )
    }

    const name = [
        {
            id: 1,
            title: 'B1'
        },
        {
            id: 2,
            title: 'B2'
        },
        {
            id: 3,
            title: 'B3'
        },
        {
            id: 4,
            title: 'B4'
        },

        {
            id: 5,
            title: 'B4'
        },
        {
            id: 6,
            title: 'B4'
        },




    ]



    function handleServiceByAdmin() {

    }


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



            <FlatList
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => item.id}
                data={name}
                renderItem={renderItem}
            />

            <TouchableOpacity style={{
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


