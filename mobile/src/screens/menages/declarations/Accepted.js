import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, Image } from 'react-native'
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import checkIcon from '../../../assets/images/ch.png'
import i18n from "i18next";

export default function Accepted() {
  const [details, setDetails] = useState(true);
  const showDetails = () => {
    setDetails(true);
  }

  const hideDetailse = () => {
    setDetails(false);
  }
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.TopCard}>

            <View style={styles.cardHeader}>
              <View style={styles.cardHeaderLeft}>
                <Text style={styles.headcontetn}>
                  10-04-2022
                </Text>
                <Text style={styles.headcontetn}>
                  16:15
                </Text>
              </View>

            </View>

            <TouchableOpacity
              onPress={details ? hideDetailse : showDetails}
              style={styles.cardcenter}
            >
              <Text style={styles.detailText}>
                {i18n.t("menageDemend.details")}
              </Text>
              <Text>
                <Icon
                  style={styles.detailIcon}
                  name="chevron-thin-up"
                />
              </Text>
            </TouchableOpacity>

            <View style={details ? styles.contetnBody : styles.detailsHide}>
              <View style={styles.clientInfo}>
                <Text>
                  {i18n.t("menageDemend.type")}
                </Text>
                <Text>
                  Vêtements
                </Text>
              </View>
              <View style={styles.clientsDetails}>
                <Text>
                  {i18n.t("menageDemend.qty")}
                </Text>
                <Text>10.00 kg</Text>
              </View>
              <View style={styles.clientsDetails}>
                <Text>
                {i18n.t("menageDemend.price")}
                </Text>
                <Text>0.50 Dh</Text>
              </View>
              <View style={styles.breakLineMini}></View>
              <View style={styles.clientsDetails}>
                <Text style={styles.clientsUsername}>{i18n.t("menageDemend.dh-total")}</Text>
                <Text style={styles.dirh}>5 {i18n.t("menageDemend.dh")}</Text>
              </View>
            </View>

            <View style={styles.cardBody}>
              <Text style={styles.textPay}>
                {i18n.t("menageDemend.total")}
              </Text>
              <Text style={styles.textTotal}>
                500
              </Text>
            </View>

            <Text
              onPress={() => setModalVisible(true)}
              style={styles.buton}>
             {i18n.t("menageDemend.confirm")}
            </Text>

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
              {i18n.t("menageDemend.modalSubtitle")}
            </Text>
            <Text style={styles.confirmButon}>
              {i18n.t("menageDemend.modalYes")}
            </Text>

            <Text
              onPress={() => setModalVisible(!modalVisible)}
              style={styles.noneButon}>
              {i18n.t("menageDemend.modalNo")}
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
  TopCard: {
    backgroundColor: 'white',
    shadowColor: "gray",
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
    color: 'black',
    marginRight: 10,
  },
  headcontetIcon: {
    color: 'black',
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
  textPay: {
    fontWeight: 'bold',
  },
  textTotal: {
    color: '#33CC66',
    fontWeight: 'bold',
    fontSize: 17,
  },
  buton: {
    marginTop: 15,
    textAlign: 'center',
    backgroundColor: '#33CC66',
    borderRadius: 5,
    padding: 9,
    color: 'white'
  },
  contetnBody: {
    marginTop: 12,
    justifyContent: 'space-between',
    marginTop: 15,
    paddingBottom: 15,
    borderBottomColor: '#A3A3A3',
    borderBottomWidth: 0.3,
  },
  clientInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  clientsUsername: {
    fontWeight: 'bold',
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
  breakLineMini: {
    width: "100%",
    borderColor: '#A3A3A3',
    borderStyle: 'dashed',
    borderWidth: 0.2,
    marginTop: 15,
  },
  dirh: {
    color: '#33CC66',
    fontWeight: 'bold',
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
  popUpMsg: {
    textAlign: 'center',
    marginTop: 23,
    color: '#A3A3A3',
  },
})