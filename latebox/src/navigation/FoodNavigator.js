import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';

import NearMeScreen from '../screens/NearMeScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import Colors from '../constants/Colors';

const productsNavigator = createStackNavigator({
    NearMe: NearMeScreen,
    ProductDetail: ProductDetailScreen

},
{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary: ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white': Colors.primary,
}
});

export default createAppContainer(productsNavigator)