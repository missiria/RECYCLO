import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import NotificationProps from './NotificationProps';
import { Data } from './NotificationTestFakeData';

export default function NotificationItems() {
    return (
        <View>
            {Data.map(notification => {
                return (
                    <NotificationProps
                        key={notification.id}
                        title={notification.title}
                        time={notification.time}
                        date={notification.date}
                    />
                )
            })}
        </View>
    )
}
