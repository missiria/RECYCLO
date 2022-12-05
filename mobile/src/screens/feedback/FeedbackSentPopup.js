import { Alert, Modal, TouchableHighlight, StyleSheet, Text, Image, View } from "react-native";
import React, { useState, useEffect } from 'react';

export default function FeedbackSentPopup({ navigation, visible, setVisible }) {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            contentContainerStyle={styles.centeredView}
        >
            <TouchableHighlight 
                onPress={() => setVisible(false)}
                style={styles.centeredView}>
                <View  style={styles.modalView}>
                    <Image
                        style={styles.img}
                        source={require('../../../assets/images/done.png')}
                    />
                    <Text style={styles.textModal}>
                        Merci
                    </Text>
                    <Text  style={styles.textDesc}>
                        Merci beaucoup pour votre
                        évaluation!
                    </Text>

                </View>
            </TouchableHighlight>
        </Modal>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.3)",
        height: "100%",
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowRadius: 4,
        elevation: 5
    },
    img: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
    textModal: {
        fontSize: 20,
        fontFamily: 'MetropoliceBold',
        textAlign: 'center',
        marginTop: 20,
    },
    textDesc : {
        fontSize: 16,
        fontFamily: 'MetropoliceLight',
        textAlign: 'center',
        marginTop: 20,
        color : "#A3A3A3",
        letterSpacing: 0.5,
        lineHeight: 20,
    }
});