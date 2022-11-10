import { View, Text,ScrollView, StyleSheet, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Navbar from '../navigation/Navbar';
import FooterNav from '../navigation/FooterNav'
import NotificationProp from './NotificationProp';
import EmptyNotifi from './NotificationEmpty';
import { useFetch, useLoggedInUser } from '../../../hooks/hooks';


export default function CollectorNotification({navigation}) {
  // * GET notifications
  const { data } = useFetch("notifications/all", {
    method: "GET",
  });

  const emptyData = () => {
    if(data?.length === 0) {
        return(
            // if notification is empty 
            <EmptyNotifi />
        )
    }else {
        return(
            // if notifications is not empty
            data?.map(item => (
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