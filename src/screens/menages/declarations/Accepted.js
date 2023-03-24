import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Modal,
  Image,
  ActivityIndicator,
} from "react-native";
import { useState, useEffect } from "react";
import checkIcon from "../../../assets/images/ch.png";
import i18n from "i18next";

import { useAPI } from "~/hooks/hooks";
import { EdgeCardDemande } from "~/ui/cards/EdgeCardDemande";
import { useFetch } from "../../../hooks/hooks";
import EmptyDeclaration from "./EmptyDeclaration";

export default function Accepted() {
  const [declarations, setDeclarations] = useState([]);
  const [declarationId, setDeclarationId] = useState("")

  const { isLoading: isFetching, error, data, refetch } = useFetch(
    "declarations",
    {
      method: "POST",
      body: JSON.stringify({
        status: "VALID",
      }),
    },
  );

  // * Update declaration
  const [trigger, { isLoading: isUpdateDeclarationLoading }] = useFetch(`declarations/update/${declarationId}`, {
    method: 'PUT',
    body: JSON.stringify({
      status: "PAID"
    })
  }, true)

  // * Update Order
  const [updateOrder, { isLoading: isUpdateOrderLoading }] = useFetch(`orders/${declarationId}/update`, {
    method: 'PUT',
    body: JSON.stringify({
      status: "CONFIRM"
    })
  }, true)

  // * When user clicks "Confirmer"
  const confirmOrder = async () => {
    await Promise.all([
      trigger(),
      updateOrder()
    ])
    setModalVisible(!modalVisible)
  }

  useEffect(() => {
    if (data !== null) {
      setDeclarations(data);
    }
  }, [isFetching]);

  useEffect(() => {
    refetch()
  }, [isUpdateDeclarationLoading, isUpdateOrderLoading])

  const textAction = i18n.t("menageDemend.confirm");

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={data?.length === 0 && styles.scrollView} >
        {error !== null ? (
          <Text>{error.message}</Text>
        ) : isFetching ? (
          <ActivityIndicator size="small" color="#ff00ff" />
        ) : (
          declarations?.map((declaration) => (
            <EdgeCardDemande
              key={declaration.id}
              declaration={declaration}
              textAction={textAction}
              styleAction={styles.actionValid}
              onPressAction={() => {
                setDeclarationId(declaration.id)
                setModalVisible(true);
              }}
            />
          ))
        )}
        {data?.length === 0 && (
          <EmptyDeclaration />
        )}
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image style={styles.iconImg} source={checkIcon} />
            <Text  style={styles.popUpMsg}>
              {i18n.t("menageDemend.modalSubtitle")}
            </Text>
            <Text onPress={confirmOrder} style={styles.confirmButon}>
              {(isUpdateDeclarationLoading || isUpdateOrderLoading) ? <ActivityIndicator size="small" color="#fff" /> : i18n.t("menageDemend.modalYes") }
            </Text>

            <Text
              onPress={() => setModalVisible(!modalVisible)}
              style={styles.noneButon}
            >
              {i18n.t("menageDemend.modalNo")}
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  // * Not Found
  scrollView: {
    flex: 1,
  },
  notFound: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  notFoundText: {
    color: "#999"
  },
  TopCard: {
    backgroundColor: "white",
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardHeaderLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardHeaderRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  headcontetn: {
    color: "#A3A3A3",
    marginRight: 10,
  },
  headcontetnCnte: {
    color: "black",
    marginRight: 10,
  },
  headcontetIcon: {
    color: "black",
    fontSize: 16,
  },
  cardcenter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 26,
    paddingBottom: 15,
    borderBottomColor: "#A3A3A3",
    borderBottomWidth: 0.3,
  },
  detailText: {
    fontWeight: "bold",
  },
  detailIcon: {
    fontSize: 14,
  },
  cardBody: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
    paddingBottom: 15,
    borderBottomColor: "#A3A3A3",
    borderBottomWidth: 0.3,
  },
  textPay: {
    fontWeight: "bold",
  },
  textTotal: {
    color: "#33CC66",
    fontWeight: "bold",
    fontSize: 17,
  },
  actionValid: {
    backgroundColor: "#33CC66",
    color: "white",
  },
  contetnBody: {
    marginTop: 12,
    justifyContent: "space-between",
    marginTop: 15,
    paddingBottom: 15,
    borderBottomColor: "#A3A3A3",
    borderBottomWidth: 0.3,
  },
  clientInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  clientsUsername: {
    fontWeight: "bold",
  },
  clientsDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  detailsHide: {
    display: "none",
  },
  breakLineMini: {
    width: "100%",
    borderColor: "#A3A3A3",
    borderStyle: "dashed",
    borderWidth: 0.2,
    marginTop: 15,
  },
  dirh: {
    color: "#33CC66",
    fontWeight: "bold",
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
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
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
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
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  iconImg: {
    width: 80,
    height: 80,
  },

  confirmButon: {
    borderWidth: 1.5,
    color: "white",
    backgroundColor: "#33CC66",
    borderRadius: 5,
    paddingVertical: 10,

    borderColor: "#33CC66",
    marginTop: 30,
    width: 170,
    textAlign: "center",
  },
  noneButon: {
    borderWidth: 1.5,
    color: "black",
    borderRadius: 5,
    paddingVertical: 10,

    borderColor: "#33CC66",
    marginTop: 10,
    width: 170,
    textAlign: "center",
  },
  popUpMsg: {
    textAlign: "center",
    marginTop: 23,
    color: "#A3A3A3",
  },
});
