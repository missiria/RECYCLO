import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import i18next from "i18next";
import Config from "~/services/EKSNEKS.config";
import { getWithdrawals } from "./services/AllWithdrawals.services";

export default function AllWithdrawals() {
  // const { data: withdrawals } = useFetch("withdrawals", {});
  const [withdrawals, setWithdrawals] = useState([]);

  useEffect(() => {
    getWithdrawals(setWithdrawals);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {withdrawals?.map((transaction) => (
          <View style={styles.boxItem}>
            <Text style={{ fontWeight: "bold" }}>
              {!transaction.withdrawal_code
                ? i18next.t("wallet.via_wire")
                : i18next.t("wallet.via-gechet")}
            </Text>
            <View style={styles.AllWithdrawal}>
              <Text>
                {transaction.bank.bank_name} (
                {new Date(transaction.created_at).toLocaleDateString()})
              </Text>
              <Text style={styles.price}>
                {Config.currencyFormat(transaction.amount)}
              </Text>
            </View>
          </View>
        ))}
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
