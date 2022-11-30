import * as React from 'react';
import { FlatList, View, Button, StyleSheet, Text, Dimensions,ActivityIndicator, TouchableHighlight, ScrollView,Image } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import currentUrl from "../constants/urls";


const {width, height} = Dimensions.get('window');


function Settings(props, { navigation }) {


//   const [isLoading, setLoading] = React.useState(true);
//   const [data, setData] = React.useState([]);
//   const isFocused = useIsFocused();

//   const [boxName, setBoxName] = React.useState('Box Name');
//   const [description, setDescription] = React.useState('description');
//   const [price, setPrice] = React.useState('price');
//   const [restaurantId, setRestaurantId] = React.useState('restaurantId');
//   const [stock, setStock] = React.useState('stock');
//   const [imageUri, setImageUri] = React.useState('imageUri');
//   const [selectedMarkerID, setSelectedMarkerID] = React.useState('0');


  return (
    <View>
      <Button title="Return to Router" onPress={() => props.navigation.navigate('Router')} />  
      <Button title="Logout" onPress={() => props.navigation.navigate('Home')} />  
      <Button title="Preferences" onPress={() => props.navigation.navigate('AccountPreferences')} />  
      <Button title="Help Center" onPress={() => props.navigation.navigate('Home')} />  
      <Button title="Terms & Conditions" onPress={() => props.navigation.navigate('Home')} />
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
  },
  map: {
    width: width,
    height: height-300,
  },
  boxPopup:{
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',

  },
  popupItem: {
    width: '50%', // is 50% of container width
    paddingTop:15,
    paddingLeft:20,
  },
  calloutText: {
    backgroundColor: 'rgba(241, 136, 97,0.9)',
    paddingLeft:10,
    paddingTop:10,
    paddingRight:10,
    paddingBottom:10,
    height:100,
    width:200,

  }
});
