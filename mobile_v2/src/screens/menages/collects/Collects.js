import { View, Text, StyleSheet, Image } from 'react-native';
import React,{useState, useEffect} from 'react'
import { DataCategory } from './collectData';
import CollectItem from './CollectItem/CollectItem';
import CategoryIcon from "../../../assets/images/c.png"
import i18n from 'i18next';
import { useIsFocused } from "@react-navigation/native";

export default function Collects({ navigation }) {
    const [rtl, setRtl] = useState(false);
    const rtlBox = rtl && { flexDirection: 'row-reverse' };
    const rtlIcon = rtl && { marginRight:0, marginLeft:15 };
    const isFocused = useIsFocused();

    useEffect(() => {
        if(isFocused){ 
            if (i18n.language == "ar") {
                setRtl(true);
            } else {
                setRtl(false);
            }
        }
    }, [isFocused]);

    return (
        <View style={styles.container}>
            <View style={[styles.headerBox, rtlBox]}>
                <Image
                    style={[styles.categoryIcon, rtlIcon]}
                    source={CategoryIcon}
                />
                <View style={styles.textBox}>
                    <Text style={styles.boldTitle}>
                        {i18n.t("homeCategory.title")}
                    </Text>
                    <Text style={styles.smallDesc}>
                        {i18n.t("homeCategory.desc")}
                    </Text>
                </View>
            </View>
            <View style={[styles.cards, rtlBox]}>
                {DataCategory.map((categ) => {
                    return (
                        <CollectItem
                            navigation={navigation}
                            key={categ.id}
                            name={rtl ? categ.nameAr : categ.nameFr}
                            img={categ.img}
                        />
                    )
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerOne: {
        flex: 1,
        backgroundColor: 'white',
    },
    container: {
        marginHorizontal: 15,
        marginTop: 10,
    },
    cards: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginTop: 30,
        marginBottom: 10,
    },
    headerBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    card: {
        width: 164,
        marginLeft: -5,
        marginRight: -5,
        backgroundColor: 'white',
        marginBottom: 20,
        borderRadius: 5
    },
    cardImg: {
        width: "100%",
        resizeMode: "contain",
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 2,
        borderTopLeftRadius: 2,
    },
    cardBody: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "100%",
        padding: 10,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        shadowColor: "#495371",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 8,
        marginTop: -4
    },
    headerImg: {
        paddingRight: 15,
    },
    textBox: {
        marginTop: 20,
    },
    boldTitle: {
        color: 'black',
        fontSize: 17,
        fontFamily: 'MetropoliceSemiBold',
        letterSpacing: 0.5,
    },
    smallDesc: {
        color: "#A3A3A3",
        fontSize: 11,
        fontFamily: 'MetropoliceLight',
        marginTop: 5,
        letterSpacing: 0.5,
    },
    btnIconPlus: {
        color: '#12A5F0',
        fontSize: 23,
    },
    titleCateg: {
        color: 'black',
        fontWeight: 'bold'
    },
    categoryIcon: {
        width: 15.86,
        height: 16.55,
        marginRight: 10,
    },
})