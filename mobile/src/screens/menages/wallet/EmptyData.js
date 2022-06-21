import { View, Text } from 'react-native'
import React from 'react'

export default function EmptyData(props) {
  return (
    <View style={{ marginHorizontal:20 }}>
      <Text style={{ fontWeight:'bold',fontSize:20,marginTop:20 }}>{props.title}</Text>
      <Text style={{ color:'#7C7C7C' }}>{props.desc}</Text>
    </View>
  )
}
