import { View, Text, ScrollView, StyleSheet, SafeAreaView, TextInput } from 'react-native'
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Message({ navigation }) {
  const [newMessage, setNewMessage] = useState(null);
  const [sendMsgDate, setSendMsgDate] = useState("Bonjours");

  const sendTheMsg = () => {
    setSendMsgDate(newMessage);
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View >
          <Text style={styles.sendMsgDate}>Mar, 09:46 AM</Text>
          <View style={styles.allMessagesBox}>
            <View>
              <Text style={styles.userMessage}>
                {sendMsgDate}
              </Text>
            </View>
            <View>
              <Text style={styles.suportMessage}>
                Salut Hassan, je suis Ali, je
                ferai de mon mieux pour
                répondre à vos questions 😊
                Comment est-ce que je peux
                vous aider aujourd'hui ?
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.messageBox}>
        <TextInput
          style={styles.messageInput}
          value={newMessage}
          onChangeText={setNewMessage}
          placeholder="Envoyer un message"
        />
        <Icon
          onPress={sendTheMsg}  
          style={styles.messageIcon}
          name="send"
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  messageBox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: "100%",
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17,
  },
  messageInput: {
    flex: 1,
    padding: 15,
    paddingLeft: 40,
  },
  messageIcon: {
    color: '#33CC66',
    fontSize: 25,
    marginRight: 20,
  },
  sendMsgDate: {
    color: '#909090',
    textAlign: 'center',
    marginTop: 20,
  },
  allMessagesBox: {
    marginTop: 30,
  },
  userMessage: {
    display: 'flex',
    alignSelf: 'flex-end',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginHorizontal: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    color: 'white',
    backgroundColor: '#33CC66',
    padding: 10,
    height: 'auto',
    fontSize: 18,
    paddingHorizontal: 40,
  },
  suportMessage: {
    display: 'flex',
    alignSelf: 'flex-start',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginHorizontal: 20,
    marginRight: 50,
    borderRadius: 15,
    marginTop: 25,
    color: 'black',
    backgroundColor: '#ECECEC',
    padding: 20,
    height: 'auto',
    fontSize: 15,

  },
})