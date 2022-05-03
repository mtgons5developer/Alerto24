import React, { useState, useEffect } from 'react'

import { View, Text, StatusBar, StyleSheet, TouchableOpacity, Image, Dimensions, ActivityIndicator } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import colors from '../../config/colors';
import Geolocation from '@react-native-community/geolocation'
const { width, height } = Dimensions.get('window')

const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO
const ServiceProvider = ({ navigation }) => {

    const [indicator, setIndicator] = useState(false)

    const [initialPosition, setInitialPosition] = useState({
        latitude: 10,
        longitude: 10,
        latitudeDelta: 0,
        longitudeDelta: 0,

    })


    useEffect(() => {
        setIndicator(true)
        Geolocation.getCurrentPosition((position) => {
            var lat = parseFloat(position.coords.latitude)
            var long = parseFloat(position.coords.longitude)

            console.log(lat, long)

            setInitialPosition({
                ...initialPosition,
                latitude: lat,
                longitude: long,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA
            })

            setIndicator(false)


        },
            (error) => alert(JSON.stringify(error)),
            { enableHighAccuracy: true, timeout: 20000, });

    }, [])


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

            {

                indicator ?

                    <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator size={'large'} color={colors.yellow} />

                    </View>

                    :

                    <MapView
                        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                        style={{ height: '100%', marginTop: 20 }}
                        initialRegion={initialPosition}
                        showsCompass={true}
                        showsUserLocation={true}
                        showsMyLocationButton={true}
                        followsUserLocation={true}
                        scrollEnabled={true}
                        zoomEnabled={true}
                        pitchEnabled={true}
                        rotateEnabled={true}
                    >
                        <Marker
                            title='Yor are here'
                            coordinate={initialPosition} />
                    </MapView>

            }



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