import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView 
} from 'react-native'
import {useState,useEffect} from 'react';
import { useAPI,useAsyncStorage } from "~/hooks/hooks";
import { Picker } from '@react-native-picker/picker';

//typeWastData, cityData, 
import { periodData } from './FilterData';
import { useFetch } from '../../../hooks/hooks';

export default function Filter({ navigation: { goBack } }) {

  const [selected, setSelected] = useAsyncStorage("filterTime","")
  const [waste, setWaste] = useAsyncStorage("filterTypeCollects","-1");
  const [city, setCity] = useAsyncStorage("filterCity","-1");
  const [period, setPeriod] = useAsyncStorage("filterPeroid","-1");

  const [cities, setCities] = useState([]);
  const [collects, setCollects] = useState([]);

  const { data:dataCities, isLoading: isCitiesLoading } = useAPI({
    url: 'cities',
    method: 'GET'
  }, true);

  const { data:dataCollects, isLoading:isDataCollectsLoading } = useAPI({
    url: 'collects',
    method: 'GET'
  }, true);

  // * Fetch the required data
  const [trigger, { data, isLoading }] = useFetch("", {}, true)

  const onPressReset = () => {
    setSelected("")
    setWaste("-1")
    setCity("-1")
    setPeriod("-1")
  }

  const onPressSubmit = () => {
    goBack()
    trigger()
  }

  useEffect(() => {
    if (dataCities !== null){
      setCities(dataCities);
    }
  }, [isCitiesLoading]);

  useEffect(() => {
    if (dataCollects !== null){
      setCollects(dataCollects);
    }
  }, [isDataCollectsLoading]);

  return (
    <View style={styles.container}>
      <ScrollView >
        <View style={styles.scrollView}>
          <Text style={styles.textTitle}>Descreption</Text>
          <View style={styles.cards}>
            <View style={styles.cardBox}>
              <Picker
                selectedValue={waste}
                onValueChange={(itemValue, itemIndex) => setWaste(itemIndex)}
              >
                <Picker.Item
                  label="All"
                  value="-1"
                  key="-1"
                />
                {collects && collects.map(item => {
                  return (
                    <Picker.Item
                      label={item.collect_name}
                      value={item.id}
                      key={item.id}
                    />
                  )
                })}
              </Picker>
            </View>
            <View style={styles.cardBox}>
              <Picker
                selectedValue={city}
                onValueChange={(itemValue, itemIndex) => setCity(itemIndex)}
              >
                <Picker.Item
                  label="All"
                  value="-1"
                  key="-1"
                />
                {cities && cities?.map(item => {
                  return (
                    <Picker.Item
                      label={item.name}
                      value={item.id}
                      key={item.id}
                    />
                  )
                })}
              </Picker>
            </View>
            <View style={styles.cardBox}>
              <Picker
                selectedValue={period}
                onValueChange={(itemValue, itemIndex) => setPeriod(itemIndex)}
              >
                <Picker.Item
                      label="All"
                      value="-1"
                      key="-1"
                    />
                {periodData.map(item => {
                  return (
                    <Picker.Item
                      label={item.name}
                      value={item.id}
                      key={item.id}
                    />
                  )
                })}
              </Picker>
            </View>
          </View>
          <View
            style={styles.horizontalLineBreack}
          />
          <Text style={styles.textTitle}>
            à quelle heure souhaitez-vous collecter
            vos déchets ?
          </Text>
          <View style={styles.cardsTimes}>
            <TouchableOpacity
              onPress={() => setSelected("08:00 - 12:00")}
              style={
                selected == "08:00 - 12:00" ?
                  styles.activetimeBox : styles.timeBox
              } >
              <Text style={styles.textCardTimeBox}>
                08:00 - 12:00
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelected("12:00 - 16:00")}
              style={
                selected == "12:00 - 16:00" ?
                  styles.activetimeBox : styles.timeBox
              } >
              <Text style={styles.textCardTimeBox}>
                12:00 - 16:00
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelected("16:00 - 20:00")}
              style={
                selected == "16:00 - 20:00" ?
                  styles.activetimeBox : styles.timeBox
              } >
              <Text style={styles.textCardTimeBox}>
                16:00 - 20:00
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelected("20:00 - 00:00")}
              style={
                selected == "20:00 - 00:00" ?
                  styles.activetimeBox : styles.timeBox
              }>
              <Text style={styles.textCardTimeBox} >
                20:00 - 00:00
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttinsBox}>
            <TouchableOpacity>
              <Text style={styles.buttonReset} onPress={onPressReset}>
                Reset
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.buttonNext} onPress={onPressSubmit}>
                Appliquer
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {
    marginHorizontal: 20,
  },
  cards: {
    marginTop: 21
  },
  cardBox: {
    borderWidth: 1,
    borderColor: '#C4C4C4',
    borderRadius: 5,
    marginBottom: 13,
  },
  textTitle: {
    fontWeight: 'bold',
    marginTop: 20,
    fontSize: 15
  },
  horizontalLineBreack: {
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 1,
    marginTop: 20
  },
  cardsTimes: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  activetimeBox: {
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#4ECB71',
    padding: 10,
    width: "48%",
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#E2FFEC',
  },
  timeBox: {
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#C4C4C4',
    padding: 10,
    width: "48%",
    marginBottom: 10,
    borderRadius: 5,
  },
  textCardTimeBox: {
    textAlign: 'center'
  },
  buttinsBox: {
    marginTop: 50,
    marginBottom: 30
  },
  buttonReset: {
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#C4C4C4',
    padding: 12,
    borderRadius: 5,
  },
  buttonNext: {
    textAlign: 'center',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#C4C4C4',
    padding: 12,
    borderRadius: 5,
    marginTop: 10,
    backgroundColor: '#33CC66',
    color: 'white',
  },
})