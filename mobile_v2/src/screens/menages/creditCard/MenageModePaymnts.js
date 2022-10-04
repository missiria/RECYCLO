import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import addCard from '../../../assets/images/adc.png'
import SuccessCard from '../../../assets/images/adcd.png'
import Icon from 'react-native-vector-icons/Entypo'
import checkIcon from '../../../assets/images/ch.png'

export default function MenageModePaymnts({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <View>
            <Text style={styles.titleBigText}>
                Vos carte enregistrées 
            </Text>
            <TouchableOpacity style={styles.addCardBox}>
              <View style={styles.cardLeftBox}>
                <Image
                  style={styles.iconAddCard}
                  source={SuccessCard}
                />
                <Text style={styles.addCardDesc}>
                  8234 **** **** 3292
                </Text>
              </View>
              <View>
                <Icon
                  onPress={() => setModalVisible(true)}
                  style={styles.deletCard}
                  name='trash'
                />
              </View>
            </TouchableOpacity>
          </View>


          <View>
            <Text style={styles.titleBigText}>
              Ajouter une nouvelle carte
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("MenageAddCreditCard")}
              style={styles.addCardBox}>
              <View style={styles.cardLeftBox}>
                <Image
                  style={styles.iconAddCard}
                  source={addCard}
                />
                <Text style={styles.addCardDesc}>
                  Ajouter une nouvelle carte
                </Text>
              </View>
              <View>
                <Icon
                  style={styles.addCardIcon}
                  name="squared-plus"
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
              style={styles.iconImg}
              source={checkIcon}
            />
            <Text style={styles.popUpMsg}>
              Voulez-vous vraiment
              supprimer cette carte?
            </Text>
            <Text style={styles.confirmButon}>
              Confirmer
            </Text>

            <Text
              onPress={() => setModalVisible(!modalVisible)}
              style={styles.noneButon}>
              Non
            </Text>

          </View>
        </View>
      </Modal>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  addCardBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 10,
    backgroundColor: 'white',
    shadowColor: "gray",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  cardLeftBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconAddCard: {
    width: 35,
    height: 30,
    marginRight: 20,
  },
  addCardDesc: {
    fontSize: 13,
  },
  addCardIcon: {
    color: '#33CC66',
    fontSize: 22,
    fontWeight: 'bold'
  },
  titleBigText: {
    marginTop: 20,
    fontWeight: 'bold',
    marginHorizontal: 20,
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
  DsblbuttonBtn: {
    marginTop: 20,

    backgroundColor: '#C4C4C4',
    color: '#fff',
    fontSize: 15,
    padding: 14,
    borderRadius: 5,
    textAlign: 'center',
  },
  deletCard: {
    fontSize: 20,
    color: 'red'
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  popUpMsg: {
    textAlign: 'center',
    marginTop: 23,
    color: '#A3A3A3',
  },
  iconImg: {
    width: 80,
    height: 80,
  },
  confirmButon: {
    borderWidth: 1.5,
    color: 'white',
    backgroundColor: '#33CC66',
    borderRadius: 5,
    paddingVertical: 10,

    borderColor: '#33CC66',
    marginTop: 30,
    width: 170,
    textAlign: 'center'
  },
  noneButon: {
    borderWidth: 1.5,
    color: 'black',
    borderRadius: 5,
    paddingVertical: 10,

    borderColor: '#33CC66',
    marginTop: 10,
    width: 170,
    textAlign: 'center'
  },

})