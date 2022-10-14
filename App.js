import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/views/HomeScreen';
import SpareScreen from './src/views/SpareScreen';
import RouterScreen from './src/views/RouterScreen';
import SigninScreen from './src/views/SigninScreen';
import SignupScreen from './src/views/SignupScreen'; 
import NewAccountInfo1 from './src/views/NewAccountInfo1'; 
import ProductDetailScreen from './src/views/ProductDetailScreen';
import AddBoxScreen from './src/views/AddBoxScreen';






const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Router" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Router" component={RouterScreen}/>
        <Stack.Screen name="Spare" component={SpareScreen}/>
        <Stack.Screen name="Login" component={SigninScreen}/>
        <Stack.Screen name="Register" component={SignupScreen}/>
        <Stack.Screen name="NewAccount1" component={NewAccountInfo1}/>
        <Stack.Screen name="AddBox" component={AddBoxScreen}/>
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;