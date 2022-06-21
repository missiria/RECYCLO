import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import QuesionsProps from './QuesionsProps';
import Icon from 'react-native-vector-icons/FontAwesome';
import {DeshetData} from  './FaqData';

export default function Deshets() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.titleHeader}>
          <Icon
            style={{ marginRight: 10, fontSize: 19 }}
            name="question-circle-o"
          />
          <Text style={{ fontSize: 19, fontWeight: 'bold' }}>
            Support d'aide
          </Text>
        </View>
        {DeshetData.map(data => {
          return(
            <QuesionsProps
              key={data.id} 
              q={data.q}
              a={data.a}
            />
          )
        })}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
    paddingHorizontal: 20
  },
  titleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom:20
  },
})