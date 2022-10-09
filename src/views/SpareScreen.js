import * as React from 'react';
import { Button, View, Text } from 'react-native';

function SpareScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>This is a spare screen test your code in it if you wish</Text>
        <Button title="Return to Router" onPress={() => navigation.navigate('Router')} />  
      </View>
    );
}
export default SpareScreen;