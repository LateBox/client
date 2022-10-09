import { View, Text, StyleSheet } from "react-native";

const ProductDetailScreen = (props) => {
   
    return(
        <View>
            <Text>{selectedProduct.title}</Text>
        </View>
    );
};

ProductDetailScreen.navigationOptions = navData => {
    return{
        headerTitle: navData.navigation.getParam('productTitle')
    };
}

const styles = StyleSheet.create({});

export default ProductDetailScreen;