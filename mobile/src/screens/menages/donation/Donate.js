import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Keyboard } from 'react-native'
import React, { useState, useEffect } from 'react'




export default function Donate({navigation, route}) {
    const { action, amount } = route.params
    const [value, setValue] = useState(amount.toString())
    // TODO: Uncomment this in prod
    // useEffect(() => {
    //     if (Number(value) > amount) {
    //         setValue(amount.toString())
    //         console.log("checked")
    //     }
    // }, [value])

    return (
        <View
            style={styles.container}
            keyboardShouldPersistTaps='always'>
            <ScrollView>
                <View>
                    <View>
                        <Text style={styles.titleText}>
                            Déposer de l'argent
                        </Text>
                        <Text style={styles.destText}>
                            Combien d'argent voudriez-vous Déposer?
                        </Text>
                    </View>
                    <View style={styles.theIntputs}>
                        <TextInput
                            autoFocus={true}
                            onChangeText={setValue}
                            style={styles.input}
                            value={value}
                            placeholderTextColor="#33CC66"
                            keyboardType="numeric"
                            blurOnSubmit={false}
                            maxLength={4}
                        />
                        <Text style={styles.dh}>
                            Dh
                        </Text>
                    </View>
                    {/* <View style={styles.cardsBoxs}>
                        <TouchableOpacity
                            onPress={() => setNumber("100")}
                        >
                            <Text
                                style={styles.cardBox}>
                                100 Dh
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setNumber("200")}
                        >
                            <Text
                                style={styles.cardBox}>
                                200 Dh
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setNumber("300")}
                        >
                            <Text
                                style={styles.cardBox}>
                                300 Dh
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setNumber("500")}
                        >
                            <Text
                                style={styles.cardBox}>
                                500 Dh
                            </Text>
                        </TouchableOpacity>
                    </View> */}
                </View>
            </ScrollView>
            <View style={styles.btnFooter}>
                <Text
                    onPress={() => navigation.navigate("MenageBankDetails", { value , action })}
                    style={styles.buttonBtn}>
                    valider
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    titleText: {
        fontWeight: 'bold',
        marginHorizontal: 20,
        marginTop: 20,
        fontSize: 19,
    },
    destText: {
        marginHorizontal: 20,
        fontSize: 12,
    },
    theIntputs: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginTop: 60,
    },
    input: {
        fontSize: 30,
        marginRight: 10,
        color: '#33CC66',
        width: 70,
        fontWeight: 'bold'
    },
    dh: {
        color: '#33CC66',
        fontWeight: 'bold',
        fontSize: 20,
    },
    cardsBoxs: {
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    cardBox: {
        backgroundColor: '#F8F8F8',
        padding: 10,
        paddingHorizontal: 14,
        borderRadius: 5,
    },
    buttonBtn: {
        marginTop: 20,

        backgroundColor: '#4ECB71',
        color: '#fff',
        fontSize: 15,
        padding: 14,
        borderRadius: 5,
        textAlign: 'center',
    },

    btnFooter: {
        marginTop: 20,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});