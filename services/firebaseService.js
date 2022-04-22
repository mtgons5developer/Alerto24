import React, { Component } from "react";

import PushNotificationIOS from "@react-native-community/push-notification-ios";

import PushNotification from "react-native-push-notification";

export default class PushController extends Component {

    componentDidMount() {
        this.configure()
    }


    configure() {
        const that = this
        PushNotification.configure({
            // (optional) Called when Token is generated (iOS and Android)
            onRegister: function (token) {

                console.log("Token and Notification", token)

                that.props.func(token)


            },
            // (required) Called when a remote or local notification is opened or received
            onNotification: function (notification) {



                const {
                    foreground,
                    userInteraction,
                    message,
                    id,
                    data,
                    ...rest
                } = notification;
                //code for android
                if (foreground && !userInteraction) {
                    PushNotification.localNotification({
                        ...rest,
                        data,
                        message,
                        autoCancel: true,
                    });

                }
                notification.finish(PushNotificationIOS.FetchResult.NoData);


            },
            // Android only
            senderID: "26197024544",
            // iOS only
            permissions: {
                alert: true,
                badge: true,
                sound: true
            },
            popInitialNotification: true,
            requestPermissions: true
        });
    }


    render() {
        return null;
    }
}