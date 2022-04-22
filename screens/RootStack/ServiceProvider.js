import React from 'react'

import { View, Text, StatusBar, StyleSheet, TextInput, Image, ScrollView, FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Touchable } from 'react-native-web';

const ServiceProvider = ({ navigation }) => {
    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
            <StatusBar backgroundColor={'white'} />

            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={{ width: 19, height: 16, start: 20, position: 'absolute' }} source={require('../../assets/GroupP.png')} />
                </TouchableOpacity>

                <Text style={{ fontSize: 16, color: 'black', textAlign: 'center' }}>
                    Service Providers
                </Text>
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