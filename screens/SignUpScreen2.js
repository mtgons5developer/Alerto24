import React, { useState, useEffect } from "react";
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity, StatusBar, ScrollView, Platform, ActivityIndicator, ToastAndroid } from "react-native";
import axios from 'axios'
import { Picker } from "@react-native-picker/picker";
import colors from "../config/colors";
import { api_token } from "../config/config";
const SignUpScreen2 = ({ navigation, route }) => {

    const [indicator, setIndicator] = useState(false)

    const [selectedValue, setSelectedValue] = useState("")
    const [selectedValueCity, setSelectedCityValue] = useState("")
    const [selectedValueBarangay, setSelectedBarangayValue] = useState("")

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
        region_id: "",
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

    function handleProvince() {

        setIndicator(true)

        var data = {
            "api_token": api_token
        }

        var config = {
            method: 'post',
            url: 'https://dataxphilippines.com/api/provinceListing',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                const json = response.data.data
                setProvince(json)

                handleAnotherApi()

            })
            .catch(function (error) {
                console.log(error.response.data);
            });
    }

    function handleCity() {
        var data = {
            "api_token": api_token
        }
        var config = {
            method: 'post',
            url: 'https://dataxphilippines.com/api/cityListing',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                const json = response.data.data
                setCity(json)


                callBarangayApi()

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function handleBarangay() {
        var data = {
            "api_token": api_token,
        }

        var config = {
            method: 'post',

            url: 'https://dataxphilippines.com/api/barangayListing',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                const json = response.data.data
                setBarangay(json)

                setIndicator(false)
            })
            .catch(function (error) {
                console.log(error);
                setIndicator(false)
            });
    }

    function handleAnotherApi() {
        handleCity()
    }


    function callBarangayApi() {
        handleBarangay()
    }



    function handleSelectedCity(val, index) {
        setSelectedCityValue(val)
        setSignUpData({
            ...signUpData,
            city: city[index].id
        })
    }

    function handleSelectedProvince(val, index) {
        setSelectedValue(val)
        setSignUpData({
            ...signUpData,
            province: province[index].id,
            region_id: province[index].region_code
        })
    }


    function handleSelectedBarangay(val, index) {
        setSelectedBarangayValue(val)
        setSignUpData({
            ...signUpData,
            barangay: barangay[index].id
        })
    }

    function handleNavigation() {

    }

    const handleSignup = () => {

        setIndicator(true)

        var data = {
            "name": signUpData.userName,
            "email": signUpData.email,
            "password": signUpData.password,
            "province_id": signUpData.province,
            "city_id": signUpData.city,
            "barangay_id": signUpData.barangay,
            "contact_number": signUpData.contactNumber,
            "user_type": route.params.user_type,
            "device_type": Platform.OS,
            "device_token": route.params.deviceToken,
            "api_token": api_token,
            "region_id": signUpData.region_id,
            "street_address": signUpData.streetAddress
        }





        var config = {
            method: 'post',
            url: 'https://dataxphilippines.com/api/register',
            headers: {

            },
            data: data
        };

        axios(config)
            .then(function (response) {

                setIndicator(false)

                if (response.data.success == true) {

                    navigation.navigate("Login")

                } else {
                    ToastAndroid.showWithGravity(response.data.message, ToastAndroid.CENTER, ToastAndroid.CENTER)
                }


            })
            .catch(function (error) {
                console.log(error);
            });
    }



    useEffect(() => {
        handleProvince()
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
                        style={styles.textInputStyle}
                        placeholderTextColor={colors.grey}
                        placeholder="Name"
                        onChangeText={(val) => onChangeUsername(val)}
                    />
                    <Image style={{ width: 16, height: 18, resizeMode: 'contain', end: 10 }} source={require('../assets/User2.png')} />
                </View>

                <View style={{
                    width: '90%', marginEnd: '5%',
                    marginStart: '5%', borderRadius: 5, elevation: 3,
                    marginTop: '10%', flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff',
                }}>
                    <TextInput
                        style={styles.textInputStyle}
                        placeholder="Email Address"
                        keyboardType="email-address"
                        placeholderTextColor={colors.grey}
                        onChangeText={(val) => onChangeEmail(val)}
                    />

                    <Image style={{ width: 16.25, height: 13, resizeMode: 'contain', end: 10 }} source={require('../assets/mail.png')} />
                </View>


                <View style={{
                    width: '90%', marginEnd: '5%',
                    marginStart: '5%', borderRadius: 5, elevation: 3,
                    marginTop: '10%', flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff',
                }}>
                    <TextInput
                        style={styles.textInputStyle}
                        placeholder="Password"
                        secureTextEntry={true}
                        placeholderTextColor={colors.grey}
                        onChangeText={(val) => onChangePassword(val)}
                    />

                    <Image style={{ width: 14.4, height: 16, resizeMode: 'contain', end: 10 }} source={require('../assets/lock.png')} />
                </View>


                <View style={{
                    width: '90%', marginEnd: '5%',
                    marginStart: '5%', borderRadius: 5, elevation: 3,
                    marginTop: '10%', flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff',
                }}>
                    <TextInput
                        style={styles.textInputStyle}
                        placeholder=" Retype Password"

                        secureTextEntry={true}
                        placeholderTextColor={colors.grey}
                        onChangeText={(val) => onChangeConfirmPassword(val)}

                    />

                    <Image style={{ width: 14.4, height: 16, resizeMode: 'contain', end: 10 }} source={require('../assets/lock.png')} />
                </View>

                <View style={{
                    width: '90%', marginEnd: '5%',
                    marginStart: '5%', borderRadius: 5, elevation: 3,
                    marginTop: '10%', flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff',
                }}>
                    <TextInput
                        style={{ paddingStart: 20, paddingEnd: 10, color: '#000', flex: 1, fontSize: 16 }}
                        placeholder="Street"
                        keyboardType="ascii-capable"
                        placeholderTextColor={colors.grey}
                        onChangeText={(val) => onChangeStreetAddress(val)}
                    />

                    <Image style={{ width: 16, height: 20, resizeMode: 'contain', end: 20 }} source={require('../assets/map-pin.png')} />
                </View>


                <View style={{
                    width: '90%', marginEnd: '5%',
                    marginStart: '5%', borderRadius: 5, elevation: 3,
                    marginTop: '10%', flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', zIndex: 1
                }}>



                    <Picker
                        placeholder="Select Province"
                        selectedValue={selectedValue}
                        style={{ width: '100%' }}
                        onValueChange={(itemValue, itemIndex) => handleSelectedProvince(itemValue, itemIndex)}
                    >


                        {province.map((item, index) =>
                            <Picker.Item label={item.name} value={item.name} key={index}

                            />
                        )}



                    </Picker>

                </View>

                <View style={{
                    width: '90%', marginEnd: '5%',
                    marginStart: '5%', borderRadius: 5, elevation: 3,
                    marginTop: '10%', flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff',
                }}>
                    <Picker
                        placeholder="Select City"
                        selectedValue={selectedValueCity}
                        style={{ width: '100%' }}
                        onValueChange={(itemValue, itemIndex) => handleSelectedCity(itemValue, itemIndex)}
                    >


                        {city.map((item, index) =>

                            <Picker.Item label={item.name} value={item.name} key={index} />


                        )}



                    </Picker>

                    {/* <Image style={{ width: 11, height: 11, resizeMode: 'contain', end: 20 }} source={require('../assets/Polygon.png')} /> */}
                </View>

                <View style={{
                    width: '90%', marginEnd: '5%',
                    marginStart: '5%', borderRadius: 5, elevation: 3,
                    marginTop: '10%', flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', zIndex: 1
                }}>
                    <Picker
                        placeholder="Select Barangay"
                        selectedValue={selectedValueBarangay}
                        style={{ width: '100%' }}
                        onValueChange={(itemValue, itemIndex) => handleSelectedBarangay(itemValue, itemIndex)}
                    >


                        {barangay.map((item, index) =>

                            <Picker.Item label={item.name} value={item.name} key={index} />
                        )}



                    </Picker>
                    {/* <Image style={{ width: 11, height: 11, resizeMode: 'contain', end: 20 }} source={require('../assets/Polygon.png')} /> */}
                </View>


                <View style={{
                    width: '90%', marginEnd: '5%',
                    marginStart: '5%', borderRadius: 5, elevation: 3,
                    marginTop: '10%', flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff',
                }}>
                    <TextInput
                        style={styles.textInputStyle}
                        placeholder="Contact Number"
                        keyboardType="number-pad"
                        maxLength={10}
                        placeholderTextColor={colors.grey}
                        onChangeText={(val) => onChangeContactNumber(val)}
                    />
                    <Image style={{ width: 17.96, height: 18, resizeMode: 'contain', end: 10 }} source={require('../assets/phone.png')} />
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

                {indicator
                    ? <View style={{ width: '100%', height: '100%', position: 'absolute', justifyContent: 'center', alignItems: 'center', zIndex: 1 }}>
                        <ActivityIndicator size={"large"} />
                    </View> : null
                }

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

    textInputStyle: {
        marginStart: 20,
        paddingEnd: 10,
        color: '#000',
        flex: 1,
        fontSize: 16,
        height: '100%'
    }
});

export default SignUpScreen2;