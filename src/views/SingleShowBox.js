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
        >
          {/* <Image
            source={icons.star}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          /> */}
        </TouchableOpacity>
      </View>
    );
  };

  function renderFoodInfo() {
    return (
      <View
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      >
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
            {/* Name & Description */}
            <View
              style={{
                bottom: -20,
                width: SIZES.width,
                alignItems: "center",
                marginTop: 15,
                paddingHorizontal: SIZES.padding * 2,
              }}
            >
              <Text
                style={{
                  padding: 30,
                }}
              >
                some food description
              </Text>
            </View>

            {/* Price */}
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
            </View>

            {/* Add to Cart */}
            <TouchableOpacity
              style={{
                height: 50,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: SIZES.radius,
                paddingHorizontal: SIZES.padding * 3,
                backgroundColor: COLORS.lightGray3,
              }}
              onPress={''}
            >
              <Text>Add to Cart</Text>
            </TouchableOpacity>
          </View>
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
    marginLeft: 95,
    width: 200,
    backgroundColor: COLORS.white,
    borderColor: COLORS.black,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 25,
  },
});

export default SingleShowBox;
