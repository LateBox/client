import * as React from 'react';
import { View, Button, Image, StyleSheet, Dimensions } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import currentUrl from "../constants/urls";
import Accordion from '../components/Accordion';
import { COLORS, icons } from "../constants";
import LateboxButton from '../utils/button';


const {width, height} = Dimensions.get('window');


function Settings(props, { navigation }) {

  return (
    <View style={{ flexDirection: "column" }}>
      {/* <Button title="Return to Router" onPress={() => props.navigation.navigate('Router')} /> */}
      <LateboxButton text="Return to Router" image={icons.back} onPress={() => props.navigation.navigate('Router')} />
      <LateboxButton text="Preferences" image={icons.filters} onPress={() => props.navigation.navigate('AccountPreferences')} />
      <LateboxButton text="Help Center" onPress={() => props.navigation.navigate('HC')} />
      <LateboxButton text="Terms & Conditions" onPress={() => props.navigation.navigate('TC')} />
      <LateboxButton text="Logout" onPress={() => props.navigation.navigate('Login')} />
      <Accordion/>
    </View>
  );
}

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
});
