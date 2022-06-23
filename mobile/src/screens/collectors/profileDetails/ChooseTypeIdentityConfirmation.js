import {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import React,{useState} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';


export default function ChooseTypeIdentityConfirmation({navigation}) {
    const [selectedIdentity, setSelectedIdentity] = useState("cin");  // cin or permis

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.containerBoxTwo}>
                    <Image
                        style={styles.img}
                        source={require('../../../assets/images/contact.png')}
                    />
                    <Text style={styles.boldText}>
                        Vérifiez votre identité
                    </Text>
                    <Text style={styles.lightText}>
                        Choisissez votre document pour vérifier votre identité
                    </Text>
                    <View style={styles.chousesOptions}>
                        <TouchableOpacity 
                            onPress={() => setSelectedIdentity("cin")}
                            style={
                                selectedIdentity === "cin" ? 
                                styles.activeOptionsItem : styles.chousesOptionsItem
                            }>
                            <Icon
                                style={
                                    selectedIdentity === "cin" ? 
                                    styles.activeicon : styles.icon
                                }
                                name="id-card-o"
                            />
                            <Text style={
                                selectedIdentity === "cin" ? 
                                styles.ActivechousesOptionsItemText : styles.chousesOptionsItemText
                            }>
                                Carte d'identité
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            onPress={() => setSelectedIdentity("permis")}
                            style={
                                selectedIdentity === "permis" ?
                                styles.activeOptionsItem : styles.chousesOptionsItem
                            }>
                            <Icon
                                style={
                                    selectedIdentity === "permis" ?
                                    styles.activeicon : styles.icon
                                }
                                name="id-card-o"
                            />
                            <Text style={
                                selectedIdentity === "permis" ?
                                styles.ActivechousesOptionsItemText : styles.chousesOptionsItemText
                            }>
                                Permis de conduite
                            </Text>
                        </TouchableOpacity>

                    </View>
                    <Text 
                        onPress={ () => navigation.navigate('UploadIdentity',{typeIdentity:selectedIdentity})}
                        style={styles.button}>
                        Valider
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    containerBoxTwo: {
        marginHorizontal: 20,
         
    },
    img: {
        width: "100%",
        height: 100,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 50,
    },
    boldText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: '5%',
        textAlign: 'center',
        marginTop: 35,
    },
    lightText: {
        fontSize: 15,
        marginBottom: '5%',
        color: '#7C7C7C',
        textAlign: 'center',
        fontWeight: '100',
    },
    chousesOptions: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginTop: 30,
    
    },
    chousesOptionsItem: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#F8F8F8',
        padding: 15,
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    chousesOptionsItemText: {
        fontSize: 15,
        marginLeft: 10,
        color:'#828282'
    },
    icon: {
        fontSize: 18,
        color: '#828282',
    },
    button: {
        marginTop: '15%',
        color: 'white',
        backgroundColor: '#4ECB71',
        textAlign: 'center',
        borderRadius: 5,
        paddingVertical: 15,
        marginBottom: 20,
    },


    // choused card nox active
    activeOptionsItem: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#4ECB71',
        backgroundColor: '#F1FFF6',
        padding: 15,
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    activeicon: {
        fontSize: 18,
        color: '#33CC66',
    },
    ActivechousesOptionsItemText: {
        fontSize: 15,
        marginLeft: 10,
        color:'black'
    },
})