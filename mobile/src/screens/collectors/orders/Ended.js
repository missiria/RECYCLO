import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import React,{useState,useEffect} from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import Icond from 'react-native-vector-icons/FontAwesome';
import i18n from "i18next";

import { useAPI } from "~/hooks/hooks";
import { EdgeCardOrder } from '~/ui/cards/EdgeCardOrder';

export default function Ended() {

  const [orders, setOrders] = useState([]);

  const { isLoading, error, data } = useAPI({
    url: 'orders',
    method: 'POST',
    data: {
      status: 'DONE'
    },
  },true);

  useEffect(() => {
    if (data !== null){
      setOrders(data);
    }
  }, [data]);

  return (
    <View style={styles.container}>
      <ScrollView>
      { error !== null ? <Text>{error.message}</Text> : 
          isLoading ? 
            <ActivityIndicator size="small" color="#ff00ff" />
          :
          orders != undefined && orders.map((order) => (
            <EdgeCardOrder key={order.id} order={order} onPressDelete={()=>{console.log("Delete")}} />
          )) 
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
})