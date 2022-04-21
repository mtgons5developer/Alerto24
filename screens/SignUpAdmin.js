import React, { useState } from "react";
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity, StatusBar, ScrollView, Modal } from "react-native";

import colors from "../config/colors";
const SignUpAdmin = ({ navigation }) => {

    const [modalVisible, setModalVisible] = useState(false)

    return (

        <View>


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


                        />

                        <Image style={{ width: 17.96, height: 18, resizeMode: 'contain', end: 20.74 }} source={require('../assets/phone.png')} />
                    </View>

                    <View style={{
                        width: '90%', marginEnd: '5%',
                        marginStart: '5%', borderRadius: 5, elevation: 3,
                        marginTop: '10%', flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff',
                    }}>
                        <TextInput
                            style={{ paddingStart: 20, paddingEnd: 10, color: '#000', flex: 1, fontSize: 16 }}
                            placeholder="Tasks Queue"
                            placeholderTextColor={colors.grey}
                            editable={false}
                        />

                        <Image style={{ width: 15.2, height: 19, resizeMode: 'contain', end: 20.3 }} source={require('../assets/clipboard.png')} />
                    </View>




                    <View style={{ width: '90%', marginEnd: '5%', marginStart: '5%' }}>
                        <Text style={{ fontSize: 12, marginStart: 5, color: '#949494', marginTop: 17, justifyContent: 'center', alignSelf: 'center', marginBottom: 10, fontFamily: 'Poppins-Medium.ttf' }}>
                            I agree to the Terms of Services, Privacy Policy Default notification settings of the *Notification App.
                        </Text>

                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate("VerifyEmail")} style={{ width: '90%', marginEnd: '5%', marginStart: '5%', borderRadius: 5, backgroundColor: colors.yellow, marginTop: '5%', marginBottom: 78 }}>
                        <Text style={{ fontSize: 16, color: colors.black, textAlign: 'center', marginTop: 15, marginBottom: 15 }}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    // this.closeButtonFunction()
                }}>
                <View
                    style={{
                        height: '30%',
                        marginTop: 'auto',
                        backgroundColor: '#fff'
                    }}>
                    <View style={styles.footer}>
                        <Text style={styles.headerText}>This is Half Modal</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.addButton}
                        onPress={() => {
                            setModalVisible(!modalVisible)
                        }}>
                        <Text style={styles.addButtonText}>Close</Text>
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
});

export default SignUpAdmin;