import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react';
import { PolData } from './PolData';

export default function Politique() {
    return (
        <View style={styles.container}>
            <ScrollView>
                {PolData.map(item => {
                    return (
                        <View key={item.id} style={{ marginTop: 20, marginHorizontal: 20,marginBottom:20 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                                {item.title}
                            </Text>
                            <Text style={{ marginTop: 12, color: '#262626' }}>
                                {item.desc}
                            </Text>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})