import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Modal } from 'react-native'
import React from 'react';
import uploadIcon from '../.././../../assets/images/upl.png';
import camUp from '../.././../../assets/images/campup.png';
import camera from '../.././../../assets/images/minicamera.png';
import gallery from '../.././../../assets/images/minigallery.png';
import * as ImagePicker from 'expo-image-picker';
import i18n from "i18next";


export default function UploadImages({ navigation }) {
    const [image, setImage] = React.useState(null);
    const [images, setImages] = React.useState([]);
    const [modalVisible, setModalVisible] = React.useState(false);

    //upload from gallery
    const pickImage = async () => {
        //multiple upload images
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
            setModalVisible(false);
            setImages([...images, result.uri]);

            console.log(images);

        }
    };

    // upload from camera
    const takeImage = async () => {
        const result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
            setModalVisible(false);
            setImages([...images, result.uri]);
        }
    }

    //chech for the selected lang
    const lang = i18n.language;
    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <View style={styles.boxCard}>
                        <TouchableOpacity
                            onPress={() => {
                                setModalVisible(true);
                            }
                            }
                        >
                            <Image
                                style={styles.imageStyle}
                                source={uploadIcon}
                            />
                        </TouchableOpacity>
                        {images && images.map(image => (
                            <Image
                                style={styles.imageStyle}
                                key={image}
                                source={{ uri: image }}
                            />
                        ))}
                    </View>
                </View>
            </ScrollView>
            <View style={styles.btnBoxDec}>
                <Text
                    onPress={() => navigation.navigate("DeclarationSuccess")}
                    style={styles.btnDeclar}
                >
                     {i18n.t("menageUploadImage.buttonConfirm")}
                </Text>
            </View>

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }
                }
            >
                <View style={styles.modal}>
                    <View style={styles.modalView}>
                        <Image
                            style={styles.cameraBigimageStyle}
                            source={camUp}
                        />
                        <Text style={styles.modalText}>
                        {i18n.t("menageUploadImage.desc")}
                        </Text>
                        <View style={styles.btnBox}>
                                <TouchableOpacity
                                onPress={takeImage}
                                style={styles.btnUploadImage}
                            >
                                <Text style={styles.textOfUploadBtn}>
                                    {i18n.t("menageUploadImage.via-camera")}
                                </Text>
                                <Image
                                    style={styles.iconOfBtnOfUpload}
                                    source={camera}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={pickImage}
                                style={styles.btnUploadImage}>

                                <Text style={styles.textOfUploadBtn}>
                                    {i18n.t("menageUploadImage.via-gallery")}
                                </Text>
                                <Image
                                    style={styles.iconOfBtnOfUpload}
                                    source={gallery}
                                />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            onPress={
                                () => { setModalVisible(false); }
                            }
                        >
                            <Text style={styles.cancedText}>
                                {i18n.t("menageUploadImage.cancel")}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
        backgroundColor: '#fff',
        width: '80%',

        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },

    boxCard: {
        marginHorizontal: 10,
        flexDirection: 'row',
        marginHorizontal: 20,
        marginVertical: 10,
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },
    imageStyle: {
        width: 101,
        height: 101,
        borderRadius: 10,
        marginBottom: 10,
        marginRight: 5,
    },
    btnBoxDec: {
        backgroundColor: "white",
        paddingBottom: 27,
        paddingTop: 27,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },
    btnDeclar: {
        textAlign: "center",
        backgroundColor: "#33CC66",
        borderRadius: 6,
        marginHorizontal: 35,
        fontWeight: "bold",
        padding: 15,
        color: "white",
    },


    btnDeclarText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
    },
    cameraBigimageStyle: {
        width: 74,
        height: 70,
        marginTop: 20,
        alignSelf: 'center',
    },
    btnUploadImage: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#F7F8F9',
        borderRadius: 6,
        padding: 10,
        marginTop: 10,
    },
    iconOfBtnOfUpload: {
        width: 20,
        height: 20,
    },
    textOfUploadBtn: {
        fontSize: 11,
        color: 'black',
        marginRight: 60,
    },
    modalText: {
        marginBottom: 30,
        marginTop: 20,
    },
    cancedText: {
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center',
        color: '#33CC66',
    },
})