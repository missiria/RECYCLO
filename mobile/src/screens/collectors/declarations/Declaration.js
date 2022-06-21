import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import i18n from "i18next";
import DeclarationItem from './declarationItem/DeclarationItem';
import HeaderImage from "../../../assets/images/c.png";
import { FakeData } from './DeclarationFakeData'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function Declaration({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.headerHome}>
                <View style={styles.headerBox}>
                    <View style={styles.headerImg}>
                        <Image source={HeaderImage} />
                    </View>
                    <View style={styles.textBox}>
                        <Text style={styles.boldTitle}>Déclarations des déchets</Text>
                        <Text style={styles.smallDesc}>Cliquez pour collecter les déchets </Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("Filter")} style={styles.btnFilter}>
                    <Icon
                        style={styles.iconFilter}
                        name='filter-list-alt'
                    />
                </TouchableOpacity>
            </View>
            <View>
                {FakeData && FakeData.map(data => {
                    return (
                        <DeclarationItem
                            key={data.id}
                            navigation={navigation}
                            img={data.img}
                            username={data.username}
                            typeDechet={data.typeDechet}
                            city={data.city}
                            date={data.date}
                            quantity={data.quantity}
                        />
                    )
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerOne: {
        flex: 1,
        backgroundColor: "white",
    },
    headerHome : {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    container: {
        marginHorizontal: 15,
        marginTop: 25,
    },
    headerBox: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    headerImg: {
        paddingRight: 15,
    },
    textBox: {
        marginTop: 11,
    },
    boldTitle: {
        color: "black",
        fontWeight: "bold",
        fontSize: 20,
    },
    smallDesc: {
        color: "#7C7C7C",
        fontSize: 11,
    },
    btnFilter : {
        backgroundColor:'#E5E5E5',
        padding: 6,
        borderRadius:5,
    },
    iconFilter : {
        fontSize:15
    },
})