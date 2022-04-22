import React from 'react'

import { View, Text, StatusBar, StyleSheet, TextInput, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native'

const Services = ({ navigation }) => {

    const Design = ({ item }) => {
        return (
            <View style={{ justifyContent: 'space-evenly', marginTop: 20 }}>

                <View style={{
                    backgroundColor: 'white', elevation: 3, borderWidth: 1,
                    marginTop: 15, marginStart: 22, borderColor: 'white', marginBottom: 30,
                    justifyContent: 'center', alignItems: 'center', height: 175, width: 170,
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate("serviceprovider")}>
                        <Image style={{ height: 50, width: 49 }} source={require('../../assets/GroupH.png')} />
                    </TouchableOpacity>

                    <Text style={{ color: '#F3CB3B', fontSize: 16, marginTop: 15, }}>{item.title}</Text>

                </View>
            </View>


        )
    }

    const name = [
        {
            title: 'B1'
        },
        {
            title: 'B2'
        },
        {
            title: 'B3'
        },
        {
            title: 'B4'
        },
        {
            title: 'B5'
        },
        {
            title: 'B6'
        },




    ]
    const numcolumn = 2

    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
            <StatusBar backgroundColor={'white'} />

            <View style={styles.header}>
                <Image style={{ width: 19, height: 16, start: 20, position: 'absolute' }} source={require('../../assets/GroupP.png')} />

                <Text style={{ fontSize: 16, color: 'black', textAlign: 'center' }}>
                    Services
                </Text>
            </View>

            <View style={{ marginTop: 25, marginStart: 30, fontSize: 16, color: '#565656' }}>
                <Text style={{ color: '#565656', fontWeight: '500' }}>Select a service you need from below</Text>
            </View>

            <FlatList

                numColumns={numcolumn}
                data={name}
                renderItem={Design}

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
export default Services


