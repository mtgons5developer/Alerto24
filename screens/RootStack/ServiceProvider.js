import React from 'react'

import { View, Text, StatusBar, StyleSheet, TouchableOpacity, Image } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import colors from '../../config/colors';

const ServiceProvider = ({ navigation }) => {
    return (
        <View style={{
            flexDirection: 'column'
        }}>


            <StatusBar backgroundColor={'white'} />

            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ start: 20, position: 'absolute' }}>

                    <Image style={{ width: 19, height: 16, }} source={require('../../assets/GroupP.png')} />
                </TouchableOpacity>
                <Text style={{ fontSize: 16, color: 'black', textAlign: 'center' }}>
                    Task Details
                </Text>
            </View>


            <View style={{ flexDirection: 'row', marginStart: 30, marginTop: 20 }}>
                <Text style={styles.font}>Name : </Text>
                <Text style={[styles.font, { color: colors.grey }]}>Name </Text>
            </View>

            <View style={{ flexDirection: 'row', marginStart: 30, marginTop: 20 }}>
                <Text style={styles.font}>Address: </Text>
                <Text style={[styles.font, { color: colors.grey }]}>Name </Text>
            </View>

            <View style={{ flexDirection: 'row', marginStart: 30, marginTop: 20 }}>
                <Text style={styles.font}>Gps: </Text>
                <Text style={[styles.font, { color: colors.grey }]}>Name </Text>
            </View>

            <View style={{ flexDirection: 'row', marginStart: 30, marginTop: 20 }}>
                <Text style={styles.font}>Contact: </Text>
                <Text style={[styles.font, { color: colors.grey }]}>Name </Text>
            </View>


            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={{ height: '100%', marginTop: 20 }}
                region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
            </MapView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: '30%',
        ...StyleSheet.absoluteFillObject,
        height: '70%',
        flexDirection: 'column'
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },

    header: {
        flexDirection: 'row',
        height: 64,
        justifyContent: 'center',
        elevation: 3,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    font: {
        fontSize: 16,
        color: colors.black,
        fontFamily: 'Poppins-SemiBold'
    }
});
export default ServiceProvider