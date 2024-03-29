import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox } from 'react-native';
import HomeScreen from './src/views/HomeScreen';
import RouterScreen from './src/views/RouterScreen';
import SigninScreen from './src/views/SigninScreen';
import SignupScreen from './src/views/SignupScreen';
import ThankYouScreen from './src/views/ThankYouScreen'; 
import WelcomeScreen from './src/views/WelcomeScreen';
import NewAccountInfo1 from './src/views/NewAccountInfo1';
import NewAccountInfo2 from './src/views/NewAccountInfo2'; 
import NewAccountInfo3 from './src/views/NewAccountInfo3'; 
import ProductDetailScreen from './src/views/ProductDetailScreen';
import AddBoxScreen from './src/views/AddBoxScreen';
import EditBoxScreen from './src/views/EditBoxScreen';
import ShowBoxScreen from './src/views/ShowBoxScreen';
import SingleShowBox from './src/views/SingleShowBox';
import MapScreen from './src/views/MapScreen';
import Cart from './src/views/Cart';
import Settings from './src/views/Settings';
import Tabs from './src/navigation/Tabs';
import TabsRestaurant from './src/navigation/TabsRestaurant';
import TC from './src/views/TC';
import HC from './src/views/HC';
import ChangePref from './src/views/ChangePref';
import BoxUpdated from './src/views/BoxUpdated';
import BoxDeleted from './src/views/BoxDeleted';
import BoxAdded from './src/views/BoxAdded';


const Stack = createNativeStackNavigator();

function App() {
  // Ignore log notification by message:
LogBox.ignoreLogs(['Warning: ...']);

// Ignore all log notifications:
LogBox.ignoreAllLogs();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Tabs}/>
        <Stack.Screen name="Router" component={RouterScreen}/>
        <Stack.Screen name="ThankYouScreen" component={ThankYouScreen}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}/>
        <Stack.Screen name="Login" component={SigninScreen}/>
        <Stack.Screen name="Register" component={SignupScreen}/>
        <Stack.Screen name="NewAccount1" component={NewAccountInfo1}/>
        <Stack.Screen name="NewAccount2" component={NewAccountInfo2}/>
        <Stack.Screen name="NewAccount3" component={NewAccountInfo3}/>
        <Stack.Screen name="AddBox" component={AddBoxScreen}/>
        <Stack.Screen name="RestoTab" component={TabsRestaurant}/>
        <Stack.Screen name="EditBox" component={EditBoxScreen}/>
        <Stack.Screen name="ShowBox" component={ShowBoxScreen}/>
        <Stack.Screen name="SingleShowBox" component={SingleShowBox}/>
        <Stack.Screen name="Map" component={MapScreen}/>
        <Stack.Screen name="Cart" component={Cart}/>
        <Stack.Screen name="ChangePref" component={ChangePref}/>
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen}/>
        <Stack.Screen name="Settings" component={Settings}/>
        <Stack.Screen name="TC" component={TC}/>
        <Stack.Screen name="HC" component={HC}/>
        <Stack.Screen name="BoxUpdated" component={BoxUpdated}/>
        <Stack.Screen name="BoxDeleted" component={BoxDeleted}/>
        <Stack.Screen name="BoxAdded" component={BoxAdded}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;