import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/views/HomeScreen';
import SecondScreen from './src/views/SecondScreen';
import SigninScreen from './src/views/SigninScreen';
import SignupScreen from './src/views/SignupScreen'; 
import NewAccountInfo1 from './src/views/NewAccountInfo1'; 




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Second" component={SecondScreen}/>
        <Stack.Screen name="Login" component={SigninScreen}/>
        <Stack.Screen name="Register" component={SignupScreen}/>
        <Stack.Screen name="NewAccount1" component={NewAccountInfo1}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;