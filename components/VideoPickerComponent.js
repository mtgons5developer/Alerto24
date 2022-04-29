import React, { useState, useEffect } from 'react';

import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { PermissionsAndroid, Alert, View, TouchableOpacity, Text, ActivityIndicator, ToastAndroid } from 'react-native';
import { RNS3 } from 'react-native-aws3';
import colors from '../config/colors';
// import Video from 'react-native-video-controls';
const VideoPickerComponent = () => {



    const [indicator, setIndicator] = useState(false)

    const [selectedVideo, setSelectedVideo] = useState([])

    const openPicker = async () => {

        launchImageLibrary({ mediaType: 'video', includeBase64: false }, (response) => {
            console.log("REsponse", response);
            if (response.assets != null) {

                const file = {
                    uri: response.assets[0].uri,
                    name: response.assets[0].fileName,
                    type: response.assets[0].type,
                };

                setSelectedVideo(response.assets[0])

                uploadVideo(file)
                // setVideoPlayer(response.assets[0])
                // getVideoUrl(response.assets[0], file)


            } else {

            }
        })
    }



    function uploadVideo(file) {

        console.log(file)
        setIndicator(true)

        const options = {
            keyPrefix: "/",
            bucket: "schoolappbackend",
            region: "ap-southeast-1",
            accessKey: "AKIASZD57COTS42PJF7K",
            secretKey: "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",
            successActionStatus: 201
        }

        RNS3.put(file, options).then(response => {
            if (response.status !== 201) {
                console.log("response")
                setIndicator(false)
                throw new Error("Failed to upload image to S3");
            } else {
                ToastAndroid.show("Video Uploaded Successfully", ToastAndroid.SHORT, ToastAndroid.BOTTOM)
                console.log(response.body)
                setIndicator(false)
            }

        });

    }




    useEffect(() => {

    }, [])

    return (
        <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>

            <TouchableOpacity onPress={() => openPicker()} style={{ backgroundColor: colors.yellow, paddingStart: 10, paddingEnd: 10, borderRadius: 10 }}>
                <Text status={{ colors: colors.white }}>
                    Upload Video
                </Text>
            </TouchableOpacity>


            {

                indicator ?
                    <View style={{ position: 'absolute', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator size={"large"} color={colors.yellow} />
                    </View> : null

            }

        </View>
    )

}

export default VideoPickerComponent