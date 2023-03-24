import { View, Text, StyleSheet, Image, Alert,TouchableOpacity } from 'react-native'
import React from 'react';
// import Swipeout from 'react-native-swipeout';
import Icon from 'react-native-vector-icons/FontAwesome5';
import notificationIcon from "../../../assets/images/notif.png";

export default function NotificationProps({ title, time, date }) {

    //the swipe delete putton
    const swipeoutBtns = [
        {
            text: <Icon style={{ color: '#33CC66', fontSize: 20, }} name="trash" />,
            fontSize: 20,
            backgroundColor: 'transparent',
            color: 'red',
            underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
            onPress: () => Alert.alert("You Want To Delete " + title)
        }
    ]
    return (
        <TouchableOpacity >
            {/* <Swipeout
                backgroundColor='transparent'
                style={styles.container}
                autoClose={true} right={swipeoutBtns}>
            </Swipeout> */}
                <TouchableOpacity onPress={() => alert(title)} style={styles.notifiBoxCard}>
                    <View>
                        <Image
                            style={styles.iconNotifi}
                            source={notificationIcon}
                        />
                    </View>
                    <View >
                        <Text style={styles.textTitleNotif}>{title}</Text>
                        <View style={styles.boxdates}>
                            <Text style={styles.dateStyle}>{date}</Text>
                            <Text style={styles.timeStyle}>{time}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 1,

    },
    dateStyle : {
        marginRight: 13, 
        color: '#A3A3A3',
        fontSize: 10,
    },
    timeStyle : {
        color: '#A3A3A3',
        fontSize: 10,
    },
    headerSmallDescText: {
        fontSize: 14,
        marginTop: 6,
        fontWeight: '100'
    },
    notifiBoxCard: {
       
        flexDirection: 'row',
        paddingHorizontal: 10,
        padding: 5,
        backgroundColor: 'white',
        alignItems: 'center',
        shadowColor: "lightgray",
        shadowOffset: {
            width: 0,
            height: 21,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 5,
    },
    iconNotifi: {
        marginRight: 20,
        width: 40,
        height: 40,
    },
    textTitleNotif: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 12,
    },
    boxdates: {
        marginTop: 3,
        flexDirection: 'row',
        alignItems: 'center',
    }
})