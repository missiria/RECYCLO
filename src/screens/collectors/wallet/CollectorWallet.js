import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import React, { useCallback } from "react";
import FooterNav from "../navigation/FooterNav";
import Icon from "react-native-vector-icons/AntDesign";
import poser from "../../../assets/images/poser.png";
import i18n from "i18next";
import { useFetch } from "../../../hooks/hooks";
import moment from "moment";
import Config from "~/services/EKSNEKS.config";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function CollectorWallet({ navigation }) {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  // * get balance
  const { data, isLoading } = useFetch("wallet/balance", {
    method: "GET",
  });

  const { data: transactions, isLoading: isTransactionsLoading } = useFetch(
    "payment/transactions",
    {
      method: "GET",
    }
  );

  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View>
          <View style={styles.cardTop}>
            <Text style={styles.textBtm}>Solde actuel</Text>
            <View style={styles.cartWrapper}>
              <View style={styles.priceBox}>
                <Text style={styles.price}>
                  {isLoading ? "Chargement..." : 2000.0}
                </Text>
                <Text style={styles.dh}>Dhs</Text>
              </View>
              <View style={styles.ben}>
                <Text style={styles.bene}>Bénéfice</Text>
                <Icon style={styles.iconUp} name="caretup" />
                <Text style={styles.counter}>2,35%</Text>
              </View>
            </View>
          </View>

          <View style={styles.boxs}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Deposit", {
                  action: "DEPOSIT",
                  amount: data?.amount,
                })
              }
              style={styles.box}
            >
              <Image style={styles.iconTop} source={poser} />
              <Text style={styles.boxText}>
                {i18n.t("collectorWallet.deposer")}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate("CollectorTypeTransfer", {
                  action: "TRANSFER",
                  amount: data?.amount,
                })
              }
              style={styles.box}
            >
              <Image style={styles.iconTop} source={poser} />
              <Text style={styles.boxText}>
                {i18n.t("collectorWallet.retirer")}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("Statistics")}
              style={styles.box}
            >
              <Image style={styles.iconTop} source={poser} />
              <Text style={styles.boxText}>
                {i18n.t("collectorWallet.chart")}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.breakLine}></View>
          <View>
            <Text style={styles.transactionTitle}>Mes transactions</Text>
          </View>
          <View style={styles.bodyScreenCardsBox}>
            {transactions?.map((transaction) => (
              <>
                <TouchableOpacity style={styles.bodyBoxCard}>
                  <View style={styles.boxContentLeft}>
                    <View>
                      <Image source={poser} style={styles.iconBody} />
                    </View>
                    <View>
                      <Text style={styles.cardTitle}>
                        {transaction?.action === "TRANSFER"
                          ? "Transfer"
                          : transaction?.action === "DEPOSIT"
                          ? "Versement"
                          : "Guichet"}
                      </Text>
                      <View style={styles.textDateTime}>
                        <Text style={styles.date}>
                          {new Date(
                            transaction?.created_at
                          ).toLocaleDateString()}
                        </Text>
                        <Text style={styles.date}>
                          {moment(transaction?.created_at).fromNow()}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.boxContentRight}>
                    <Text
                      style={
                        transaction?.action === "TRANSFER"
                          ? styles.boxPriceGreen
                          : styles.boxPriceBlue
                      }
                    >
                      {transaction?.action === "TRANSFER"
                        ? "+"
                        : transaction?.action === "DEPOSIT"
                        ? "-"
                        : "+"}{" "}
                      {Config.currencyFormat(transaction?.amount)}
                    </Text>
                  </View>
                </TouchableOpacity>
                <View style={styles.miniBreakLine}></View>
              </>
            ))}
          </View>
        </View>
      </ScrollView>
      <FooterNav navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  textBtm: {
    color: "white",
  },
  cardTop: {
    marginHorizontal: 20,
    backgroundColor: "#33CC66",
    borderRadius: 5,
    padding: 10,
  },
  cartWrapper: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceBox: {
    alignItems: "flex-end",
    flexDirection: "row",
  },

  price: {
    marginRight: 5,
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
  },

  dh: {
    color: "white",
    fontWeight: "bold",
  },
  ben: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.28)",
    padding: 4,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  bene: {
    fontSize: 11,
    color: "white",
    marginRight: 5,
  },
  iconUp: {
    color: "white",
    fontSize: 10,
    marginRight: 5,
  },
  counter: {
    fontSize: 10,
    color: "white",
    marginRight: 5,
  },
  boxs: {
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 20,
  },
  iconTop: {
    width: 50,
    height: 50,
  },
  box: {
    flexDirection: "column",
    alignItems: "center",
  },
  boxText: {
    textAlign: "center",
    fontSize: 12,
  },
  breakLine: {
    marginTop: 20,
    height: 10,
    width: "100%",
    backgroundColor: "#F8F8F8",
  },
  transactionTitle: {
    marginHorizontal: 20,
    marginTop: 20,
    fontWeight: "bold",
    color: "black",
    fontSize: 17,
  },
  bodyScreenCardsBox: {
    marginTop: 15,
    marginHorizontal: 20,
  },
  bodyBoxCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 15,
  },
  boxContentLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  textDateTime: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconBody: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  cardTitle: {
    color: "black",
    fontWeight: "bold",
  },
  date: {
    color: "#A3A3A3",
    marginRight: 15,
    fontSize: 11,
    marginTop: 9,
  },
  boxPriceGreen: {
    color: "#33CC66",
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 5,
  },
  boxPriceBlue: {
    color: "#5B68F6",
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 5,
  },
  miniBreakLine: {
    marginTop: 20,
    height: 1,
    width: "100%",
    backgroundColor: "#E5E5E5",
  },
});
