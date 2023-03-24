import {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Icon from 'react-native-vector-icons/Entypo';
import Icond from 'react-native-vector-icons/FontAwesome';
import i18n from "i18next";
import moment from "moment";

import { EdgeActionCancel } from "~/ui/buttons/EdgeActionCancel";
import { EdgeActionDelete } from "~/ui/buttons/EdgeActionDelete";

export function EdgeCardDemande({declaration,onPressCancel,onPressDelete,textAction,onPressAction,styleAction}) {

    const date = moment(declaration.created_at, moment.ISO_8601).format('DD-MM-YYYY');
    const time = moment(declaration.created_at, moment.ISO_8601).format('hh:mm');
    const type = declaration?.collect?.collect_name;
    const qty = declaration?.quantity;
    const price = (declaration?.collect?.point ?? declaration.price) /100;
    const total = price * qty;
    const points = total * 100;

    const [details, setDetails] = useState(false);

    const showDetails = () => {
        setDetails(true);
    }

    const hideDetailse = () => {
        setDetails(false);
    }
    
    return (
        <View>
            <View style={styles.TopCard}>
                <View style={styles.cardHeader}>
                    <View style={styles.cardHeaderLeft}>
                    <Text style={styles.headcontetn}>
                        {date}
                    </Text>
                    <Text style={styles.headcontetn}>
                        {time}
                    </Text>
                    </View>
                    {onPressCancel && <EdgeActionCancel onPress={onPressCancel}/> }
                    {onPressDelete && <EdgeActionDelete onPress={onPressDelete}/> }
                </View>

                <TouchableOpacity 
                    onPress={details ? hideDetailse : showDetails } 
                    style={styles.cardcenter}
                >
                    <Text style={styles.detailText}>
                    {i18n.t("menageDemend.details")}
                    </Text>
                    <Text>
                    <Icon
                        style={styles.detailIcon}
                        name={details ? 'chevron-thin-up' : 'chevron-thin-down'}
                    />
                    </Text>
                </TouchableOpacity>

                <View style={details ? styles.contetnBody : styles.detailsHide}>
                    <View style={styles.clientInfo}>
                    <Text>
                        {i18n.t("menageDemend.type")}
                    </Text>
                    <Text>
                        {type}
                    </Text>
                    </View>
                    <View style={styles.clientsDetails}>
                    <Text>
                    {i18n.t("menageDemend.qty")}
                    </Text>
                    <Text>{qty} kg</Text>
                    </View>
                    <View style={styles.clientsDetails}>
                    <Text>
                    {i18n.t("menageDemend.price")}
                    </Text>
                    <Text>{price} Dh</Text>
                    </View>
                    <View style={styles.breakLineMini}></View>
                    <View style={styles.clientsDetails}>
                    <Text style={styles.clientsUsername}>
                    {i18n.t("menageDemend.dh-total")}
                    </Text>
                    <Text style={styles.dirh}>{total} {i18n.t("menageDemend.dh")}</Text>
                    </View>
                </View>

                <View style={styles.cardBody}>
                    <Text style={styles.textPay}>
                    {i18n.t("menageDemend.total")}
                    </Text>
                    <Text style={styles.textTotal}>
                    {points}
                    </Text>
                </View>
                {
                    onPressAction && 
                    <Text style={[styles.action,styleAction]} onPress={onPressAction}>
                        {textAction}
                    </Text>
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    TopCard:{
        backgroundColor: 'white',
        shadowColor: "gray",
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
        elevation: 17,
        borderRadius: 10,
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 20,
        padding: 20,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    cardHeaderLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headcontetn: {
        color: '#A3A3A3',
        marginRight: 10
    },
    cardcenter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 26,
        paddingBottom: 15,
        borderBottomColor: '#A3A3A3',
        borderBottomWidth: 0.3,
    },
    detailText: {
        fontWeight: 'bold'
    },
    detailIcon: {
        fontSize: 14,
    },
    contetnBody:{
        marginTop:12,
        justifyContent: 'space-between',
        marginTop: 15,
        paddingBottom: 15,
        borderBottomColor: '#A3A3A3',
        borderBottomWidth: 0.3,
    },
    detailsHide:{
        display: 'none'
    },
    clientInfo:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
    },
    clientsDetails:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        marginTop:15,
    },
    breakLineMini:{
        width: "100%",
        borderColor:'#A3A3A3',
        borderStyle: 'dashed',
        borderWidth: 0.2,
        marginTop: 15,
    },
    clientsUsername:{
        fontWeight:'bold',
    },
    dirh:{
        color: '#33CC66',
        fontWeight: 'bold',
    },
    cardBody:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 15,
        paddingBottom: 15,
        borderBottomColor: '#A3A3A3',
        borderBottomWidth: 0.3,
    },
    textPay:{
        fontWeight: 'bold',
    },
    textTotal:{
        color: '#33CC66',
        fontWeight: 'bold',
        fontSize:17,
    },
    action:{
        marginTop: 15,
        textAlign: 'center',
        borderRadius: 5,
        padding: 9
    }
});
