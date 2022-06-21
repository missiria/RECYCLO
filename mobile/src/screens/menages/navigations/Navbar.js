// import 'react-native-gesture-handler';
import { View, Text, StyleSheet,ScrollView,Image,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import IconIon from 'react-native-vector-icons/Ionicons';
import { useNavigationState } from '@react-navigation/native';
import iconUser from '../../../assets/images/user.png'

export default function Navbar({ navigation,title }) {
  const [showSidebar, setshowSidebar] = useState(false);
  const screenName = useNavigationState((state) => state.routes[state.index].name)
  
  return (
    <View style={styles.container}>
      <View style={styles.navBar} >
        <TouchableOpacity     
          onPress={() => navigation.navigate("Profile")}
        >
            <Image 
              source={iconUser}
              style={styles.userImg}
            />
        </TouchableOpacity>

        <View>
          <Text style={styles.titleNav}>
            {title ? title : "RECYCLOO"}
          </Text>
        </View>

        <View>
          <Text onPress={() => navigation.navigate("Notifications")}>
            <IconIon
              style={styles.notifiIcon}
              name={screenName == "Notifications" ? "notifications" : "ios-notifications-outline"}
              size={20}
              color="#000000"
            />
          </Text>
          <Text style={styles.notifiCount}>
            2
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  navBar: {
    paddingTop: 41,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 10,
    marginHorizontal:5
  },
  notifiIcon: {
    fontWeight: '900',
    color: '#000000',
    fontSize: 25,
  },
  navIcon: {
    fontWeight: '100',
    color: '#000000',
  },
  titleNav: {
    color: '#33CC66',
    fontWeight: 'bold',
    fontSize: 15,
  },
  notifiCount: {
    backgroundColor: 'red',
    fontWeight: 'bold',
    width: 16,
    height: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 50,
    color: 'white',
    position: 'absolute',
    top: -3,
    left: 14,
    fontSize: 12,
  },
  userImg : {
    width: 30,
    height: 30,
  },
});