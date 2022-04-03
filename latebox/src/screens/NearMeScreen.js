import { FlatList, Text } from "react-native";
import { useSelector } from "react-redux";

import RestaurantItem from "../components/shop/RestaurantItem";

const StoreItem = (props) => {};

const NearMeScreen = (props) => {
  const products = useSelector((state) => state.products.availableProducts);

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <RestaurantItem
          image={itemData.item.imageURL}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetail={() => {}}
          onAddToCart={() => {}}
        />
      )}
    />
  );
};

NearMeScreen.navigationOptions = {
  headerTitle: "All Restaurants",
};

export default NearMeScreen;
