import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Platform } from 'react-native';

import NearMeScreen from '../screens/NearMeScreen';
import Colors from '../constants/Colors';

const productsNavigator = createStackNavigator({
    ProductsOverview: NearMeScreen
},{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary: ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white': Colors.primary,
    }
});

export default createAppContainer(productsNavigator)