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
import { useDispatch, useSelector } from 'react-redux';
import { setFilterCity, setFilterPeriod, setFilterTime, setFilterTypeCollects } from '../../../../redux/slices/filter';

export default function Filter({ navigation: { goBack } }) {
  const [cities, setCities] = useState([]);
  const [collects, setCollects] = useState([]);
  
  // * Redux hooks
  const { filterCity, filterPeriod, filterTime, filterTypeCollects } = useSelector((state) => state.filter)
  const dispatch = useDispatch()
  const { data: dataCities, isLoading: isCitiesLoading } = useAPI({
    url: 'cities',
    method: 'GET'
  }, true);

  const { data:dataCollects, isLoading:isDataCollectsLoading } = useAPI({
    url: 'collects',
    method: 'GET'
  }, true);

  const onPressReset = () => {
    dispatch(setFilterTime(null))
    dispatch(setFilterTypeCollects(null))
    dispatch(setFilterCity(null))
    dispatch(setFilterPeriod(null))
  }

  const onPressSubmit = () => {
    goBack()
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
  }, [isDataCollectsLoading, isCitiesLoading]);

  return (
    <View style={styles.container}>
      <ScrollView >
        <View style={styles.scrollView}>
          <Text style={styles.textTitle}>Descreption</Text>
          <View style={styles.cards}>
            <View style={styles.cardBox}>
              <Picker
                selectedValue={filterTypeCollects}
                onValueChange={(itemValue, itemIndex) => dispatch(setFilterTypeCollects(itemIndex))}
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
                selectedValue={filterCity}
                onValueChange={(itemValue, itemIndex) => dispatch(setFilterCity(itemIndex))}
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
                selectedValue={filterPeriod}
                onValueChange={(itemValue, itemIndex) => dispatch(setFilterPeriod(itemIndex))}
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
              onPress={() => dispatch(setFilterTime("08:00 - 12:00"))}
              style={
                filterTime == "08:00 - 12:00" ?
                  styles.activetimeBox : styles.timeBox
              } >
              <Text style={styles.textCardTimeBox}>
                08:00 - 12:00
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => dispatch(setFilterTime("12:00 - 16:00"))}
              style={
                filterTime == "12:00 - 16:00" ?
                  styles.activetimeBox : styles.timeBox
              } >
              <Text style={styles.textCardTimeBox}>
                12:00 - 16:00
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => dispatch(setFilterTime("16:00 - 20:00"))}
              style={
                filterTime == "16:00 - 20:00" ?
                  styles.activetimeBox : styles.timeBox
              } >
              <Text style={styles.textCardTimeBox}>
                16:00 - 20:00
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => dispatch(setFilterTime("20:00 - 00:00"))}
              style={
                filterTime == "20:00 - 00:00" ?
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