import * as React from 'react';
import { View, Button, Image, StyleSheet, Dimensions } from "react-native";
import icons from '../constants/icons';
import THEME from '../constants/theme';
import LateboxButton from '../components/LateboxButton';

const {width, height} = Dimensions.get('window');

function Settings(props, { navigation }){

  return (
    <View style={{ flexDirection: "column" }}>
      {/* <Button title="Return to Router" onPress={() => props.navigation.navigate('Router')} /> */}
      <LateboxButton text=" Update Preferences" image={icons.filters} onPress={() => props.navigation.navigate('ChangePref')} />
      <LateboxButton text=" Help Center" image={icons.list} onPress={() => props.navigation.navigate('HC')} />
      <LateboxButton text=" Terms & Conditions" image={icons.toc} onPress={() => props.navigation.navigate('TC')} />
      <LateboxButton text=" Logout" image={icons.back} onPress={() => props.navigation.navigate('Login')} />
    </View>
  );
}

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
});
