import React, { useState, useEffect } from "react";
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity, StatusBar, ScrollView } from "react-native";
import axios from 'axios'
import colors from "../config/colors";
const SignUpScreen2 = ({ navigation }) => {

    const [province, setProvince] = useState([])
    const [city, setCity] = useState([])
    const [barangay, setBarangay] = useState([])

    const [signUpData, setSignUpData] = useState({
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
        streetAddress: "",
        province: "",
        city: "",
        barangay: "",
        contactNumber: ""
    })


    const onChangeUsername = (val) => {
        setSignUpData({
            ...signUpData,
            userName: val,

        })
    }


    const onChangeEmail = (val) => {
        setSignUpData({
            ...signUpData,
            email: val,

        })
    }


    const onChangePassword = (val) => {
        setSignUpData({
            ...signUpData,
            password: val,

        })
    }


    const onChangeConfirmPassword = (val) => {
        setSignUpData({
            ...signUpData,
            confirmPassword: val,

        })
    }


    const onChangeContactNumber = (val) => {
        setSignUpData({
            ...signUpData,
            contactNumber: val,

        })
    }


    const onChangeStreetAddress = (val) => {
        setSignUpData({
            ...signUpData,
            streetAddress: val,

        })
    }


    function handleSignup() {
        var axios = require('axios');
        var data = {
            "name": signUpData.name,
            "email": signUpData.email,
            "password": signUpData.password,
            "street_address": signUpData.streetAddress,
            "province_id": signUpData.province,
            "city_id": signUpData.city,
            "barangay_id": signUpData.barangay,
            "region": "1",
            "contact_number": signUpData.contactNumber
        }

        var config = {
            method: 'post',
            url: 'https://dataxphilippines.com/api/register',
            headers: {
                'Content-Type': 'application/json'
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


    function handleProvince() {
        var config = {
            method: 'get',
            url: 'https://dataxphilippines.com/api/provinceListing',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        axios(config)
            .then(function (response) {
                const json = response.data.data
                setProvince(json)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function handleCity() {
        var config = {
            method: 'get',
            url: 'https://dataxphilippines.com/api/cityListing',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        axios(config)
            .then(function (response) {
                const json = response.data.data
                setCity(json)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function handleBarangay() {
        var config = {
            method: 'get',
            url: 'https://dataxphilippines.com/api/barangayListing',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        axios(config)
            .then(function (response) {
                const json = response.data.data
                setBarangay(json)
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    useEffect(() => {
        handleProvince()
        handleCity()
        handleBarangay()
    }, [])



    return (
        <ScrollView showsVerticalScrollIndicator={false}>

            <View style={{ width: '100%', height: '100%', backgroundColor: colors.white }}>
                <StatusBar backgroundColor={colors.white} />

                <View style={styles.header}>
                    <TouchableOpacity style={{ position: 'absolute', start: 20 }} onPress={() => navigation.goBack()}>
                        <Image style={{ width: 30, height: 30, }} source={require('../assets/IconLeft.png')} />
                    </TouchableOpacity>


                    <Text style={{ fontSize: 20, color: colors.black, textAlign: 'center' }}>
                        SignUp
                    </Text>
                </View>

                <View style={{
                    width: '90%', marginEnd: '5%', marginStart: '5%',
                    borderRadius: 5, backgroundColor: '#fff',
                    elevation: 3, marginTop: 35, flexDirection: 'row', alignItems: 'center',
                }}>

                    <TextInput
                        style={{ paddingStart: 20, paddingEnd: 10, color: '#000', flex: 1, fontSize: 16 }}
                        placeholderTextColor={colors.grey}
                        placeholder="Name"
                        onChangeText={(val) => onChangeUsername(val)}
                    />
                    <Image style={{ width: 16, height: 18, resizeMode: 'contain', end: 20 }} source={require('../assets/User2.png')} />
                </View>

                <View style={{
                    width: '90%', marginEnd: '5%',
                    marginStart: '5%', borderRadius: 5, elevation: 3,
                    marginTop: '10%', flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff',
                }}>
                    <TextInput
                        style={{ paddingStart: 20, paddingEnd: 10, color: '#000', flex: 1, fontSize: 16 }}
                        placeholder="Email Address"
                        placeholderTextColor={colors.grey}
                        onChangeText={(val) => onChangeEmail(val)}
                    />

                    <Image style={{ width: 16.25, height: 13, resizeMode: 'contain', end: 19.75 }} source={require('../assets/mail.png')} />
                </View>


                <View style={{
                    width: '90%', marginEnd: '5%',
                    marginStart: '5%', borderRadius: 5, elevation: 3,
                    marginTop: '10%', flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff',
                }}>
                    <TextInput
                        style={{ paddingStart: 20, paddingEnd: 10, color: '#000', flex: 1, fontSize: 16 }}
                        placeholder="Password"
                        secureTextEntry={true}
                        placeholderTextColor={colors.grey}
                        onChangeText={(val) => onChangePassword(val)}
                    />

                    <Image style={{ width: 14.4, height: 16, resizeMode: 'contain', end: 20.6 }} source={require('../assets/lock.png')} />
                </View>


                <View style={{
                    width: '90%', marginEnd: '5%',
                    marginStart: '5%', borderRadius: 5, elevation: 3,
                    marginTop: '10%', flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff',
                }}>
                    <TextInput
                        style={{ paddingStart: 20, paddingEnd: 10, color: '#000', flex: 1, fontSize: 16 }}
                        placeholder=" Retype Password"
                        secureTextEntry={true}
                        placeholderTextColor={colors.grey}
                        onChangeText={(val) => onChangeConfirmPassword(val)}

                    />

                    <Image style={{ width: 14.4, height: 16, resizeMode: 'contain', end: 20.6 }} source={require('../assets/lock.png')} />
                </View>

                <View style={{
                    width: '90%', marginEnd: '5%',
                    marginStart: '5%', borderRadius: 5, elevation: 3,
                    marginTop: '10%', flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff',
                }}>
                    <TextInput
                        style={{ paddingStart: 20, paddingEnd: 10, color: '#000', flex: 1, fontSize: 16 }}
                        placeholder="Street"
                        placeholderTextColor={colors.grey}
                        onChangeText={(val) => onChangeStreetAddress(val)}
                    />

                    <Image style={{ width: 16, height: 20, resizeMode: 'contain', end: 20 }} source={require('../assets/map-pin.png')} />
                </View>


                <View style={{
                    width: '90%', marginEnd: '5%',
                    marginStart: '5%', borderRadius: 5, elevation: 3,
                    marginTop: '10%', flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff',
                }}>
                    <TextInput
                        style={{ paddingStart: 20, paddingEnd: 10, color: '#000', flex: 1, fontSize: 16 }}
                        placeholder="Province"
                        placeholderTextColor={colors.grey}

                    />

                    <Image style={{ width: 11, height: 11, resizeMode: 'contain', end: 20 }} source={require('../assets/Polygon.png')} />
                </View>

                <View style={{
                    width: '90%', marginEnd: '5%',
                    marginStart: '5%', borderRadius: 5, elevation: 3,
                    marginTop: '10%', flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff',
                }}>
                    <TextInput
                        style={{ paddingStart: 20, paddingEnd: 10, color: '#000', flex: 1, fontSize: 16 }}
                        placeholder="City"
                        placeholderTextColor={colors.grey}


                    />

                    <Image style={{ width: 11, height: 11, resizeMode: 'contain', end: 20 }} source={require('../assets/Polygon.png')} />
                </View>

                <View style={{
                    width: '90%', marginEnd: '5%',
                    marginStart: '5%', borderRadius: 5, elevation: 3,
                    marginTop: '10%', flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff',
                }}>
                    <TextInput
                        style={{ paddingStart: 20, paddingEnd: 20, color: '#000', flex: 1, fontSize: 16 }}
                        placeholder="Barangay"
                        placeholderTextColor={colors.grey}
                    />

                    <Image style={{ width: 11, height: 11, resizeMode: 'contain', end: 20 }} source={require('../assets/Polygon.png')} />
                </View>


                <View style={{
                    width: '90%', marginEnd: '5%',
                    marginStart: '5%', borderRadius: 5, elevation: 3,
                    marginTop: '10%', flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff',
                }}>
                    <TextInput
                        style={{ paddingStart: 20, paddingEnd: 10, color: '#000', flex: 1, fontSize: 16 }}
                        placeholder="Contact Number"
                        placeholderTextColor={colors.grey}
                        onChangeText={(val) => onChangeContactNumber(val)}
                    />
                    <Image style={{ width: 17.96, height: 18, resizeMode: 'contain', end: 20.74 }} source={require('../assets/phone.png')} />
                </View>


                <View style={{ width: '90%', marginEnd: '5%', marginStart: '5%' }}>
                    <Text style={{ fontSize: 12, marginStart: 5, color: '#949494', marginTop: 17, justifyContent: 'center', alignSelf: 'center', marginBottom: 10, fontFamily: 'Poppins-Medium.ttf' }}>
                        I agree to the Terms of Services, Privacy Policy Default notification settings of the *Notification App.
                    </Text>

                </View>

                <TouchableOpacity onPress={() => handleSignup()} style={{ width: '90%', marginEnd: '5%', marginStart: '5%', borderRadius: 5, backgroundColor: colors.yellow, marginTop: '5%', marginBottom: 78 }}>
                    <Text style={{ fontSize: 16, color: colors.black, textAlign: 'center', marginTop: 15, marginBottom: 15 }}>
                        Sign Up
                    </Text>
                </TouchableOpacity>



            </View>
        </ScrollView>

    );


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

export default SignUpScreen2;