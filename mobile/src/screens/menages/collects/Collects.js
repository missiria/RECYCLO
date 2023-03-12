import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import i18n from "i18next";

import HeaderImage from "~/assets/images/c.png";
import apiClient from "~/api/client";
import { EdgeCardCollect } from "~/ui/cards/EdgeCardCollect";

import { UPLOAD_FOLDER_URL, IMAGE_AUTRE_URL } from "~/api/constants";

export default function Collects({ navigation }) {
  const [collects, setCollects] = useState([]);

  // fetch collects
  const loadCollects = async () => {
    await apiClient.get("collects").then((response) => {
      setCollects(response?.data ?? []);
    });
  };
  useEffect(() => {
    loadCollects();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerBox}>
        <View style={styles.headerImg}>
          <Image 
            source={HeaderImage} 
            resizeMethod="resize"
          />
        </View>
        <View style={styles.textBox}>
          <Text style={styles.boldTitle}>{i18n.t("collects.title")}</Text>
          <Text style={styles.smallDesc}>{i18n.t("collects.subtitle")}</Text>
        </View>
      </View>
      <View style={styles.cards}>
        {collects.length &&
          collects.map((collect) => (
            <EdgeCardCollect
              key={collect.id}
              text={collect.collect_name}
              onPress={() =>
                navigation.navigate({
                  name: "CollectDetails",
                  params: { collect },
                })
              }
              style={{ width: "50%" }}
              imageStyle={{ height: 130 }}
              img={`${UPLOAD_FOLDER_URL + collect.image}`}
            />
          ))}
        <EdgeCardCollect
          text={i18n.t("collects.other")}
          onPress={() => navigation.navigate("OtherCollects")}
          style={{ width: "50%" }}
          imageStyle={{ height: 130 }}
          img={IMAGE_AUTRE_URL}
        />
      </View>
    </View>
  );
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
    letterSpacing: 0.5,
  },
  smallDesc: {
    color: "#A3A3A3",
    fontSize: 11,
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
});