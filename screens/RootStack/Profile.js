import React from 'react'

import { View, Text, StatusBar, StyleSheet, TextInput, Image, ScrollView } from 'react-native'


const Profile = () => {

    return (

        <ScrollView>
            <View style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
                <StatusBar backgroundColor={'white'} />

                <View style={styles.header}>
                    <Text style={{ fontSize: 20, color: 'black', textAlign: 'center' }}>
                        User Profile
                    </Text>
                </View>

                <View style={{
                    justifyContent: 'center', alignItems: 'center'
                }}>
                    <Text style={{ color: '#565656', marginTop: 26, fontSize: 16, fontFamily: 'Poppins-Medium', color: '#000' }}> Profile Information</Text>
                </View>

                <View style={{ marginStart: 30, marginEnd: 25, marginTop: 21, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#DADADA' }}>
                    <TextInput placeholder='Name' style={{ flex: 1 }} />

                    <Image style={{ width: 18, height: 19, marginRight: 30 }} source={require('../../assets/User2.png')} />

                </View>

                <View style={{ marginStart: 30, marginEnd: 25, marginTop: 21, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#DADADA' }}>
                    <TextInput placeholder='Username' style={{ flex: 1 }} />

                    <Image style={{ width: 18, height: 18, marginRight: 30 }} source={require('../../assets/GroupA.png')} />

                </View>

                <View style={{ marginStart: 30, marginEnd: 25, marginTop: 21, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#DADADA' }}>
                    <TextInput placeholder='profile.link.etc.com' style={{ flex: 1 }} />

                    <Image style={{ width: 18, height: 18, marginRight: 30 }} source={require('../../assets/GroupB.png')} />

                </View>

                <View style={{ marginStart: 30, marginEnd: 25, marginTop: 21, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#DADADA' }}>
                    <TextInput placeholder='Add a Bio to your profile' style={{ flex: 1 }} />

                    <Image style={{ width: 18, height: 18, marginRight: 30 }} source={require('../../assets/GroupC.png')} />

                </View>
                <View style={{
                    justifyContent: 'center', alignItems: 'center'
                }}>
                    <Text style={{ color: '#565656', marginTop: 26, fontSize: 16, fontWeight: '500' }}> Social Accounts</Text>
                </View>

                <View style={{ marginStart: 30, marginEnd: 25, marginTop: 21, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#DADADA' }}>
                    <TextInput placeholder='Instagram' style={{ flex: 1 }} />

                    <Image style={{ width: 18, height: 18, marginRight: 30 }} source={require('../../assets/GroupD.png')} />

                </View>

                <View style={{ marginStart: 30, marginEnd: 25, marginTop: 21, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#DADADA' }}>
                    <TextInput placeholder='Youtube' style={{ flex: 1 }} />

                    <Image style={{ width: 19, height: 15, marginRight: 30 }} source={require('../../assets/GroupE.png')} />

                </View>

                <View style={{ marginStart: 30, marginEnd: 25, marginTop: 21, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#DADADA' }}>
                    <TextInput placeholder='Twitter' style={{ flex: 1 }} />

                    <Image style={{ width: 19, height: 18, marginRight: 30 }} source={require('../../assets/GroupF.png')} />

                </View>

                <View style={{
                    justifyContent: 'center', alignItems: 'center'
                }}>
                    <Text style={{ color: '#565656', marginTop: 26, fontSize: 16, fontWeight: '500' }}> Account Verification</Text>
                </View>

                <View style={{ marginStart: 30, marginEnd: 25, marginTop: 21, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#DADADA' }}>
                    <TextInput placeholder='Upload your ID for Verification' style={{ flex: 1 }} />

                    <Image style={{ width: 18, height: 18, marginRight: 30 }} source={require('../../assets/GroupG.png')} />

                </View>



            </View>

        </ScrollView>
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

export default Profile