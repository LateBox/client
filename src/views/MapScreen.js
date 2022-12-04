import * as React from 'react';

import { FlatList, View, Button, StyleSheet, Text, Dimensions,ActivityIndicator, TouchableHighlight, ScrollView,Image } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapCoordinate from "../components/MapCoordinate";
import COORDINATES from "../data/dummy-map-data";

import { useIsFocused } from "@react-navigation/native";
import currentUrl from "../constants/urls";



// Location icon by Icons8
import marker50 from '../../assets/marker-50.png';
import marker100 from '../../assets/marker-100.png';
import address from '../../assets/address-100.png';

const {width, height} = Dimensions.get('window');
const latlongdelta = 0.06; // The amount of east-to-west distance (measured in degrees) to display for the map region


var ottawa = {
    latitude: 45.424721,
    longitude: -75.695000,
    latitudeDelta: latlongdelta,
    longitudeDelta: latlongdelta,
};



function MapScreen(props, { navigation }) {


  const [isLoading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);

  const isFocused = useIsFocused();


  const [boxName, setBoxName] = React.useState('Box Name');
  const [description, setDescription] = React.useState('description');
  const [price, setPrice] = React.useState('price');
  const [restaurantId, setRestaurantId] = React.useState('restaurantId');
  const [restaurantName, setRestaurantName] = React.useState('restaurantName');
  const [restaurantAddress, setRestaurantAddress] = React.useState('restaurantAddress');
  const [stock, setStock] = React.useState('stock');
  const [imageUri, setImageUri] = React.useState('imageUri');
  const [rating, setRating] = React.useState('rating');

  const [selectedMarkerID, setSelectedMarkerID] = React.useState('0');

  const getProductByRestaurant = async () => {
    try {
      console.log(selectedMarkerID);
        const response = await fetch(currentUrl + 'product/restaurant/'+selectedMarkerID,
            {
                method: 'GET',
                // mode: 'no-cors',

                // credentials: 'include',
                'Access-Control-Allow-Credentials': 'true'

            },
        );
        
        const json = await response.json();
        setData(json);
        setBoxName(json.name)
        setDescription(json.description)
        setPrice(json.price)
        setRestaurantId(json.restaurantId)
        setStock(json.stock)
        setImageUri(json.imageUri)
        setRating(json.rating)
        // console.log(data);
        // console.log(json)
    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
    }
}

    // this line is necessary to get the data before the html loads
    React.useEffect(() => {
      // this conditionis necessary to refresh the data when coming from a different screen
      if(isFocused){ 
        getProductByRestaurant();
      }
      //return the isFocused to refresh data when coming from different screen
  }, [[isFocused]]);

  return (
    <View>
      <Button title="Return to Router" onPress={() => props.navigation.navigate('Router')} />  
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map} 
        initialRegion={ottawa}>
      <Marker
        coordinate={ottawa}
        centerOffset={{x: -18, y: -60}}
        anchor={{x: 0.69, y: 1}}
        image={marker100}
      />
<></>
      {COORDINATES.map(mymarker => (
        <Marker
          coordinate={{
            latitude: mymarker.lat,
            longitude: mymarker.long,
            latitudeDelta: latlongdelta,
            longitudeDelta: latlongdelta,
          }}
          onPress= {() => (setSelectedMarkerID(mymarker.id), getProductByRestaurant)}
          title={mymarker.id}
          description={mymarker.ownerId}
          centerOffset={{x: -18, y: -60}}
          anchor={{x: 0.69, y: 1}}
          image={address}
        >

        </Marker>      
      ))}
      <></>
      </MapView>
      {isLoading ? <ActivityIndicator /> : (
                <View style={styles.cardHolder}>
                <View>
                    <View style={styles.singleCard}>
                        <View style={styles.singleCardTop}>
                            <Image source={{ uri: imageUri }} style={styles.cardPic}  />
                            <View style={styles.cardText}>
                                {/* id: {item.id}, {"\n"} */}
                                <Text style={styles.cardTextTitle}>
                                    {boxName} {"\n"}

                                </Text>
                                <Text style={styles.cardTextAddress}>
                                    {restaurantAddress} {"\n"}{"\n"}

                                </Text>
                                <Text style={styles.cardTextDescription}>
                                    {description}{"\n"}{"\n"}

                                </Text>
                                <Text style={styles.cardTextRating}>
                                    {rating + '/5  ⭐'}

                                </Text>

                            </View>
                        </View>
                        <View style={styles.singleCardBottom}>

                            <Text style={styles.cardTextPrice}>$ {price}</Text>
                            <Button tyle={styles.singleCardBottomButton}
                                onPress={() =>{navigation.navigate('EditBox' , {
                                    itemId: id})}} 
                                    // itemId: item.id});setLoading(true)}} 
                                title="View Box"
                                color="#212162"
                                accessibilityLabel="Learn more about this purple button"
                            />
                        </View>
                    </View>


                </View>

                    {/* <Button
                        onPress={() =>{navigation.navigate('EditBox' , {
                            itemId: item.id})}} 
                            // itemId: item.id});setLoading(true)}} 
                        title="Edit"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    /> */}
            </View> 
                )}

                        {isLoading ? console.log(data) : console.log("nothing here")}

    </View>
  );
}

export default MapScreen;

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

  },
  cardHolder:{
    // margin:'100px 100px 100px 100px',
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

  // map: {
  //   ...StyleSheet.absoluteFillObject,
  // },
});
