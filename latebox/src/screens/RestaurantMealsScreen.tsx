import { View, Text, StyleSheet } from "react-native";

const RestaurantMealsScreen = () => {
    return(
        <View style={styles.screen}>
            <Text>
                Restaurant Meals Screen!
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default RestaurantMealsScreen;