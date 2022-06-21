import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import i18n from "i18next";

import InProgress from '../screens/menages/declarations/InProgress';
import Accepted from '../screens/menages/declarations/Accepted';
import Ended from '../screens/menages/declarations/Ended';
import Canceled from '../screens/menages/declarations/Canceled'

const Tab = createMaterialTopTabNavigator();

function MenageDeclarationsTab() {
    return (
        <Tab.Navigator
            initialRouteName='DeclarationsIndex'
            screenOptions={{
                tabBarStyle: {
                    borderTopWidth: 0,
                    elevation: 0,
                },
                tabBarActiveTintColor: '#262626',
                tabBarLabelStyle: {
                    fontSize: 10.6,
                    color: 'black',
                },
                tabBarIndicatorStyle: {
                    backgroundColor: '#33CC66',
                    height: 3,
                },
                tabBarPressColor: '#33CC66',
                swipeEnabled: true,
                tabBarBounces: false,
            }}

        >

            <Tab.Screen
                name="InProgress"
                component={InProgress}
                options={{ tabBarLabel: i18n.t("menageDemend.inProgress") }}
            />

            <Tab.Screen
                name="Accepted"
                component={Accepted}
                options={{ tabBarLabel: i18n.t("menageDemend.accepted") }}
            />

            <Tab.Screen
                name="Ended"
                component={Ended}
                options={{ tabBarLabel: i18n.t("menageDemend.finished") }}
            />

            <Tab.Screen
                name="Candeled"
                component={Canceled}
                options={{ tabBarLabel: i18n.t("menageDemend.canceled") }}
            />
        </Tab.Navigator>
    )
}

export default MenageDeclarationsTab;