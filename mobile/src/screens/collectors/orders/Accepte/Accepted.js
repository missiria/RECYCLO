import { useState, useEffect, useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Modal,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import checkIcon from "../../../../assets/images/ch.png";
import i18n from "i18next";

import checkIcon from "../../../../assets/images/ch.png";
import { EdgeCardOrder } from "~/ui/cards/EdgeCardOrder";
import { useFetch, useLoggedInUser } from "../../../../hooks/hooks";

export default function Accepted() {
  const [orders, setOrders] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [declarationId, setDeclarationId] = useState(null);

  // * Single order
  const [singleOrder, setSingleOrder] = useState({});

  // * Check if "singleOrder" is not an empty object
  const [checker, setChecker] = useState(false);
  useEffect(() => {
    setChecker(Object.keys(singleOrder).length !== 0);
  }, [singleOrder]);

  const {
    isLoading: isFetching,
    error,
    data,
    refetch,
  } = useFetch("orders", {
    method: "POST",
    body: JSON.stringify({
      status: "CONFIRM",
    }),
  });

  const { user } = useLoggedInUser();

  const [createNotification, { isLoading }] = useFetch(
    `notifications/create`,
    {
      method: "POST",
      body: JSON.stringify({
        note: `Le collecteur ${
          user?.fullName
        } a pris la route ( délaration de ${
          singleOrder?.declaration?.collect?.collect_name
        } crée en ${new Date(
          singleOrder?.declaration?.created_at
        ).toLocaleDateString()} )`,

        user_id: singleOrder?.declaration?.user_id,
        type: "DECLARATION",
      }),
    },
    true
  );

  // * When user clicks "Confirmer"
  const [confirmOrder, { isLoading: isConfirmLoading, data: message }] =
    useFetch(
      `orders/${declarationId}/update`,
      {
        method: "PUT",
        body: JSON.stringify({
          status: "DONE",
        }),
      },
      true
    );

  useEffect(() => {
    if (data) {
      setOrders(data);
    }
  }, [isFetching]);

  useEffect(() => {
    if (checker) {
      createNotification();
      setSingleOrder({});
    }
  }, [createNotification]);

  const textConfirm = useMemo(() => i18n.t("menageDemend.confirm"), [i18n]);
  const textStartWay = useMemo(() => i18n.t("menageDemend.startWay"), [i18n]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {error ? (
          <Text>{error.message}</Text>
        ) : isLoading ? (
          <ActivityIndicator size="large" color="#ff00ff" />
        ) : orders ? (
          orders.length > 0 ? (
            orders.map((order) => (
              <EdgeCardOrder
                key={order.id}
                order={order}
                textAction={textConfirm}
                styleAction={styles.buttonLeft}
                onPressAction={async () => {
                  setModalVisible(true);
                  setDeclarationId(order.declaration_id);
                }}
                isLoading={isLoading}
                textAction2={
                  checker ? "Vous avez prenez la route" : textStartWay
                }
                styleAction2={styles.buttonRight}
                onPressAction2={async () => {
                  setSingleOrder(order);
                }}
                onPressEdit={() => console.log("Edit")}
              />
            ))
          ) : (
            <Text>No ACCEPTED order yet!</Text>
          )
        ) : null}
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image style={styles.iconImg} source={checkIcon} />
            <Text style={styles.popUpMsg}>
              Voulez-vous vraiment confirmer cette ordre ?
            </Text>
            <Text
              onPress={async () => {
                await confirmOrder();
                setDeclarationId(null);
                await refetch();
                setModalVisible(false);
              }}
              style={styles.confirmButon}
            >
              {isConfirmLoading ? (
                <ActivityIndicator color={"#fff"} size="small" />
              ) : (
                "Confirmer"
              )}
            </Text>

            <Text
              onPress={() => setModalVisible(false)}
              style={styles.noneButon}
            >
              Non
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
  TopCard: {
    backgroundColor: "white",
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
    color: "#A3A3A3",
    marginRight: 10,
  },
  headcontetIcon: {
    color: "#A3A3A3",
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
  butons: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonLeft: {
    backgroundColor: "#A3A3A3",
    padding: 9,
    borderRadius: 5,
    width: "40%",
    textAlign: "center",
    color: "white",
  },
  buttonRight: {
    backgroundColor: "#33CC66",
    padding: 9,
    borderRadius: 5,
    width: "50%",
    textAlign: "center",
    color: "white",
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
