import * as React from 'react';
import { Button, View, Text } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>You are now on the Home Screen</Text>
      <Button
        title="Go to Second"
        onPress={() => navigation.navigate('Second')}
      />
    </View>
  );
}

export default HomeScreen;