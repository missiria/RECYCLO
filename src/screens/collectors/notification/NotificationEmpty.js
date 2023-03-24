import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import notificationIcon from "../../../assets/images/notif.png";

export default function EmptyNotifi() {
    return (
        <View style={styles.container}>
            <View style={styles.groupBox}>
                <Image
                    style={styles.image}
                    source={notificationIcon}
                />
                <Text style={styles.textDesc}>
                    Vous n'avez pas encore
                    reçu de notifications
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:150,
    },
    groupBox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textDesc: {
        marginHorizontal:50,
        textAlign:'center',
        fontSize:15,
        color:'#A3A3A3',
    },
    image : {
        width: 100,
        height: 100,
        marginBottom:20,
    },
})