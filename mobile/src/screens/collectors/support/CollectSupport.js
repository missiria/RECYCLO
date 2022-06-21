import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import headphone from '../../../assets/images/he.png'
import mail from '../../../assets/images/mi.png'

export default function CollectSupport({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerBoxTwo}>
        <Text style={{ textAlign: 'center', }}>
          A propos de Recycloo
        </Text>
        <View>
          <View style={styles.headphoneBox}>
            <Image
              style={{ marginRight: 43 }}
              source={headphone}
            />
            <Text style={{ color: 'white', fontWeight: 'bold', }}>Appelez-nous</Text>
          </View>
          <View style={styles.mailBox}>
            <Image
              style={{ marginRight: 43 }}
              source={mail}
            />
            <Text style={{ color: 'white', fontWeight: 'bold', }}>Ecrivez -nous</Text>
          </View>
        </View>
        <Text 
          onPress={() => navigation.navigate("Terms")} 
          style={{ textAlign: 'center', marginTop: 35 }}>
          Termes & Conditons
          </Text>
        <Text 
          onPress={() => navigation.navigate("Politique")} 
          style={{ textAlign: 'center', marginTop: 13 }}>
          Politique De Confidentialité
          </Text>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headphoneBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C4C4C4',
    padding: 5,
    borderRadius: 50,
    width: 220,
    marginTop: 20,
  },
  mailBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#33CC66',
 
    padding: 5,
    borderRadius: 50,
    width: 220,
    marginTop: 10,
  },
  containerBoxTwo : {
    justifyContent:'center',
  },
})