import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, Image } from 'react-native'
import React,{useState,useEffect} from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import Icond from 'react-native-vector-icons/FontAwesome';
import checkIcon from '../../../../assets/images/ch.png'
import i18n from "i18next";

import { useAPI } from "~/hooks/hooks";
import { EdgeCardOrder } from '~/ui/cards/EdgeCardOrder';

export default function Accepted({ navigation }) {

  const [orders, setOrders] = useState([]);

  const { isLoading, error, data } = useAPI({
    url: 'orders',
    method: 'POST',
    data: {
      status: 'CONFIRM'
    },
  },true);

  useEffect(() => {
    if (data !== null){
      setOrders(data);
    }
  }, [data]);

  const textConfirm = i18n.t("menageDemend.confirm");
  const textStartWay = i18n.t("menageDemend.startWay");

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <ScrollView>
      { error !== null ? <Text>{error.message}</Text> : 
          isLoading ? 
            <ActivityIndicator size="small" color="#ff00ff" />
          :
          orders != undefined && orders.map((order) => (
            <EdgeCardOrder key={order.id} order={order} textAction={textConfirm} styleAction={styles.butonLeft} onPressAction={()=>{console.log("onPressAction")}} textAction2={textStartWay} styleAction2={styles.butonRight} onPressAction2={()=>{console.log("onPressAction")}} onPressEdit={()=>{console.log("Edit")}} />
          )) 
        }
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
              confirmer cette ordre ?
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
  textPay: {
    fontWeight: 'bold',
  },
  textTotal: {
    color: '#33CC66',
    fontWeight: 'bold'
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
  popUpMsg : {
    textAlign:'center',
    marginTop:23,
    color:'#A3A3A3',
  },
})