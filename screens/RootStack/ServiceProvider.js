import React from 'react'

import { View, Text, StatusBar, StyleSheet, TextInput, Image, ScrollView, FlatList } from 'react-native'

const ServiceProvider = () => {
    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
            <StatusBar backgroundColor={'white'} />

            <View style={styles.header}>
                <Image style={{ width: 19, height: 16, start: 20, position: 'absolute' }} source={require('../../assets/GroupP.png')} />

                <Text style={{ fontSize: 16, color: 'black', textAlign: 'center' }}>
                    Service Providers
                </Text>
            </View>
            <View style={{ justifyContent: 'space-evenly', flexDirection: 'row' }}>
                <View style={{ flexDirection: 'row', marginTop: 23 }}>
                    <Text style={{ color: 'black' }}>Sort BY</Text>
                    <Text style={{ color: '#F3CB3B' }}>    Distance</Text>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 23 }}>
                    <Text style={{ color: 'black' }}>Sort BY</Text>
                    <Text style={{ color: '#F3CB3B' }}>    Distance</Text>
                </View>

            </View>
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
export default ServiceProvider