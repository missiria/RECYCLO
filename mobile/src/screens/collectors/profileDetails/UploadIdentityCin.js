import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/AntDesign';


export default function UploadIdentityCin({navigation}) {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.containerBoxTwo}>
                    <Image
                        style={styles.img}
                        source={require('../../../assets/images/uploadIdentity.png')}
                    />
                    <Text style={styles.boldText}>
                        Ma carte d’identité
                    </Text>
                    <Text style={styles.lightText}>
                        Prenez une photo ou téléchargez
                        le recto puis le verso
                    </Text>
                    <View style={styles.boxsCards}>
                        <TouchableOpacity
                            style={styles.uploadCardBox}
                        >
                            <View style={styles.lftInboxUplaod}>
                                <Icon
                                    style={styles.uploadIcon}
                                    name="addfile"
                                />
                                <Text style={styles.uploadText}>
                                    Selectionnez le recto
                                </Text>
                            </View>
                            <Icon
                                style={styles.uploadCheked}
                                name="checkcircle"
                            />
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.uploadCardBox}
                        >
                            <View style={styles.lftInboxUplaod}>
                                <Icon
                                    style={styles.uploadIcon}
                                    name="addfile"
                                />
                                <Text style={styles.uploadText}>
                                    Selectionnez le recto
                                </Text>
                            </View>
                            <Icon
                                style={styles.uploadCheked}
                                name="checkcircle"
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.formatBox}>
                        <Text style={styles.formatFile}>
                            Format : JPEG, PNG, PDF
                        </Text>
                        <Text style={styles.formatFile}>
                            Taille maximale : 10Mo
                        </Text>
                    </View>
                    <Text 
                        onPress={() => navigation.navigate("VerifyAccount")}
                        style={styles.button}>
                        valider
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    boxsCards: {
        marginTop: 20,
    },
    containerBoxTwo: {
        marginHorizontal: 20,
    },
    img: {
        width: "60%",
        height: 220,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    boldText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: '5%',
        textAlign: 'center',
    },
    lightText: {
        fontSize: 15,
        marginBottom: '5%',
        color: '#7C7C7C',
        textAlign: 'center',
    },

    uploadCardBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#F8F8F8',
        padding: 16,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop:20,
    },
    lftInboxUplaod : {
        flexDirection: 'row',
        alignItems: 'center',
    },
    uploadIcon : {
        fontSize:22,
        color:'#4ECB71',
        marginRight:20,
    },
    uploadText : {
        color:'#828282',
        fontSize:14,
    },
    uploadCheked : {
        color:'#33CC66',
        fontSize:14,
    },
    formatBox : {
        marginTop:20,
    },
    formatFile : {
        color:'#828282',
        fontSize:12,
        marginTop:5,
    },

    button : {
        marginTop: '15%',
        color: 'white',
        backgroundColor: '#4ECB71',
        textAlign: 'center',
        borderRadius: 5,
        paddingVertical: 15,
        marginBottom: 20,
    },
});