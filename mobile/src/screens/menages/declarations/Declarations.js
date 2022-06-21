import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import Navbar from '../navigations/Navbar';
import FooterNav from '../navigations/FooterNav';
import MenageDeclarationsTab from '../../../routes/MenageDeclarationsTab';

export default function Declarations({ navigation }) {
    return (
        <View style={styles.container}>
            <MenageDeclarationsTab />
            <FooterNav navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})