import { View, Text, StyleSheet, TextInput, Image, SafeAreaView, ScrollView } from 'react-native'
import React from 'react';
import { Formik } from 'formik';
import smsIcon from '../../assets/images/sms.png';

import { schemaValidation, handleRegister } from './services/verification.services'

export default function VerificationUser({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image
                    source={smsIcon}
                    style={styles.Img}
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.bigText}>Vérifiez votre numéro de téléphone</Text>
                <Text style={styles.smallText}>Le c12ode de vérification a été envoyé à</Text>
                <Text style={styles.phoneText}>+212 67 97 98 23</Text>
            </View>
            <Formik
                initialValues={{ n1: '', n2: '', n3: '', n4: '', n5: '' }}
                validationSchema={schemaValidation}
                onSubmit={(values) => handleRegister(values, navigation)}
            >
                {(props) => (
                    <ScrollView>
                        <View style={styles.inputsContainer}>
                            <SafeAreaView style={styles.inputsStyle}>
                                <TextInput
                                    style={styles.input}
                                    keyboardType="numeric"
                                    placeholder="*"
                                    onChangeText={props.handleChange('n1')}
                                    value={props.values.n1}
                                    onBlur={props.handleBlur('n1')}
                                    maxLength={1}
                                />
                                <TextInput
                                    style={styles.input}
                                    keyboardType="numeric"
                                    placeholder="*"
                                    maxLength={1}
                                    onChangeText={props.handleChange('n2')}
                                    value={props.values.n2}
                                    onBlur={props.handleBlur('n2')}
                                />
                                <TextInput
                                    style={styles.input}
                                    keyboardType="numeric"
                                    placeholder="*"
                                    maxLength={1}
                                    onChangeText={props.handleChange('n3')}
                                    value={props.values.n3}
                                    onBlur={props.handleBlur('n3')}
                                />
                                <TextInput
                                    style={styles.input}
                                    keyboardType="numeric"
                                    placeholder="*"
                                    maxLength={1}
                                    onChangeText={props.handleChange('n4')}
                                    value={props.values.n4}
                                    onBlur={props.handleBlur('n4')}
                                />
                                <TextInput
                                    style={styles.input}
                                    keyboardType="numeric"
                                    placeholder="*"
                                    maxLength={1}
                                    onChangeText={props.handleChange('n5')}
                                    value={props.values.n5}
                                    onBlur={props.handleBlur('n5')}
                                />
                            </SafeAreaView>
                            <Text style={{ color: 'red' }}> {props.errors.n1} </Text>
                            <Text style={{ color: 'red' }}> {props.errors.n2} </Text>
                            <Text style={{ color: 'red' }}> {props.errors.n3} </Text>
                            <Text style={{ color: 'red' }}> {props.errors.n4} </Text>
                            <Text style={{ color: 'red' }}> {props.errors.n5} </Text>
                            <Text style={styles.TextInput}>
                                Je n'ai pas reçu de code. <Text>Renvoyer le code</Text>
                            </Text>
                        </View>
                        <View style={styles.buttonContainer}>
                            <Text
                                onPress={props.handleSubmit}
                                style={styles.button}>
                                Vérifier
                            </Text>
                        </View>
                    </ScrollView>
                )}
            </Formik>
        </View>
    )
}



const styles = StyleSheet.create({
    Img: {
        width: 120,
        resizeMode: 'contain'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    imgContainer: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bigText: {
        color: "black",
        fontWeight: 'bold',
        fontSize: 21,
        textAlign: 'center',
        marginBottom: 10,
    },
    smallText: {
        color: '#7C7C7C',
        marginBottom: 10,
    },
    phoneText: {
        color: '#33CC66',
        fontWeight: 'bold',
        fontSize: 19,
        marginBottom: 30
    },
    inputsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputsStyle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        padding: 5,
        borderBottomWidth: 2,
        marginLeft: 10,
        textAlign: 'center',
        borderColor: 'red',
        fontWeight: 'bold',
        color: 'black',
    },
    TextInput: {
        color: '#7C7C7C',
        marginTop: 20,
        fontSize: 12,
    },

    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    button: {

        backgroundColor: '#33CC66',
        borderRadius: 100,
        padding: 15,
        width: 300,
        color: 'white',
        textAlign: 'center',
        borderRadius: 7,
        fontWeight: 'bold',
    },

});