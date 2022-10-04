import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Wallet from '../screens/menages/wallet/Wallet';
import i18n from '../locales';
import CollectorHome from '../screens/collectors/home/CollectorHome'
import homeLight from '../assets/images/home-out.png'
import homeBold from '../assets/images/home.png'
import demendOutline from '../assets/images/domendOut.png'
import demandeIcon from '../assets/images/demandde.png'
import portfOut from '../assets/images/portfOut.png'
import portf from '../assets/images/portf.png'
import { useIsFocused } from '@react-navigation/native';
import ProfileIcon from '../assets/images/profile-icon.png'
import ColectorOrders from '../screens/collectors/orders/ColectorOrders';


const Tab = createBottomTabNavigator();
export function CollectorBottomTab({navigation}) {
    const isFocused = useIsFocused();
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "red",
                headerShown: false,
                gestureEnabled: true,
                gestureDirection: 'horizontal',
                tabBarStyle: {
                    flexDirection: "row-reverse",
                    transform: [{ scaleX: i18n.language == "ar" ? -1 : 1 }],
                    height: 60,
                    paddingBottom: 6
                },
            }}>
            <Tab.Screen
                options={{
                    tabBarLabelStyle: {
                        transform: [{ scaleX: i18n.language == "ar" ? -1 : 1 }]
                    },
                    tabBarActiveTintColor: "#53C330",
                    title: i18n.t("tapBarBottom.home"),
                    tabBarIcon: ({ focused }) => (<Image style={styles.iconTab} source={focused ? homeBold : homeLight} />)
                }}
                name='HomeThree'
                component={CollectorHome}
            />
            <Tab.Screen
                name='ColectorOrders'
                component={ColectorOrders}
                options={{
                    headerShown: true,
                    // title: i18n.t("tapBarBottom.demandes"),
                    title : "Mes Ordres",
                    tabBarLabelStyle: {
                        transform: [{ scaleX: i18n.language == "ar" ? -1 : 1 }]
                    },
                    tabBarActiveTintColor: "#53C330",
                    headertitle: i18n.language == "fr" ? "Mes Ordres" : "طلباتي",
                    headerTitleAlign: 'center',
                    headerTintColor: '#000',
                    headerShadowVisible: false,
                    tabBarLabelStyle: {
                        transform: [{ scaleX: i18n.language == "ar" ? -1 : 1 }]
                    },
                    headerTitleStyle: {
                        color: '#53C330',
                        fontFamily: 'MetropoliceMedium',
                        letterSpacing: 0.5,
                        fontSize: 17,
                    },
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                            <Image
                                style={{ width: 25, height: 25, marginHorizontal:15 }}
                                source={ProfileIcon}
                            />
                        </TouchableOpacity>
                    ),
                    tabBarIcon: ({ focused }) => (<Image style={styles.iconTab} source={focused ? demandeIcon : demendOutline} />)

                }}
            />
            <Tab.Screen
                name='CollecttorWallet'
                component={Wallet}
                options={{
                    headerShown: true,
                    headerTitle: i18n.language == "fr" ? 'Portefeuille' : "محفظة",
                    title: i18n.t("tapBarBottom.transaction"),
                    tabBarItemStyle: {
                        fontFamily: 'MetropoliceMedium',
                    },
                    tabBarActiveTintColor: "#53C330",
                    tabBarLabelStyle: {
                        transform: [{ scaleX: i18n.language == "ar" ? -1 : 1 }]
                    },
                    headerTitleStyle: {
                        color: '#53C330',
                        fontFamily: 'MetropoliceMedium',
                        letterSpacing: 0.5,
                        fontSize: 17,
                    },
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                            <Image
                                style={{ width: 25, height: 25, marginHorizontal:15 }}
                                source={ProfileIcon}
                            />
                        </TouchableOpacity>
                    ),
                    headerTitleAlign: 'center',
                    headerTintColor: '#262626',
                    headerShadowVisible: false,
                    tabBarIcon: ({ focused }) => (<Image style={styles.iconTab} source={focused ? portf : portfOut} />)
                }}
            />
        </Tab.Navigator>
    )
}


const styles = StyleSheet.create({
    iconTab: {
        width: 20.02,
        height: 20,
        resizeMode: 'contain',
    },
    headerTitleStyle: {

    }
})