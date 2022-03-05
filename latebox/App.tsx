import { StyleSheet, Text, View } from 'react-native';
import Restaurant from './src/models/restaurant';
import RestaurantsScreen from './src/screens/RestaurantsScreen';
import * as Font from 'expo-font';

export default function App() {

  const DUMMY_RESTAURANTS = [
    new Restaurant('Alaaddin Bakery'),
    new Restaurant('Kettlemans Bagel'),
    new Restaurant('Joey Rideau')
  ];

  return (
    <RestaurantsScreen items={DUMMY_RESTAURANTS}/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
