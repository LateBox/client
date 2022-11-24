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
import NewAccountInfo2 from './src/views/NewAccountInfo2'; 
import NewAccountInfo3 from './src/views/NewAccountInfo3'; 
import AccountPreferences from './src/views/AccountPreferences'; 
import ProductDetailScreen from './src/views/ProductDetailScreen';
import AddBoxScreen from './src/views/AddBoxScreen';
import EditBoxScreen from './src/views/EditBoxScreen';
import ShowBoxScreen from './src/views/ShowBoxScreen';
import MapScreen from './src/views/MapScreen';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AccountPreferences" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Router" component={RouterScreen}/>
        <Stack.Screen name="Spare" component={SpareScreen}/>
        <Stack.Screen name="Login" component={SigninScreen}/>
        <Stack.Screen name="Register" component={SignupScreen}/>
        <Stack.Screen name="NewAccount1" component={NewAccountInfo1}/>
        <Stack.Screen name="NewAccount2" component={NewAccountInfo2}/>
        <Stack.Screen name="NewAccount3" component={NewAccountInfo3}/>
        <Stack.Screen name="AccountPreferences" component={AccountPreferences}/>
        <Stack.Screen name="AddBox" component={AddBoxScreen}/>
        <Stack.Screen name="EditBox" component={EditBoxScreen}/>
        <Stack.Screen name="ShowBox" component={ShowBoxScreen}/>
        <Stack.Screen name="Map" component={MapScreen}/>
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;