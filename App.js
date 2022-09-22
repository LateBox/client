import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
        <Image
          style={styles.logo}
          source={require('./assets/LateBox.svg')}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f18861',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 660,
    height: 580,
  },

});
