import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import i18n from "i18next";

import InProgress from '../screens/collectors/orders/InProgress';
import Accepted from '../screens/collectors/orders/Accepte/Accepted';
import Ended from '../screens/collectors/orders/Ended';
import Canceled from '../screens/collectors/orders/Canceled'

const Tab = createMaterialTopTabNavigator();

function ColectorOrdersTab() {
    return (
        <Tab.Navigator
            initialRouteName='ColectorOrdersTab'
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
                options={{ tabBarLabel: i18n.t('collectorOrderTab.inProgress') }}
            />

            <Tab.Screen
                name="Accepted"
                component={Accepted}
                options={{ tabBarLabel: i18n.t('collectorOrderTab.accept')  }}
            />

            <Tab.Screen
                name="Ended"
                component={Ended}
                options={{ tabBarLabel: i18n.t('collectorOrderTab.finished') }}
            />

            <Tab.Screen
                name="Candeled"
                component={Canceled}
                options={{ tabBarLabel: i18n.t('collectorOrderTab.canceld') }}
            />
        </Tab.Navigator>
    )
}

export default ColectorOrdersTab;