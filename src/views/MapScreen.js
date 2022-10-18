import { FlatList, View, Button, StyleSheet, Text, Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import MapCoordinate from "../components/MapCoordinate";
import COORDINATES from "../data/dummy-map-data";

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
