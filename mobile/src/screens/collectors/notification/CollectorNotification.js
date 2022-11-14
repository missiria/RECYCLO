import { View, Text,ScrollView, StyleSheet, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Navbar from '../navigation/Navbar';
import FooterNav from '../navigation/FooterNav'
import NotificationProp from './NotificationProp';
import EmptyNotifi from './NotificationEmpty';
import { useFetch } from '../../../hooks/hooks';
import moment from 'moment';


export default function CollectorNotification({navigation}) {
  // * GET notifications
  const { data } = useFetch("notifications", {
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
                title={item.note}
                time={new Date(item.created_at).toLocaleDateString()}
                date={moment(item.created_at).fromNow()}
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