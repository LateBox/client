import * as React from "react";
import {
  Button,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  Animated,
  FlexBox,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";
import currentUrl from "../constants/urls";

import { icons, COLORS, SIZES, FONTS, images } from "../constants";
import SigninScreen from "./SigninScreen";

function SingleShowBox({ navigation, props }) {
  const scrollX = new Animated.Value(0);
  const [boxName, setBoxName] = React.useState("Box Name");
  const [description, setDescription] = React.useState("description");
  const [price, setPrice] = React.useState(5);
  const [restaurantId, setRestaurantId] = React.useState("restaurantId");
  const [stock, setStock] = React.useState("stock");
  const [imageUri, setImageUri] = React.useState("imageUri");
  const itemId = 3;
  const [orderQuantity, setOrderQuantity] = React.useState(1);
  const initialPrice = 5;

  // React.useEffect(() => {
  //   setRestaurant();
  // });

  const Increment = () => {
    setOrderQuantity(orderQuantity + 1);
    setPrice(price + initialPrice);
  };

  const Decrement = () => {
    if (orderQuantity > 1) {
      setOrderQuantity(orderQuantity - 1);
      setPrice(price - initialPrice);
    }
  };

  const getBox = async () => {
    try {
      const response = await fetch(currentUrl + "products/" + itemId, {
        method: "GET",
        // mode: 'no-cors',

        // credentials: 'include',
        "Access-Control-Allow-Credentials": "true",
      });
      const json = await response.json();

      setBoxName(json.name);
      setDescription(json.description);
      setPrice(json.price);
      setRestaurantId(json.restaurantId);
      setStock(json.stock);
      setImageUri(json.imageUri);
      return json;
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    getBox();
  }, []);

  const renderHeader = () => {
    return (
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={{
            width: 50,
            paddingLeft: SIZES.padding * 2,
            justifyContent: "center",
          }}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={icons.back}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>

        {/* Restaurant name section */}
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: SIZES.radius,
              paddingHorizontal: SIZES.padding * 3,
              backgroundColor: COLORS.lightGray3,
            }}
          >
            <Text>Restaurant Name</Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            width: 50,
            paddingRight: SIZES.padding * 2,
            justifyContent: "center",
          }}
        ></TouchableOpacity>
      </View>
    );
  };

  // OK

  function renderFoodInfo() {
    return (
      <View>
        <View key={`menu-${itemId}`} style={{ alignItems: "center" }}>
          <View style={{ height: SIZES.height * 0.35 }}>
            {/* Food Image */}
            <Image
              source={images.crispy_chicken_burger}
              resizeMode="cover"
              style={{
                width: SIZES.width,
                height: "100%",
              }}
            />

            {/* Quantity */}
            <View
              style={{
                position: "absolute",
                bottom: -20,
                width: SIZES.width,
                height: 50,
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <TouchableOpacity
                style={{
                  width: 50,
                  backgroundColor: COLORS.white,
                  alignItems: "center",
                  justifyContent: "center",
                  borderTopLeftRadius: 25,
                  borderBottomLeftRadius: 25,
                }}
                onPress={() => Decrement()}
              >
                <Text>-</Text>
              </TouchableOpacity>

              <View
                style={{
                  width: 50,
                  backgroundColor: COLORS.white,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text>{orderQuantity}</Text>
              </View>

              <TouchableOpacity
                style={{
                  width: 50,
                  backgroundColor: COLORS.white,
                  alignItems: "center",
                  justifyContent: "center",
                  borderTopRightRadius: 25,
                  borderBottomRightRadius: 25,
                }}
                onPress={() => Increment()}
              >
                <Text>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Name & Description */}
          <View
            style={{
              width: SIZES.width,
              alignItems: "center",
              marginTop: 15,
              paddingHorizontal: SIZES.padding * 2,
            }}
          >
            <Text
              style={{
                marginVertical: 10,
                textAlign: "center",
                padding: 20,
              }}
            >
              itemName - ${price}
            </Text>
            <View style={{ backgroundColor: COLORS.white }}>
              <Text>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </Text>
            </View>
          </View>
          {/* Price
          <View
            style={{
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
              width: 50,
              backgroundColor: COLORS.white,
              borderRadius: 25,
            }}
          >
            <Text style={{ textAlign: "center" }}>{price} $</Text>
          </View> */}
          <TouchableOpacity style={styles.toCartButton} onPress={""}>
            <Text>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {renderHeader()}
        {renderFoodInfo()}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray2,
  },
  toCartButton: {
    width: "65%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    marginTop: 100,
    justifyContent: "center",
    backgroundColor: "rgb(80, 200, 120)",
  },
});

export default SingleShowBox;
