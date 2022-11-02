import { View, Text, Image, StyleSheet, TouchableOpacity,ScrollView, ActivityIndicator } from 'react-native'
import {useState,useEffect} from 'react';
import i18n from "i18next";
import DeclarationItem from './declarationItem/DeclarationItem';
import HeaderImage from "../../../assets/images/c.png";
import { FakeData } from './DeclarationFakeData'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { useAPI,useAsyncStorage } from "~/hooks/hooks";
import { useFetch } from '../../../hooks/hooks';

export default function Declaration({navigation}) {

    const [filterTime] = useAsyncStorage("filterTime","")
    const [filterTypeCollects] = useAsyncStorage("filterTypeCollects","-1");
    const [filterCity] = useAsyncStorage("filterCity","-1");
    const [filterPeroid] = useAsyncStorage("filterPeroid","-1");
    // * Declarations
    const [declarations, setDeclarations] = useState([]);
    const {data, isLoading} = useFetch("declarations", {
        method: 'POST',
        body: JSON.stringify({
            collect_id: filterTypeCollects,
            city_id: filterCity,
            time: filterTime,
            peroid: filterPeroid,
            status: 'PENDING'
        })
    })

    useEffect(() => {
      if (data !== null){
        setDeclarations(data);
      }
    }, [isLoading]);


    console.log("declarations >>", declarations);

    return (
        <View style={styles.container}>
            <View style={styles.headerHome}>
                <View style={styles.headerBox}>
                    <View style={styles.headerImg}>
                        <Image source={HeaderImage} />
                    </View>
                    <View style={styles.textBox}>
                        <Text style={styles.boldTitle}>Déclarations des déchets</Text>
                        <Text style={styles.smallDesc}>Cliquez pour collecter les déchets </Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("Filter")} style={styles.btnFilter}>
                    <Icon
                        style={styles.iconFilter}
                        name='filter-list-alt'
                    />
                </TouchableOpacity>
            </View>
            <ScrollView>
                {!data && !isLoading ? <Text>{"Une erreur est servenue "}</Text> : 
                    isLoading ? 
                        <ActivityIndicator size="small" color="#ff00ff" />
                    :
                    declarations && declarations?.map((declaration) => (
                        <DeclarationItem
                            key={declaration.id}
                            navigation={navigation}
                            declaration={declaration}
                        />
                    )) 
                    
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    containerOne: {
        flex: 1,
        backgroundColor: "white",
    },
    headerHome : {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    container: {
        marginHorizontal: 15,
        marginTop: 25,
    },
    headerBox: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    headerImg: {
        paddingRight: 15,
    },
    textBox: {
        marginTop: 11,
    },
    boldTitle: {
        color: "black",
        fontWeight: "bold",
        fontSize: 20,
    },
    smallDesc: {
        color: "#7C7C7C",
        fontSize: 11,
    },
    btnFilter : {
        backgroundColor:'#E5E5E5',
        padding: 6,
        borderRadius:5,
    },
    iconFilter : {
        fontSize:15
    },
})