import { View, Text,ScrollView, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import Navbar from '../navigation/Navbar';
import FooterNav from '../navigation/FooterNav'
import NotificationProp from './NotificationProp';
import { Data } from '../../menages/notifications/NotificationTestFakeData';
import EmptyNotifi from './NotificationEmpty';


export default function CollectorNotification({navigation}) {
  const emptyData = () => {
    if(Data.length <= 0) {
        return(
            // if notification is empty 
            <EmptyNotifi />
        )
    }else {
        return(
            // if notifications is not empty
            Data.map(item => (
              <NotificationProp 
                title={item.title}
                time={item.time}
                date={item.date}
              />  
            ))
        )
    }
}
return (
<SafeAreaView style={styles.container}>
        <Navbar title="Notifications"  navigation={navigation} />
            <ScrollView>
                {emptyData()}
            </ScrollView>
        <FooterNav navigation={navigation} />
    </SafeAreaView>
)}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'white',
  },
})