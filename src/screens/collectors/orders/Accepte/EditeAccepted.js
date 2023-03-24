import { View, Text, StyleSheet, ScrollView, TextInput, Pressable, Modal, Image } from 'react-native'
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import checkIcon from '../../../../assets/images/ch.png'
export default function EditeAccepted({ navigation }) {
  const [price, setPrice] = React.useState('5.50');
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.TopCard}>
            <View style={styles.contetnBody}>
              <View style={styles.clientInfo}>
                <Text>
                  Clients
                </Text>
                <Text style={styles.clientsUsername}>
                  Radia Aamalik
                </Text>
              </View>
              <View style={styles.clientsDetails}>
                <Text>Type</Text>
                <Text>Vêtements</Text>
              </View>
              <View style={styles.clientsDetails}>
                <Text>Quantité</Text>
                <Text>10.00 kg</Text>
              </View>
              <View style={styles.clientsDetails}>
                <Text>Prix</Text>
                <Text>0.50 Dh</Text>
              </View>
              <View style={styles.clientsDetails}>
                <Text>Frais de transaction</Text>
                <Text>0.5 Dh</Text>
              </View>
            </View>
          </View>

          <View style={styles.TopCard}>
            <View style={styles.cardBody}>
              <Text style={styles.textPayTwo}>
                Modifier la quantité
              </Text>
              <TextInput
                style={styles.textTotalTwo}
                placeholder="5.50 Dh"
                onChangeText={setPrice}
                value={price + " Kg"}
                keyboardType="numeric"
                editable
              />
            </View>

            <View style={styles.cardBodyTwo}>
              <Text style={styles.textPay}>
                Montant a payée
              </Text>
              <Text style={styles.textTotal}>
                5.50 Dh
              </Text>
            </View>
          </View>
          <View style={styles.alertMsgBox}>
            <Text style={styles.alertMsg}>
              Si vous avez effectué des modifications plus
              de 3 fois votre ordre sera bloquée.
            </Text>
            <Icon
              name='ios-alert-circle-outline'
              style={styles.alertIcon}
            />
          </View>
        </View>

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
                effectuer ce changement ?
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


      </ScrollView>
      <View style={styles.btnFooter}>
        <Text
          onPress={() => setModalVisible(true)}
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
    backgroundColor: 'white',
  },
  popUpMsg : { 
    textAlign:'center',
    marginTop:23,
    color:'#A3A3A3',
  },
  TopCard: {
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17,
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
    padding: 20,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardHeaderRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headcontetn: {
    color: '#A3A3A3',
    marginRight: 10
  },
  headcontetnCnte: {
    color: '#A3A3A3',
    marginRight: 10,
  },
  headcontetIcon: {
    color: '#A3A3A3',
    fontSize: 16,
  },
  cardcenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 26,
    paddingBottom: 15,
    borderBottomColor: '#A3A3A3',
    borderBottomWidth: 0.3,
  },
  detailText: {
    fontWeight: 'bold'
  },
  detailIcon: {
    fontSize: 14,
  },
  cardBody: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
    paddingBottom: 15,
    borderBottomColor: '#A3A3A3',
    borderBottomWidth: 0.3,
  },
  cardBodyTwo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
    paddingBottom: 1,
  },
  textPay: {
    fontWeight: 'bold',
  },
  textTotal: {
    color: '#33CC66',
    fontWeight: 'bold'
  },
  textTotalTwo: {
    color: 'black',
    fontWeight: 'bold'
  },
  contetnBody: {
    marginTop: 12,
    justifyContent: 'space-between',
    marginTop: 15,
    paddingBottom: 15,

  },
  clientInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  clientsUsername: {
    //fontWeight: 'bold',
  },
  clientsDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  detailsHide: {
    display: 'none'
  },
  butons: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  butonLeft: {
    backgroundColor: '#A3A3A3',
    padding: 9,
    borderRadius: 5,
    width: "40%",
    textAlign: 'center',
    color: 'white',
  },
  butonRight: {
    backgroundColor: '#33CC66',
    padding: 9,
    borderRadius: 5,
    width: "50%",
    textAlign: 'center',
    color: 'white',
  },
  alertMsgBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#F0F1F9',
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 10,
  },

  alertMsg: {
    fontSize: 13,
    color: '#5B68F6',
    marginRight: 10,
    maxWidth: 240,
  },
  alertIcon: {
    fontSize: 22,
    color: '#5B68F6',
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
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  iconImg: {
    width: 80,
    height: 80,
  },
  confirmButon : { 
    borderWidth:1.5,
    color: 'white',
    backgroundColor:'#33CC66',
    borderRadius:5,
    paddingVertical:10,
 
    borderColor:'#33CC66',
    marginTop:30,
    width: 170,
    textAlign:'center'
  },
  noneButon : { 
    borderWidth:1.5,
    color: 'black',
    borderRadius:5,
    paddingVertical:10,
 
    borderColor:'#33CC66',
    marginTop:10,
    width: 170,
    textAlign:'center'
  },
})