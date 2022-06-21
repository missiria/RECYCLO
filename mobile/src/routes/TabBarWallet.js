import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import Historique from '../screens/menages/wallet/Historique';
import WithdrawalNotices from '../screens/menages/wallet/WithdrawalNotices';
import AllWithdrawal from '../screens/menages/wallet/AllWithdrawal';
import i18n from "i18next";

const Tab = createMaterialTopTabNavigator();

function TabBarWallet() {
    return (
        <Tab.Navigator
            initialRouteName='Wallet'
            screenOptions={{
                tabBarActiveTintColor: '#262626',
                tabBarLabelStyle: {
                    fontSize: 10.6,
                    fontWeight: 'bold',
                    color: 'black'
                },
                tabBarIndicatorStyle: {
                    backgroundColor: '#33CC66',
                    height: 1.5
                },
                tabBarPressColor: '#33CC66',
                swipeEnabled: true,
                tabBarBounces: false
            }}

        >

            <Tab.Screen
                name="Historique"
                component={Historique}
                options={{ tabBarLabel: i18n.t("wallet.transaction") }}
            />

            <Tab.Screen
                name="Avis"
                component={WithdrawalNotices}
                options={{ tabBarLabel: i18n.t("wallet.avis") }}
            />

            <Tab.Screen
                name="AllRetrait"
                component={AllWithdrawal}
                options={{ tabBarLabel: i18n.t("wallet.retrait") }}
            />
        </Tab.Navigator>
    )
}

export default TabBarWallet;