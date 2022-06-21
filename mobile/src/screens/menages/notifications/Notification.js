import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react';
import Navbar from '../navigations/Navbar';
import FooterNav from '../navigations/FooterNav'
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
                Data.map(item => (
                    <NotificationItems
                        title={item.title}
                        time={item.time}
                        date={item.date}
                    />
                ))
            )
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <Navbar title="Notifications" navigation={navigation} />
            <ScrollView>
                {emptyData()}
            </ScrollView>
            <FooterNav navigation={navigation} />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
})