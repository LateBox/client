import * as React from 'react';
import { Button, View, Text } from 'react-native';

function RouterScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Please choose a screen to go to</Text>
        <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />  
        <Button title="Go to Register" onPress={() => navigation.navigate('Register')} />  
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />  
        <Button title="Go to Spare screen" onPress={() => navigation.navigate('Spare')} />  
      </View>
    );
}
export default RouterScreen;