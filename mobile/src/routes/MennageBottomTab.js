import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MenageHome from '../screens/menages/home/MenageHome';
import Declarations from '../screens/menages/declarations/Declarations';
import Wallet from '../screens/menages/wallet/Wallet';
import Messages from '../screens/menages/supports/Message';
import homeLight from '../assets/images/home-out.png'
import homeBold from '../assets/images/home.png'
import demendOutline from '../assets/images/domendOut.png'
import demandeIcon from '../assets/images/demandde.png'
import portfOut from '../assets/images/portfOut.png'
import portf from '../assets/images/portf.png'
import messageOut from '../assets/images/messageOut.png'
import message from '../assets/images/message.png'
import { useIsFocused } from '@react-navigation/native';
import ProfileIcon from '../assets/images/user.png'


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
                    height: 60,
                    paddingBottom: 6
                },
            }}>
            <Tab.Screen
                options={{
                    tabBarActiveTintColor: "#53C330",
                    title: "Principale",
                    tabBarIcon: ({ focused }) => (<Image style={styles.iconTab} source={focused ? homeBold : homeLight} />)
                }}
                name='HomeMenage'
                component={MenageHome}
            />
            <Tab.Screen
                name='DeclarationsIndex'
                component={Declarations}
                options={{
                    headerShown: true,
                    title: "Mes demandes",
                    tabBarActiveTintColor: "#53C330",
                    headertitle: "Mes demandes",
                    headerTitleAlign: 'center',
                    headerTintColor: '#000',
                    headerShadowVisible: false,
                    headerTitleStyle: {
                        color: '#53C330',
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
                    headerTitle: "Portefeuille",
                    title: "Portefeuille",
                    tabBarItemStyle: {
                    },
                    tabBarActiveTintColor: "#53C330",
                    headerTitleStyle: {
                        color: '#53C330',
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
                name='Message'
                component={Messages}
                options={{
                    headerShown: true,
                    headerTitle: "Messages",
                    title: "Messages",
                    tabBarItemStyle: {
                    },
                    tabBarActiveTintColor: "#53C330",
                    headerTitleAlign: 'center',
                    headerTintColor: '#262626',
                    headerTitleStyle: {
                        color: '#53C330',
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