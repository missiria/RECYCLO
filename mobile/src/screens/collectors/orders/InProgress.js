import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import React,{useState,useEffect} from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import Icond from 'react-native-vector-icons/FontAwesome';
import i18n from "i18next";

import { useAPI } from "~/hooks/hooks";
import { EdgeCardOrder } from '~/ui/cards/EdgeCardOrder';
import { useFetch } from '../../../hooks/hooks';

export default function InProgress() {
  
  const [orders, setOrders] = useState([]);
  console.log(orders)
  const { isLoading, error, data } = useAPI({
    url: 'orders',
    method: 'POST',
    data: {
      status: 'PENDING'
    },
  },true);

  console.log(data)

  // * Cancel Order
  const [trigger, { data: message, isLoading: isOrderUpdateLoading }] = useFetch(undefined, {
    method: "PUT",
    body: JSON.stringify({
      status: "CANCELED"
    })
  }, true)

  console.log(message);

  useEffect(() => {
    if (data !== null){
      setOrders(data);
    }
  }, [isLoading]);
  
  const textAction = i18n.t("menageDemend.notReady");

  return (
    <View style={styles.container}>
      <ScrollView>
      { error !== null ? <Text>{error.message}</Text> : 
          isLoading ? 
            <ActivityIndicator size="small" color="#ff00ff" />
          :
          orders?.length !==0 && orders?.map((order) => (
            <EdgeCardOrder 
              key={order.id} 
              order={order} 
              textAction={textAction} 
              styleAction={styles.actionNotReady} 
              onPressAction={() => trigger(`orders/${order.declaration_id}/update`)} 
              onPressEdit={() => {console.log("Edit")}} 
            />
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
  },
  actionNotReady:{
    backgroundColor: '#5B68F6',
    color:'#fff'
  }
})