import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/views/HomeScreen';
import SecondScreen from './src/views/SecondScreen';
import SigninScreen from './src/views/SigninScreen';




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Second" component={SecondScreen}/>
        <Stack.Screen name="Login" component={SigninScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;