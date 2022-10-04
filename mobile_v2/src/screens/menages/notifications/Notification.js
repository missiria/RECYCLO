import { ScrollView, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react';
import NotificationItems from './NotificationItems';
import { Data } from './NotificationTestFakeData';
import EmptyNotifi from './NotificationEmpty';

export default function Notification({ navigation }) {
    const emptyData = () => {
        if (Data.length <= 0) {
            return (
                // if notification is empty 
                <EmptyNotifi />
            )
        } else {
            return (
                // if notifications is not empty
                <NotificationItems />
            )
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {emptyData()}
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
})