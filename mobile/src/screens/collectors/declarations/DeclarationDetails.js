import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react';
import { SliderBox } from "react-native-image-slider-box";
//import { FakeImagesDataSliders } from './FakeImagesDataSliders'
//import userImage from '../../../assets/images/p.png'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Location from 'expo-location';
import MapView, { Marker, Polygon } from 'react-native-maps';
import { UPLOAD_FOLDER_URL,DEFAULT_AVATAR_URL } from "~/api/constants"
import moment from "moment";

export default function DeclarationDetails({navigation, route }) {

    const { declaration } = route.params;
    const images = [];

    declaration.images.map(img=>{
        images.push(UPLOAD_FOLDER_URL + img.image);
    });

    const userImage = declaration.user.avatar != null ? UPLOAD_FOLDER_URL + declaration.user.avatar : DEFAULT_AVATAR_URL;
    
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    // let text = 'Waiting..';
    // if (errorMsg) {
    //     text = errorMsg;
    // } else if (location) {
    //     text = JSON.stringify(location);
    // }

    let latitude = 0;
    if (location) {
        latitude = location.coords.latitude;
    }

    let longitude = 0;
    if (location) {
        longitude = location.coords.longitude;
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <SliderBox
                    disableOnPress={true}
                    paginationBoxVerticalPadding={20}
                    swipeThreshold={40}
                    width="100%"
                    images={images}
                    autoplay
                />
                <View style={styles.profileContetn}>
                    <View style={styles.userInfo}>
                        <View >
                            <Image
                                style={styles.profileImg}
                                source={{uri:userImage}}
                            />
                        </View>
                        <View style={styles.userInfoData}>
                            <Text style={styles.username}>
                                {declaration.user.fullName}
                            </Text>
                            <View style={styles.userPlace}>
                                <Icon
                                    style={styles.iconMap}
                                    name='map-marker-outline'
                                />
                                <Text style={styles.descUserMap}>
                                    {declaration.user.account?.city.name},{declaration.user.account?.country}
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.breackLine}></View>

                    <View style={styles.declarationInfo}>
                        <View style={styles.declarationVetmentBox}>
                            <Text style={styles.decVetTitle}>
                            {declaration.collect.collect_name}
                            </Text>
                            <Text style={styles.decVetName}>
                            {declaration.quantity} kgs
                            </Text>
                        </View>
                        <View style={styles.centerBox}>
                            <Text style={styles.centerTitle}>
                                Prix
                            </Text>
                            <Text style={styles.centerName}>
                            {declaration.collect.point / 100 } Dhs/kgs
                            </Text>
                        </View>
                    </View>

                    <View style={styles.breackLine}></View>

                    <View style={styles.despoBox}>
                        <View style={styles.calendBox}>
                            <Icon
                                style={styles.calendIcon}
                                name='calendar-multiselect'
                            />
                            <Text style={styles.calendTitle}>
                                Disponibilité
                            </Text>
                        </View>
                        <View style={styles.cardDispoBox}>
                            <Text style={styles.despoTime}>
                                {moment(declaration.date, moment.ISO_8601).format('dddd, MMMM DD YYYY')}
                            </Text>
                            <Text style={styles.despoDate}>
                                {declaration.time}
                            </Text>
                        </View>

                    </View>

                    <View style={styles.breackLine}></View>
                    <View style={styles.adressBox}>
                        <View style={styles.calendBox}>
                            <Icon
                                style={styles.calendIcon}
                                name='map-legend'
                            />
                            <Text style={styles.calendTitle}>
                                Address
                            </Text>
                        </View>
                        <Text style={styles.addressTextDesc}>
                            {declaration.user.account?.address}
                        </Text>
                        <MapView
                            style={styles.map}
                            initialRegion={{
                                latitude: parseInt(latitude.toFixed(4)),
                                longitude: parseInt(longitude.toFixed(5)),
                                latitudeDelta: 124.2922,
                                longitudeDelta: 354.2421,
                            }}
                            followsUserLocation={true}
                            showsUserLocation={true}
                            showsMyLocationButton={true}
                        >
                            <Marker
                                coordinate={{
                                    latitude: parseFloat(latitude),
                                    longitude: parseFloat(longitude),
                                }}
                                title={'Here We Put The User Name Of Menage'}
                                description={declaration.user.fullName}
                            >
                            </Marker>
                        </MapView>
                    </View>
                </View>
                <View style={styles.btnFooter}>
                    <Text
                        onPress={() => navigation.navigate('PaymentsDetails', { declaration })}
                        style={styles.buttonBtn}>
                        Confirmer l’order
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    map: {
        width: "100%",
        height: 200,
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 20,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    profileContetn: {
        marginTop: 20,
        marginHorizontal: 20,
    },
    profileImg: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 12
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    username: {
        fontWeight: 'bold'
    },
    userPlace: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    iconMap: {
        color: '#292D32',
        fontSize: 11,
        marginRight: 5

    },
    descUserMap: {
        color: '#828282',
        fontSize: 11,
    },

    breackLine: {
        height: 0.30,
        backgroundColor: '#A3A3A3',
        marginTop: 20,
        width: "100%",
    },

    declarationInfo: {
        marginTop: 20,
    },
    declarationVetmentBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    decVetTitle: {
        fontWeight: '700',
        fontSize: 15,
    },
    decVetName: {
        color: '#4ECB71',
        fontWeight: '700',
        fontSize: 15,
    },

    centerBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    centerTitle: {
        color: '#828282',
        fontSize: 12,
        fontWeight: '400'
    },
    centerName: {
        color: '#828282',
        fontSize: 12,
        fontWeight: '400',
    },

    mountentBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    mountentTitle: {
        fontWeight: '700',
        fontSize: 15,
    },
    mountentName: {
        fontWeight: '700',
        fontSize: 15,
    },
    despoBox: {
        marginTop: 20,

    },
    calendBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    calendIcon: {
        fontSize: 17,
        marginRight: 8
    },
    calendTitle: {
        fontSize: 12,
    },

    cardDispoBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    },
    despoTime: {
        backgroundColor: '#F8F8F8',
        borderRadius: 5,
        marginRight: 10,
        padding: 12,
        fontSize: 12,
    },
    despoDate: {
        backgroundColor: '#F8F8F8',
        borderRadius: 5,
        marginRight: 10,
        padding: 12,
        fontSize: 12,
    },


    adressBox: {
        marginTop: 20,
    },
    addressTextDesc: {
        color: '#828282',
        marginTop: 12,
        fontSize: 12,
    },

    buttonBtn: {
        marginTop: 20,

        backgroundColor: '#4ECB71',
        color: '#fff',
        fontSize: 15,
        padding: 14,
        borderRadius: 5,
        textAlign: 'center',
    },

    btnFooter: {
        marginTop: 20,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

    },

});