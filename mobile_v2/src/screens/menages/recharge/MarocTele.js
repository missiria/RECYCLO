import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { RadioButton } from 'react-native-paper';
import marocTelectomImg from "../../../assets/images/it.png";

export default function MarocTele({navigation}) {
    const [checked, setChecked] = React.useState('type');
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.boxCard}>
                    <View style={styles.boxHeader}>
                        <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Opérateur sélectionné :</Text>
                        <Image
                            source={marocTelectomImg}
                        />
                    </View>
                    <View style={styles.phonDes}>
                        <Text style={{ fontWeight: 'bold', }}>Numéro de téléphone</Text>
                        <Text style={{ fontWeight: 'bold', }}>+212 6 87 97 98 23</Text>
                    </View>
                    <View style={styles.boxShoix}>

                        <View style={styles.ArabicChec}>
                            <View style={styles.ArabicChild}>
                                <Text >
                                    <RadioButton
                                        color="#33CC66"
                                        value="arabic"
                                        status={checked === 'Normale' ? 'checked' : 'unchecked'}
                                        onPress={() => setChecked('Normale')}
                                    />
                                </Text>
                            </View>
                            <View style={styles.ArabicChild}>
                                <Text onPress={() => setChecked('Normale')}>
                                    Normale
                                </Text>
                            </View>
                        </View>

                        <View style={styles.ArabicChec}>
                            <View style={styles.ArabicChild}>
                                <Text >
                                    <RadioButton
                                        color="#33CC66"
                                        value="arabic"
                                        status={checked === '*1' ? 'checked' : 'unchecked'}
                                        onPress={() => setChecked('*1')}
                                    />
                                </Text>
                            </View>
                            <View style={styles.ArabicChild}>
                                <Text onPress={() => setChecked('*1')}>
                                    SMS *1
                                </Text>
                            </View>
                        </View>

                        <View style={styles.ArabicChec}>
                            <View style={styles.ArabicChild}>
                                <Text >
                                    <RadioButton
                                        color="#33CC66"
                                        value="arabic"
                                        status={checked === '*2' ? 'checked' : 'unchecked'}
                                        onPress={() => setChecked('*2')}
                                    />
                                </Text>
                            </View>
                            <View style={styles.ArabicChild}>
                                <Text onPress={() => setChecked('*2')}>
                                    Tout compris *2
                                </Text>
                            </View>
                        </View>

                        <View style={styles.ArabicChec}>
                            <View style={styles.ArabicChild}>
                                <Text >
                                    <RadioButton
                                        color="#33CC66"
                                        value="arabic"
                                        status={checked === '*3' ? 'checked' : 'unchecked'}
                                        onPress={() => setChecked('*3')}
                                    />
                                </Text>
                            </View>
                            <View style={styles.ArabicChild}>
                                <Text onPress={() => setChecked('*3')}>
                                    Internet *3
                                </Text>
                            </View>
                        </View>

                        <View style={styles.ArabicChec}>
                            <View style={styles.ArabicChild}>
                                <Text >
                                    <RadioButton
                                        color="#33CC66"
                                        value="arabic"
                                        status={checked === '*5' ? 'checked' : 'unchecked'}
                                        onPress={() => setChecked('*5')}
                                    />
                                </Text>
                            </View>
                            <View style={styles.ArabicChild}>
                                <Text onPress={() => setChecked('*5')}>
                                    Jawal *5
                                </Text>
                            </View>
                        </View>

                        <View style={styles.ArabicChec}>
                            <View style={styles.ArabicChild}>
                                <Text >
                                    <RadioButton
                                        color="#33CC66"
                                        value="arabic"
                                        status={checked === '*6' ? 'checked' : 'unchecked'}
                                        onPress={() => setChecked('*6')}
                                    />
                                </Text>
                            </View>
                            <View style={styles.ArabicChild}>
                                <Text onPress={() => setChecked('*6')}>
                                    MT TALK *6
                                </Text>
                            </View>
                        </View>

                        <View style={styles.ArabicChec}>
                            <View style={styles.ArabicChild}>
                                <Text >
                                    <RadioButton
                                        color="#33CC66"
                                        value="arabic"
                                        status={checked === 'Premium' ? 'checked' : 'unchecked'}
                                        onPress={() => setChecked('Premium')}
                                    />
                                </Text>
                            </View>
                            <View style={styles.ArabicChild}>
                                <Text onPress={() => setChecked('Premium')}>
                                    Premium
                                </Text>
                            </View>
                        </View>

                    </View>
                    <View style={styles.lineBreak}></View>
                    <View style={styles.cardFooter}>
                        <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Montant</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 14, color: '#33CC66' }}>10.00 Dhs</Text>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.boxBtn}>
                <Text onPress={() => navigation.navigate("Verify")} style={styles.btnNext}>
                    Soumettre
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    boxCard: {
        marginTop: 20,
        marginHorizontal: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        marginBottom:20,
    },
    boxHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 20,
        alignItems: 'center'
    },

    phonDes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 30,
        alignItems: 'center',
        backgroundColor: '#FAFAFA',
        paddingVertical: 20,
    },
    ArabicChec: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    boxShoix: {
        marginTop: 20,
        paddingHorizontal: 13,
    },
    cardFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 13,
        paddingHorizontal: 15,
        marginBottom: 13,
    },
    lineBreak: {
        marginTop: 10,
        height: 0.5,
        backgroundColor: 'lightgray'
    },

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
})