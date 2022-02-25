import { StyleSheet, Text, View } from 'react-native';
import Restaurants from './src/components/Restaurants';
import Restaurant from './src/models/restaurant';

export default function App() {

  const DUMMY_RESTAURANTS = [
    new Restaurant('Alaaddin Bakery'),
    new Restaurant('Kettlemans Bagel'),
    new Restaurant('Joey Rideau')
  ];

  return (
    <Restaurants items={DUMMY_RESTAURANTS}/>
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
