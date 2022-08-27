import { View, Text, ScrollView, StyleSheet, SafeAreaView, Image }  from 'react-native'
import React from 'react';
import EditProfileProp from './profileProps/EditProfileProp';

export default function EditProfile({navigation}) {
  return (
    <SafeAreaView  style={styles.container}>
      <ScrollView>
          <View style={{ marginHorizontal:20,marginTop:30 }}>
              <Text style={styles.textTileBold}>Détails du profil</Text>
              <Text style={{ color:'#7C7C7C' }}>modifiez les détails suivants et enregistrez-les</Text>
          </View>
          <EditProfileProp navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : 'white',
    },
    textTileBold : { fontSize:20,color:'black',fontWeight:'bold' },
})