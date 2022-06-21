import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import NotificationProps from './NotificationProps';
import { Data } from './NotificationTestFakeData';

export default function NotificationItems() {
    return (
        <View style={styles.container}>
            <View style={styles.containerNofif}>
                <View style={styles.notificationHeaderTop}>
                    <Text style={styles.headerBigText}>Notifications</Text>
                    <Text style={styles.headerSmallDescText}>Balayez vers la gauche la notification pour la supprimer ou lue / non lue</Text>
                </View>
                {Data.map(notif => {
                    return (
                        <NotificationProps
                            key={notif.id}
                            title={notif.title}
                            time={notif.time}
                            date={notif.date}
                        />
                    )
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    containerNofif: {

    },
    notificationHeaderTop: {
        marginHorizontal: 20,
        marginBottom:20,
    },
    headerBigText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 25,

    },
    headerSmallDescText: {
        fontSize: 13,
        marginTop: 6,
        fontWeight: '100',
        color:'#A3A3A3'
    },
    notifiBoxCard: {},
})