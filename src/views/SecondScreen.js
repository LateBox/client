import * as React from 'react';
import { Button, View, Text } from 'react-native';

function SecondScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>You are now on the Second Screen</Text>
        <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />      
      </View>
    );
}
export default SecondScreen;