import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Components/homeComponents/Home';
import Profile from '../Components/profile/Profile';
import DrawerMenuItems from '../Components/NavsComponents/DrawerMenu';
const Drawer = createDrawerNavigator();


export default function DrawerMenu() {
    return (
        <NavigationContainer>
        <Drawer.Navigator initialRouteName='DrawerMenu'>
            <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
        </NavigationContainer>
    );
}