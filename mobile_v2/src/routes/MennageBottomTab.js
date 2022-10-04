import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/menages/home/Home';
import Declarations from '../screens/menages/declarations/Declarations';
import Wallet from '../screens/menages/wallet/Wallet';
import Messages from '../screens/menages/messages/Messages';
import i18n from '../locales';
import homeLight from '../assets/images/home-out.png'
import homeBold from '../assets/images/home.png'
import demendOutline from '../assets/images/domendOut.png'
import demandeIcon from '../assets/images/demandde.png'
import portfOut from '../assets/images/portfOut.png'
import portf from '../assets/images/portf.png'
import messageOut from '../assets/images/messageOut.png'
import message from '../assets/images/message.png'
import { useIsFocused } from '@react-navigation/native';
import ProfileIcon from '../assets/images/profile-icon.png'


const Tab = createBottomTabNavigator();
export function MennageBottomTab({navigation}) {
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
                name='HomeTwo'
                component={Home}
            />
            <Tab.Screen
                name='DeclarationsIndex'
                component={Declarations}
                options={{
                    headerShown: true,
                    title: i18n.t("tapBarBottom.demandes"),
                    tabBarLabelStyle: {
                        transform: [{ scaleX: i18n.language == "ar" ? -1 : 1 }]
                    },
                    tabBarActiveTintColor: "#53C330",
                    headertitle: i18n.language == "fr" ? "Mes demandes" : "طلباتي",
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
                name='WalletIndex'
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
            <Tab.Screen
                name='Messages'
                component={Messages}
                options={{
                    headerShown: true,
                    headerTitle: i18n.language == "fr" ? 'Messages' : "الرسائل",
                    title: i18n.t("tapBarBottom.message"),
                    tabBarItemStyle: {
                        fontFamily: 'MetropoliceMedium',
                    },
                    tabBarActiveTintColor: "#53C330",
                    tabBarLabelStyle: {
                        transform: [{ scaleX: i18n.language == "ar" ? -1 : 1 }]
                    },
                    tabBarBadgeStyle: {
                        transform: [{ scaleX: i18n.language == "ar" ? -1 : 1 }]
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: '#262626',
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
                    tabBarBadge: 1,
                    tabBarIcon: ({ focused }) => (<Image style={styles.iconTab} source={focused ? message : messageOut} />)
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