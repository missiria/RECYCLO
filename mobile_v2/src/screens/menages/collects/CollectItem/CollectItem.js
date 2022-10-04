import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import i18n from 'i18next';
import addIcon from "../../../../assets/images/addIcon.png"

export default function CollectItem({ img, name, navigation }) {
    const maxLength = 15;
    const length = name.length;
    const text = length > maxLength ? name.slice(0, maxLength) + '...' : name;
    const rtl = i18n.language == "ar" ? true : false;
    const rtlBox = rtl && { flexDirection: "row-reverse" }
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('CategoryDetail')} style={styles.card} >
            <View>
                <Image
                    style={styles.cardImg}
                    source={img}
                />
            </View>
            <View style={[styles.cardBody, rtlBox]}>
                <View>
                    <Text style={[styles.titleCateg]}>
                        {text}
                    </Text>
                    <Text style={styles.price}>
                        0.50  {i18n.t("categoryDetails.dhs")} / {i18n.t("categoryDetails.kg")}
                    </Text>
                </View>
                <Image 
                    source={addIcon}
                    style={styles.iconAdd}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        width: "48%",
        backgroundColor: 'white',
        marginBottom: 15,
        borderRadius: 5,
        shadowColor: "#888888",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 5,
    },
    cardImg: {
        width: "100%",
        height: 114,
        resizeMode: "contain",
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 2,
        borderTopLeftRadius: 2,
    },
    cardBody: {
        backgroundColor: '#FAFAFA',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        width: "100%",
        padding: 10,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        height: 60,
        marginTop: -4
    },
    headerImg: {
        paddingRight: 15,
    },
    textBox: {
        marginTop: 11,
    },
    boldTitle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    },
    smallDesc: {
        color: "#7C7C7C",
        fontSize: 11,
    },
    btnIconPlus: {
        color: '#53C330',
        fontSize: 23
    },
    titleCateg: {
        color: 'black',
        fontSize: 12,
        fontFamily: 'MetropoliceSemiBold',
        letterSpacing: 0.5,
    },
    price: {
        color: '#262626',
        fontSize: 10,
        marginTop:5
    },
    iconAdd : {
        height: 23,
        width: 23,
    },
})