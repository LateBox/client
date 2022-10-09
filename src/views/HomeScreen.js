import { FlatList, View, Button, StyleSheet } from "react-native";
import RestaurantItem from "../components/RestaurantItem";

import PRODUCTS from "../data/dummy-data";

function HomeScreen(props, { navigation }) {
  return (
    <View>
      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <RestaurantItem
            image={itemData.item.imageURL}
            title={itemData.item.title}
            price={itemData.item.price}
            onViewDetail={() => props.navigation.navigate("Second")}
            onAddToCart={() => {}}
          />
        )}
      />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  title: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 300,
    margin: 20,
    overflow: "hidden",
  },
});
