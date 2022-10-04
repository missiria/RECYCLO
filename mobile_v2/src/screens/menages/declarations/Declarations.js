import { View,StyleSheet } from 'react-native'
import React from 'react'
import MenageDeclarationsTab from '../../../routes/MenageDeclarationsTab';

export default function Declarations({ navigation }) {
    return (
        <View style={styles.container}>
            <MenageDeclarationsTab />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})