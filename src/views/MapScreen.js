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
  const [stock, setStock] = React.useState('stock');
  const [imageUri, setImageUri] = React.useState('imageUri');

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
{/*           
          <MapView.Callout tooltip style={styles.customView}>
            <TouchableHighlight onPress= {() => setSelectedMarkerID(mymarker.id)} underlayColor='#dddddd'>
                <View style={styles.calloutText}>

                    <Text>{mymarker.id}{"\n"}{mymarker.ownerId}</Text>
                </View>
            </TouchableHighlight>
          </MapView.Callout>
 */}
        </Marker>      
      ))}
      </MapView>
      {isLoading ? <ActivityIndicator /> : (
                <>
                <View style={styles.boxPopup}>
                <Text style={styles.popupItem}>
                Name: {boxName}, {"\n"}
                description:{description}, {"\n"}
                price: {price}, {"\n"}
                restaurantId: {restaurantId}, {"\n"}
                stock: {stock}, {"\n"}{"\n"}{"\n"}{"\n"}{"\n"}
                <Button title="Order" style={styles.popupItem} >Order</Button>
                </Text>
                <Image source={{ uri: imageUri }} style={{ width: 200, height: 200, marginRight:0 }} />
            
                </View>
                
                {console.log()}
            </> 
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

  }
  // map: {
  //   ...StyleSheet.absoluteFillObject,
  // },
});
