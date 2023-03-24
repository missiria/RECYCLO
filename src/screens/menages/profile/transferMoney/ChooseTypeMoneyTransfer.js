import { View, Text, ScrollView, StyleSheet, Switch, Image } from 'react-native'
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import bankType from '../../../../assets/images/bb.png'

export default function ChooseTypeMoneyTransfer({ navigation, route }) {
    const { amount } = route.params
    console.log(amount);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [isEnabledTwo, setIsEnabledTwo] = useState(false);
    const toggleSwitchTwo = () => setIsEnabledTwo(previousState => !previousState);

    const [isEnabledTree, setIsEnabledTree] = useState(false);
    const toggleSwitchTree = () => setIsEnabledTree(previousState => !previousState);

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ marginHorizontal: 20, marginTop: 22 }}>
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 22, }}>
                        Retrait d'argent
                    </Text>
                    {/* <View>
                        <Text style={{ color: '#262626', marginTop: 30, fontSize: 14, }}>Versement au compte bancaire</Text>
                        <View style={styles.boxVers}>
                            <View style={styles.topOfBox}>
                                <Text style={{ fontWeight: 'bold' }}>Versement au compte bancaire</Text>
                                <Switch
                                    trackColor={{ false: "#767577", true: "#B3FFCA" }}
                                    thumbColor={isEnabled ? "#33CC66" : "#f4f3f4"}
                                    ios_backgroundColor="#B3FFCA"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <Icon
                                    style={{ fontSize: 22, color: '#A3A3A3', marginRight: 12, marginLeft: -4 }}
                                    name="lock"
                                />
                                <Text style={{ fontSize: 13, }}>Opération 100% sécurisé</Text>
                            </View>
                        </View>
                    </View> */}

                    <View>
                        <Text style={{ color: '#262626', marginTop: 30, fontSize: 14, }}>Je retire l'argent via mon compte bancaire</Text>
                        <View style={styles.boxVers}>
                            <View style={styles.topOfBox}>
                                <Text style={{ fontWeight: 'bold' }}>Retrait via compte bancaire</Text>
                                <Switch
                                    trackColor={{ false: "#767577", true: "#B3FFCA" }}
                                    thumbColor={isEnabledTwo ? "#33CC66" : "#f4f3f4"}
                                    ios_backgroundColor="#B3FFCA"
                                    onValueChange={toggleSwitchTwo}
                                    value={isEnabledTwo}
                                />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <Image
                                    style={styles.imgProfile}
                                    source={bankType}
                                />
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text style={{ color: '#262626', marginTop: 30, fontSize: 14, }}>Pas de compte bancaire? je retire via guichet bancaire</Text>
                        <View style={styles.boxVers}>
                            <View style={styles.topOfBox}>
                                <Text style={{ fontWeight: 'bold' }}>Guichet bancaire</Text>
                                <Switch
                                    trackColor={{ false: "#767577", true: "#B3FFCA" }}
                                    thumbColor={isEnabledTree ? "#33CC66" : "#f4f3f4"}
                                    ios_backgroundColor="#B3FFCA"
                                    onValueChange={toggleSwitchTree}
                                    value={isEnabledTree}
                                />
                            </View>
                            <View >
                                <Text style={{ marginBottom: 10, }}>Vous recevez un code de retrait via SMS</Text>
                                <Image
                                    style={styles.imgProfile}
                                    source={bankType}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.boxBtn}>
                    <Text
                        onPress={
                            // isEnabled ? () => navigation.navigate("WithBank", { action: "TRANSFER" }) :
                                isEnabledTwo ? () => navigation.navigate("WithBank", { action: "TRANSFER", amount }) :
                                    isEnabledTree ? () => navigation.navigate("DescScreenT", { action: "ATM", amount }) : null
                        }
                        style={
                            isEnabled ? styles.btnNext :
                                isEnabledTwo ? styles.btnNext :
                                    isEnabledTree ? styles.btnNext : styles.btnNextBlpck

                        }>sélectionner</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    boxVers: {
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 10,
        padding: 10,
        marginTop: 12,
    },
    topOfBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    boxRetreit: {},
    boxGuochet: {},
    boxBtn: {
        paddingVertical: 40,
        paddingHorizontal: 20,
        marginTop: 20,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
        width: "100%",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    btnNext: {
        alignSelf: 'center',
        backgroundColor: '#33CC66',
        padding: 15,
        borderRadius: 7,
        color: 'white',
        fontWeight: 'bold',
        width: "100%",
        textAlign: 'center',
    },
    btnNextBlpck: {
        alignSelf: 'center',
        backgroundColor: '#ECECEC',
        padding: 15,
        borderRadius: 7,
        color: 'black',
        fontWeight: 'bold',
        width: "100%",
        textAlign: 'center',
    },
})