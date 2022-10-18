import { FlatList, View, Button, StyleSheet, Text, Dimensions } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapCoordinate from "../components/MapCoordinate";
import COORDINATES from "../data/dummy-map-data";
// Location icon by Icons8
import marker50 from '../../assets/marker50.png';
import marker100 from '../../assets/marker100.png';

const {width, height} = Dimensions.get('window');
const latlongdelta = 0.06; // The amount of east-to-west distance (measured in degrees) to display for the map region
var ottawa = {
    latitude: 45.424721,
    longitude: -75.695000,
    latitudeDelta: latlongdelta,
    longitudeDelta: latlongdelta,
};

function MapScreen(props, { navigation }) {
  return (
    <View>
      <Button title="Return to Router" onPress={() => props.navigation.navigate('Router')} />  
      {/* { <FlatList
        data={COORDINATES}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <MapCoordinate
            image={itemData.item.id}
            title={itemData.item.lat}
            price={itemData.item.long}
            onViewDetail={() => props.navigation.navigate("Spare")}
            onAddToCart={() => {}}
          />
        )}
      /> } */}
      <MapView
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={styles.map} 
      initialRegion={ottawa}>
                <Marker
                  coordinate={ottawa}
                  centerOffset={{x: -18, y: -60}}
                  anchor={{x: 0.69, y: 1}}
                  image={marker50}
                />
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
