import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState,useEffect } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { ProfileData } from './ProfileData'
import { getData } from "~/hooks/hooks";
import { DEFAULT_AVATAR_URL } from "~/api/constants"
import i18n from 'i18next';

export default function Profile({ navigation }) {

    const [user, setUser] = useState(null);

    useEffect(() => {
        if(user == null)
        {
          async function getCurrentUser(){
            setUser(await getData('user'));
          }
          getCurrentUser();
        }
    },[user]);

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.profileHeader}>
                    {user && user.account ? (
                        <Image
                            style={styles.profileImg}
                            source={{uri: user.account.avatar == null ? DEFAULT_AVATAR_URL: user.account.avatar}}
                        />
                      ) : null}
                    <Text style={styles.username}>
                        {user && user.fullName }
                    </Text>
                </View>
                <View style={styles.lingbreak}></View>
                <View style={styles.profileBody}>
                    {ProfileData.map(item => {
                        return (
                            <TouchableOpacity
                                onPress={() => navigation.navigate(item.goTo)}
                                key={item.id}
                                style={styles.profileBodyItem}>
                                <View style={styles.itemcardLleft}>
                                    <Icon
                                        style={styles.itemcardIcon}
                                        name={item.icon}
                                    />
                                    <Text style={styles.profileBodyItemText}>
                                        {item.title}
                                    </Text>
                                </View>
                                <Icon
                                    style={styles.itemcardIconArrow}
                                    name="arrowright"
                                />
                            </TouchableOpacity>
                        )
                    })}
                </View>
                <Text style={styles.textBottom}>
                    {i18n.t("profile.copyright")}
                </Text>
                <Text style={styles.textVersion}>
                    {i18n.t("profile.version")} 1.0.0
                </Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    profileHeader: {
        marginHorizontal: 20,
        alignSelf: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 50,
    },
    profileImg: {
        borderRadius: 50,
        width: 70,
        height: 70,
        borderWidth: 4,
        borderColor: 'white',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
    },
    username: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: 'center',
    },

    lingbreak: {

        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#e6e6e6',
    },
    profileBody: {

        marginTop: 20,
    },
    profileBodyItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,

    },
    itemcardLleft: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    itemcardIcon: {
        fontSize: 20,
        color: '#33CC66',
        marginRight: 10,
        fontWeight: 'bold',
    },
    itemcardIconArrow: {
        fontSize: 20,
        color: '#33CC66',
        fontWeight: 'bold',
    },
    profileBodyItemText: {
        fontSize: 13,
        fontWeight: 'bold',
    },

    textBottom: {
        fontSize: 10,
        color: '#7C7C7C',
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 20,
      },
      textVersion: {
        fontSize: 10,
        color: '#7C7C7C',
        marginBottom: 10,
        marginHorizontal: 20,
      },

})