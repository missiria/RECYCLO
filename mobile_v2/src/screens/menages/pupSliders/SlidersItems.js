import { View, Text, StyleSheet, ImageBackground, useWindowDimensions } from 'react-native'
import React from 'react'

export default function SlidersItems({ item }) {
  const { width } = useWindowDimensions();
  return (
    <View >
      <View style={[styles.boxContainer, { width }]}>
        <ImageBackground 
          imageStyle={{ 
            borderRadius: 20,   
          
          }} 
          source={item.image} 
          resizeMode="contain" 
          style={styles.image}>
          <View>
            <Text style={styles.textTitle}>{item.title}</Text>
            <Text style={styles.contactButton}>Contactez nous</Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  boxContainer: {
    paddingHorizontal: 15,
     
  },
  image: {
    paddingLeft: 30,
    
    height: 150,
    display: 'flex',
    justifyContent: 'center',
    shadowColor: "lightgray",
    shadowOffset: {
      width: 100,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 15,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 6, 
  },
  textTitle: {
    color: '#A3A3A3',
    maxWidth: 120,
    fontSize: 14,
  },
  contactButton: {
    borderRadius: 50,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#33CC66',
    padding: 4,
    textAlign: 'center',
    maxWidth: 100,
    fontSize: 12,
    marginTop: 10,
    marginBottom: 29
  },

})


