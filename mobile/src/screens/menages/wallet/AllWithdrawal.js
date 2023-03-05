import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import i18next from "i18next";
import { useFetch } from "../../../hooks/hooks";
import Config from "~/services/EKSNEKS.config";

export default function AllWithdrawal() {
  const { data: withdrawals } = useFetch("withdrawals", {});
  console.log('data', withdrawals)
  return (
    <View style={styles.container}>
      <ScrollView>
        {withdrawals?.map((item) => (
          <View style={styles.boxItem}>
            <Text style={{ fontWeight: "bold" }}>
              {i18next.t("wallet.via-gechet")}
            </Text>
            <View style={styles.AllWithdrawal}>
              <Text>{new Date(item.created_at).toLocaleDateString()}</Text>
              <Text style={styles.price}>
                {Config.currencyFormat(item.amount)}
              </Text>
            </View>
          </View>
        ))}

        {/* TODO : We should fetch transactions from database */}
        <View style={styles.boxItem}>
          <Text style={{ fontWeight: "bold" }}>
            {i18next.t("wallet.via_app")}
          </Text>
          <View style={styles.AllWithdrawal}>
            <Text>18:22 18-04-2022</Text>
            <Text style={styles.price}>100.00 {i18next.t("wallet.dh")}</Text>
          </View>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  boxItem: {
    marginTop: 20,
    backgroundColor: "white",
    shadowColor: "#BAB9BC",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderRadius: 8,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 9,
    padding: 10,
    paddingHorizontal: 17,
    marginTop: 22,
    paddingVertical: 14,
    marginVertical: 5,
    marginHorizontal: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 20,
    marginHorizontal: 20,
  },
  AllWithdrawal: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  price: {
    color: "#33CC66",
    fontWeight: "bold",
  },
});
