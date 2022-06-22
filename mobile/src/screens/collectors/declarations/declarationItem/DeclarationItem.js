import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'


export default function DeclarationItem({navigation, img, username, typeDechet, city, date, quantity }) {
    return (
        <TouchableOpacity onPress={() => 
            navigation.navigate("DeclarationDetails")
            // navigation.navigate("PayedAlert")
        } style={styles.cardBox}>
            <View>
                <Image
                    style={styles.cardImg}
                    source={img}
                />
            </View>
            <View>
                <View style={styles.cardBodyHeader}>
                    <Text style={styles.boxUsername}>{username}</Text>
                    <Text style={styles.typeDechet}>{typeDechet}</Text>
                </View>
                <View style={styles.cardBodyHeader}>
                    <Text style={styles.cityBox}>{city}</Text>
                    <Text style={styles.quantityBox}>{quantity} kgs</Text>
                </View>
                <View style={styles.cardBodyHeader}>
                    <Text style={styles.timeBox}>{date}</Text>
                    <Text style={styles.priceOfQauantity}>0.50 Dhs/kgs</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardBox: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        shadowColor: "gray",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 10,
        padding: 14,
        marginBottom: 1,
        marginTop: 20,
        borderRadius: 5,
        width: "100%",

    },
    cardImg: {
        width: 70,
        height: 70,
        resizeMode: 'cover',
        borderRadius: 5,
        marginRight: 13
    },
    cardBodyHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    boxUsername: {
        marginRight: 20,
        fontWeight: 'bold'
    },
    typeDechet: {
        backgroundColor: '#33CC66',
        paddingHorizontal: 10,
        paddingVertical: 2,
        color: 'white',
        borderRadius: 5,
    },
    cityBox: {
        color: '#828282',
        marginTop: -10
    },
    quantityBox: {
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 7,
    },
    timeBox: {
        color: '#828282',
        fontSize: 10,
    },
    priceOfQauantity: {
        color: '#828282',
        fontSize: 10,
        marginTop: 10
    },
})