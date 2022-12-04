import * as React from 'react';
import { FlatList, View, Button, StyleSheet, Text, Dimensions,ActivityIndicator, TouchableHighlight, ScrollView,Image } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapCoordinate from "../components/MapCoordinate";
import COORDINATES from "../data/dummy-map-data";
import { useIsFocused } from "@react-navigation/native";
import currentUrl from "../constants/urls";
const {width, height} = Dimensions.get('window');


function TC(props, { navigation }) {
  return (
    <View>
      <Button title="Return to Router" onPress={() => props.navigation.navigate('Router')} />  
    </View>
  );
}

export default TC;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: width,
    height: height-450,
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

  },
  cardHolder:{
    // margin:'100px 100px 100px 100px',
    marginBottom: 100,
    paddingTop:5,
    paddingBottom:5,
    paddingLeft:10,
    paddingRight:10,

},
singleCard:{
    // margin:'100px 100px 100px 100px',
    backgroundColor:'#FFFFFF',
    paddingTop:10,
    // paddingBottom:10,
    // paddingLeft:20,
    // paddingRight:20,
    borderRadius:10,
},
singleCardTop:{
    // margin:'100px 100px 100px 100px',
    backgroundColor:'#FFFFFF',
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:40,
    paddingRight:40,
    flexDirection: 'row' ,
},
singleCardBottom:{
    // margin:'100px 100px 100px 100px',
    backgroundColor:'rgba(198, 198, 198,0.5)',
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:40,
    paddingRight:40,
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5,
    flexDirection: 'row' ,
    justifyContent:'space-between'
},
singleCardBottomButton:{
    // margin:'100px 100px 100px 100px',
    backgroundColor:'rgba(198, 198, 198,0.5)',
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:40,
    paddingRight:40,
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5,

},


cardPic:{
    // margin: '10px 10px 10px 10px',
    width: 150, 
    height: 150,

},
cardText:{
    width:'60%',
    flexDirecton: 'row' ,
    height: '100%',
    paddingLeft:10,


},
cardTextTitle:{
    flexDirecton: 'row' ,
    // height: '40%',
    paddingLeft:5,
    fontSize:26,


},
cardTextAddress:{
    paddingLeft:5,

    fontSize:12,

},
cardTextDescription:{
    flexDirecton: 'row' ,
    // height: '60%',
    paddingLeft:5,


},
cardTextRating:{
    flexDirecton: 'row' ,
    // height: '60%',
    paddingLeft:5,


},

cardTextPrice:{

    fontSize:26,


},

});
