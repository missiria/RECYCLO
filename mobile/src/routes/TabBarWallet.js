import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Transactions from "../screens/menages/wallet/Transactions";
import WithdrawalNotices from "../screens/menages/wallet/WithdrawalNotices";
import AllWithdrawals from "../screens/menages/wallet/AllWithdrawals";
import i18n from "i18next";

const Tab = createMaterialTopTabNavigator();

function TabBarWallet() {
  return (
    <Tab.Navigator
      initialRouteName="Wallet"
      screenOptions={{
        tabBarActiveTintColor: "#262626",
        tabBarLabelStyle: {
          fontSize: 10.6,
          fontWeight: "bold",
          color: "black",
        },
        tabBarIndicatorStyle: {
          backgroundColor: "#33CC66",
          height: 1.5,
        },
        tabBarPressColor: "#33CC66",
        swipeEnabled: true,
        tabBarBounces: false,
      }}
    >
      <Tab.Screen
        name="Transactions"
        component={Transactions}
        options={{ tabBarLabel: i18n.t("wallet.transaction") }}
      />

      <Tab.Screen
        name="Avis"
        component={WithdrawalNotices}
        options={{ tabBarLabel: i18n.t("wallet.avis") }}
      />

      <Tab.Screen
        name="allTransactions"
        component={AllWithdrawals}
        options={{ tabBarLabel: i18n.t("wallet.retrait") }}
      />
    </Tab.Navigator>
  );
}

export default TabBarWallet;
