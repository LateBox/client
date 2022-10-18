import { FlatList, View, Button, StyleSheet, Text, Dimensions, TouchableHighlight } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapCoordinate from "../components/MapCoordinate";
import COORDINATES from "../data/dummy-map-data";
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

function markerClick() {
  console.log("Marker was clicked");
}

function MapScreen(props, { navigation }) {
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
          title={mymarker.id}
          description={mymarker.ownerId}
          centerOffset={{x: -18, y: -60}}
          anchor={{x: 0.69, y: 1}}
          image={address}
        >
          <MapView.Callout tooltip style={styles.customView}>
            <TouchableHighlight onPress= {()=>markerClick()} underlayColor='#dddddd'>
                <View style={styles.calloutText}>
                    <Text>{mymarker.id}{"\n"}{mymarker.ownerId}</Text>
                </View>
            </TouchableHighlight>
          </MapView.Callout>
        </Marker>      
      ))}
      </MapView>
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
    height: height,
  },
  // map: {
  //   ...StyleSheet.absoluteFillObject,
  // },
});
