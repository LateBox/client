import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import { Platform } from "react-native-web";
import { Colors } from "../constants/Colors";
import Product from "./Product";

const RestaurantItem = (props) => {
  let TouchableComp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.restaurant}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: props.image }} />
      </View>
      <View>
        <Product
          image={props.image}
          title={props.title}
          price={props.price}
          onViewDetail={props.onViewDetail}
          onAddToCart={() => {}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  restaurant: {
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
  imageContainer: {
    width: "100%",
    height: "40%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  logoContainer: {
    width: "20%",
    height: "22%",
    borderRadius: (10, 10, 10, 10),
    overflow: "hidden",
    margin: (3, 3, 3, 3),
    padding: 5,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  image2: {
    width: "10%",
    height: "10% ",
  },
  details: {
    alignItems: "center",
    height: "15%",
    padding: 10,
  },
  title: {
    fontSize: 18,
    marginVertical: 4,
  },
  price: {
    fontSize: 14,
    color: "#888",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "25%",
    paddingHorizontal: 20,
  },
});

export default RestaurantItem;
