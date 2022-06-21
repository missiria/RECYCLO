import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function QuesionsProps({q,a}) {
    return (
        <View style={styles.container}>
            <Text style={styles.headerBox}>
                 {q}
            </Text>
            <Text style={styles.bodyCard}>
                {a}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius:10,
        backgroundColor:'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginLeft:1,
        marginBottom:19,
        marginRight:1
    },
    headerBox : {
        color:'white',
        fontWeight:'bold',
        backgroundColor:'#8C98A8',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        paddingVertical:10,
        paddingHorizontal:20
    },
    bodyCard : {
        marginTop:10,
        marginHorizontal:10,
        paddingVertical:10
    },
})