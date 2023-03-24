import { ScrollView, StyleSheet, Text,View,Image } from "react-native";
import React, {useState, useEffect} from "react";
import { Modal } from "react-native-paper";
import StarIcon from '../../../assets/images/star.png';


export default function GiveFeedbackPopup({navigation}) {
    const [isOPenPopup, setIsOpenPopup] = useState(true);
  return (
        <Modal 
            visible={isOPenPopup}
            onDismiss={() => setIsOpenPopup(false)} 
            contentContainerStyle={styles.modalView}
        >
            <View style={styles.centerView}>  
                <Image 
                    style={styles.starIcon}
                    source={StarIcon}
                />
                <Text style={styles.modalText}>
                  Appuyez sur une 
                  étoile pour l'évaluer
                  sur l'App Store
                </Text>
                <Text style={styles.line} ></Text>
                <View style={styles.modalFooterBtns}>
                    <Text
                        onPress={() => navigation.navigate('GiveFeedback')}
                        style={styles.modalBtnLeft}> 
                        Evaluer</Text>
                    <Text 
                        onPress={() => setIsOpenPopup(false)}
                        style={styles.modalBtnRight}>
                            Plus tard
                        </Text>
                </View>
            </View>
        </Modal>
  );
}

const styles = StyleSheet.create({
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: "80%",
        marginLeft: "10%",
        alingSelf: "center",
        alingItems: "center",
        justifyContent: "center",

    },
    line : {
        width: 300,
        height: 0.25,
        marginTop : 20,
        marginBottom : 20,
        backgroundColor : "#A3A3A3"
    },
    modalText : {
        fontSize: 14,
        zIndex: 2,
        padding : 10,
        textAlign: "center",
        lineHeight: 24,
        letterSpacing: 1,
        marginHorizontal: 2,
        fontFamily: "MetropoliceLight",
        marginTop: 40,
        color : "#A3A3A3",
    },
    starIcon : {
        width: 100,
        height: 100,
        alignSelf: "center",
    },
    modalFooterBtns : {
        flexDirection : 'row',
        justifyContent : 'space-around',
        marginTop : 10,
    },
    modalBtnLeft : {
        color : "#33CC66",
        fontFamily: "Montserrat",
        fontSize: 14,
        fontFamily: "MetropoliceSemiBold",
  
    },
    modalBtnRight : {
        fontFamily: "Montserrat",
        fontSize: 14,
        fontFamily: "MetropoliceSemiBold",
 
    },
})