import * as React from 'react';
import { Button, View, Text } from 'react-native';

function RouterScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Please choose a screen to go to</Text>
        <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />  
        <Button title="Go to Register" onPress={() => navigation.navigate('Register')} />  
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />  
        <Button title="Go to Show Box" onPress={() => navigation.navigate('ShowBox')} />  
        <Button title="Go to Single Box" onPress={() => navigation.navigate('SingleShowBox')} />  
        <Button title="Go to Add Box" onPress={() => navigation.navigate('AddBox')} />  
        {/* <Button title="Go to Edit Box" onPress={() => navigation.navigate('EditBox')} />   */}
        <Button title="Go to Map" onPress={() => navigation.navigate('Map')} />
        <Button title="Go to Info1" onPress={() => navigation.navigate('NewAccount1')} />
        <Button title="Go to Info2" onPress={() => navigation.navigate('NewAccount2')} />
        <Button title="Go to Info3" onPress={() => navigation.navigate('NewAccount3')} />
        <Button title="SingleShowBox" onPress={() => navigation.navigate('SingleShowBox')} />
        <Button title="Go to Account Preferences" onPress={() => navigation.navigate('AccountPreferences')} />
        <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} />


        <Button title="Go to Spare screen" onPress={() => navigation.navigate('Spare')} />

      </View>
    );
}
export default RouterScreen;