import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import Deshets from '../screens/faq/Deshets'
import Paiments from '../screens/faq/Paiments'
import Services from '../screens/faq/Services'
import Triage from '../screens/faq/Triage'

const Tab = createMaterialTopTabNavigator();

function FqaTabBar() {
    return (
        <Tab.Navigator
            initialRouteName='FAQ'
            screenOptions={{
                tabBarStyle : {
                    backgroundColor: '#8D97A8', 
                },
                tabBarLabelStyle: {
                    fontSize: 10.6,
                    fontWeight: 'bold',
                    color: 'white',
                },
                tabBarIndicatorStyle: {
                    backgroundColor: '#33CC66',
                    height: 5,  
                },
                lazy:true,
                tabBarPressColor: 'gray',
                swipeEnabled: true,
                tabBarBounces: false
            }}

        >

            <Tab.Screen
                name="Paiments"
                component={Paiments}
                options={{ tabBarLabel: "Paiments" }}
            />
            <Tab.Screen
                name="Services"
                component={Services}
                options={{ tabBarLabel: "Services" }}
            />

            <Tab.Screen
                name="Deshets"
                component={Deshets}
                options={{ tabBarLabel: "Déshets" }}
            />

            <Tab.Screen
                name="Triage"
                component={Triage}
                options={{ tabBarLabel: "Triage" }}
            />
        </Tab.Navigator>
    )
}

export default FqaTabBar;