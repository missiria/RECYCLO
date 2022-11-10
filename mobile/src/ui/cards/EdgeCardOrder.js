import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import Icond from "react-native-vector-icons/FontAwesome";
import i18n from "i18next";
import moment from "moment";

import { EdgeActionEdit } from "~/ui/buttons/EdgeActionEdit";
import { EdgeActionDelete } from "~/ui/buttons/EdgeActionDelete";

export function EdgeCardOrder({
  order,
  onPressEdit,
  onPressDelete,
  textAction,
  onPressAction,
  styleAction,

  textAction2,
  onPressAction2,
  styleAction2,
}) {

  const date = moment(order.created_at, moment.ISO_8601).format("DD-MM-YYYY");
  const time = moment(order.created_at, moment.ISO_8601).format("hh:mm");

  const type = order?.declaration?.collect?.collect_name;
  const qty = order.declaration.quantity;
  const price = order.declaration.collect?.point / 100;
  const total_order = price * qty;
  const frai = total_order * 0.1
  const total = total_order + frai;
  const client_name = order.declaration.user.fullName;

  const [details, setDetails] = useState(false);

  const showDetails = () => {
    setDetails(true);
  };

  const hideDetailse = () => {
    setDetails(false);
  };

  return (
    <View>
      <View style={styles.TopCard}>
        <View style={styles.cardHeader}>
          <View style={styles.cardHeaderLeft}>
            <Text style={styles.headcontetn}>{date}</Text>
            <Text style={styles.headcontetn}>{time}</Text>
          </View>
          {onPressEdit && <EdgeActionEdit onPress={onPressEdit} />}
          {onPressDelete && <EdgeActionDelete onPress={onPressDelete} />}
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
              name={details ? "chevron-thin-up" : "chevron-thin-down"}
            />
          </Text>
        </TouchableOpacity>

        <View style={details ? styles.contetnBody : styles.detailsHide}>
          <View style={styles.clientInfo}>
            <Text>{i18n.t("menageDemend.client")}</Text>
            <Text style={styles.clientsUsername}>{client_name}</Text>
          </View>
          <View style={styles.clientsDetails}>
            <Text>{i18n.t("menageDemend.type")}</Text>
            <Text>{type}</Text>
          </View>
          <View style={styles.clientsDetails}>
            <Text>{i18n.t("menageDemend.qty")}</Text>
            <Text>{qty} kg</Text>
          </View>
          <View style={styles.clientsDetails}>
            <Text>{i18n.t("menageDemend.price")}</Text>
            <Text>
              {price} {i18n.t("menageDemend.dh")}
            </Text>
          </View>
          <View style={styles.clientsDetails}>
            <Text>{i18n.t("menageDemend.fraiOfTransition")}</Text>
            <Text>
              {frai} {i18n.t("menageDemend.dh")}
            </Text>
          </View>
        </View>

        <View style={styles.cardBody}>
          <Text style={styles.textPay}>{i18n.t("menageDemend.dh-total")}</Text>
          <Text style={styles.textTotal}>
            {total} {i18n.t("menageDemend.dh")}
          </Text>
        </View>

        {(onPressAction || onPressAction2)
        && (<View style={styles.hr}></View>)}
        
        <View style={styles.buttons}>
          {onPressAction && (
            <Text style={[styles.action, styleAction]} onPress={onPressAction}>
              {textAction}
            </Text>
          )}
          {onPressAction2 && (
            <Text style={[styles.action, styleAction2]} onPress={onPressAction2}>
              {textAction2}
            </Text>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  },
  hr:{
    marginTop: 10,
    paddingTop: 2,
    paddingBottom: 2,
    borderBottomColor: "#A3A3A3",
    borderBottomWidth: 0.3,
  },
  textPay: {
    fontWeight: "bold",
  },
  textTotal: {
    color: "#5B68F6",
    fontWeight: "bold",
  },
  buton: {
    marginTop: 15,
    textAlign: "center",
    backgroundColor: "#5B68F6",
    borderRadius: 5,
    padding: 9,
    color: "white",
  },
  contetnBody: {
    justifyContent: "space-between",
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
  buttons:{    
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  action:{
    marginTop: 15,
    textAlign: 'center',
    borderRadius: 5,
    padding: 9
  },
});
