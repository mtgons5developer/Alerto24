import React, { useState, useEffect } from "react";
import {
    StyleSheet, Image, View, Text, TextInput,
    TouchableOpacity, StatusBar, ScrollView, Platform, Modal,
    ActivityIndicator, ToastAndroid
} from "react-native";
import axios from 'axios'
import { Picker } from "@react-native-picker/picker";
import colors from "../config/colors";
import DropDownPicker from "react-native-dropdown-picker";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import RBSheet from "react-native-raw-bottom-sheet";
import { api_token } from "../config/config";
import { panGestureHandlerCustomNativeProps } from "react-native-gesture-handler/lib/typescript/handlers/PanGestureHandler";
const SignUpScreen2 = ({ navigation, route }) => {

    const [indicator, setIndicator] = useState(false)

    const [selectedValue, setSelectedValue] = useState("")
    const [selectedValueCity, setSelectedCityValue] = useState("")
    const [selectedValueBarangay, setSelectedBarangayValue] = useState("")

    const [province, setProvince] = useState([])
    const [city, setCity] = useState([])
    const [barangay, setBarangay] = useState([])

    const [isVisible, modalVisible] = useState(false)

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
        contactNumber: "",
        service_category_id: "",
        service_category_name: ""


    })


    const [categories, setCategories] = useState([
        {
            id: 1,
            title: "B1"
        },
        {
            id: 2,
            title: "B2"
        },
        {
            id: 3,
            title: "B3"
        },
        {
            id: 4,
            title: "B4"
        }
    ])


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
            "street_address": signUpData.streetAddress,
            "service_category_id": signUpData.service_category_id,
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
                setIndicator(false)
                console.log(error);
            });
    }


    function handleAdminSelection(id) {
        modalVisible(false)
        setSignUpData({
            ...signUpData,
            service_category_id: id
        })

    }


    useEffect(() => {
        handleProvince()
    }, [])

    return (

        <View>

            <View style={styles.header}>
                <TouchableOpacity style={{ position: 'absolute', start: 20 }} onPress={() => navigation.goBack()}>
                    <Image style={{ width: 30, height: 30, }} source={require('../assets/IconLeft.png')} />
                </TouchableOpacity>


                <Text style={{ fontSize: 20, color: colors.black, textAlign: 'center' }}>
                    SignUp
                </Text>
            </View>


            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{ width: '100%', height: '100%', backgroundColor: colors.white }}>
                    <StatusBar backgroundColor={colors.white} />


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
                            placeholderTextColor={colors.grey}
                            onChangeText={(val) => onChangeStreetAddress(val)}
                        />

                        <Image style={{ width: 16, height: 20, resizeMode: 'contain', end: 10 }} source={require('../assets/map-pin.png')} />
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


                    <TouchableOpacity onPress={() => modalVisible(true)} style={{
                        width: '90%', marginEnd: '5%',
                        marginStart: '5%', borderRadius: 5, elevation: 3,
                        marginTop: '10%', flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff',
                    }}>
                        <TextInput
                            style={styles.textInputStyle}
                            placeholder="Task Queue"
                            editable={false}
                            placeholderTextColor={colors.grey}

                        />
                        <Image style={{ width: 17.96, height: 18, resizeMode: 'contain', end: 10 }} source={require('../assets/clipboard.png')} />
                    </TouchableOpacity>


                    <View style={{ width: '90%', marginEnd: '5%', marginStart: '5%',flexDirection:'row'}}>
                <BouncyCheckbox
                size={15}
                fillColor="#F3CB3B"
                unfillColor="#FFFFFF"
                // text="Custom Checkbox"
                iconStyle={{ borderColor: "#F3CB3B",borderRadius:2 }}
                // textStyle={{ fontFamily: "JosefinSans-Regular" }}
                //   onPress={(isChecked: boolean) => {}}
                />
                    <Text style={{ fontSize: 12, marginStart: 0, color: '#949494', marginTop: 17, justifyContent: 'center', alignSelf: 'center', marginBottom: 10, fontFamily: 'Poppins-Medium.ttf' }}>
                        I agree to the <Text style={{fontSize: 12, color: '#922424', fontWeight:'700'}}>
                        Terms of Services, Privacy Policy</Text> Default notification settings of the *Notification App.
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

            <Modal
                animationType="slide"
                transparent={true}
                visible={isVisible}
                onRequestClose={() => {
                    // this.closeButtonFunction()
                }}>
                <View
                    style={{
                        height: '30%',
                        marginTop: 'auto',
                        backgroundColor: '#fff',
                        alignItems: 'center'
                    }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 16 }}>Choose which category</Text>
                        <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 16, color: colors.brown, marginStart: 2 }}>Admin</Text>
                        <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 16, marginStart: 2 }}>Are you?</Text>
                    </View>



                    {
                        categories.map((item, index) =>
                            <TouchableOpacity onPress={() => handleAdminSelection(item.id)} key={item.id}
                                style={{
                                    flexDirection: 'column', width: '95%', marginTop: 20,
                                    justifyContent: 'center',
                                    marginStart: '2.5%', marginEnd: '2.5%'
                                }}>
                                <Text style={{ color: colors.yellow, textAlign: 'center' }}>{item.title}</Text>
                                <View style={{ height: 0.5, backgroundColor: colors.grey }}>
                                </View>
                            </TouchableOpacity>
                        )

                    }


                    <TouchableOpacity
                        style={{ marginTop: 10 }}
                        onPress={() => {
                            modalVisible(!isVisible)
                        }}>
                        <Text style={{ color: colors.brown }}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </Modal>


        </View>

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
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        position: 'relative'
        , bottom: 0,
        flexDirection: 'column'
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        marginTop: 10.6,
        width: '80%', marginStart: '10%', marginEnd: '10%',
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
});

export default SignUpScreen2;