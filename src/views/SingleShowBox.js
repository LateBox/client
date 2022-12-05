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
import Cart from './Cart';


import { icons, COLORS, SIZES, FONTS, images } from "../constants";
import SigninScreen from "./SigninScreen";

function SingleShowBox({ navigation, route }) {
  const scrollX = new Animated.Value(0);
  const [boxName, setBoxName] = React.useState("Box Name");
  const [description, setDescription] = React.useState("description");
  const [price, setPrice] = React.useState(5);
  const [restaurantId, setRestaurantId] = React.useState("restaurantId");
  const [stock, setStock] = React.useState("stock");
  const [restaurantName, setRestaurantName] = React.useState('restaurantName');
  const [restaurantAddress, setRestaurantAddress] = React.useState('restaurantAddress');
  const [imageUri, setImageUri] = React.useState("imageUri");
  // const itemId = 101;
  const [orderQuantity, setOrderQuantity] = React.useState(1);
  const [rating, setRating] = React.useState('rating');
  const initialPrice = 5;
  const itemId  = route.params.itemId;

  // React.useEffect(() => {
  //   setRestaurant();
  // });

  const Increment = () => {
    setOrderQuantity(orderQuantity + 1);
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
      setRestaurantName(json.restaurantName);
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


  // OK


  return (
    <View style={styles.mainContainer}>
      <View>
        <View key={`menu-${itemId}`} style={{ alignItems: "center" }}>
          <View style={{ height: SIZES.height * 0.35 }}>
            {/* Food Image */}
            <Image
              source={{uri:imageUri}}
              resizeMode="cover"
              style={{
                width: SIZES.width,
                height: "100%",
                marginTop:40,
              }}
            />
            <Text
              style={{
                marginVertical: 10,
                textAlign: "center",
                padding: 20,
                fontSize:30,
              }}
            >
               {restaurantName}
            </Text>
            <Text
              style={{
                marginVertical: 10,
                textAlign: "center",
                padding: 20,
              }}
            >
               {boxName}
            </Text>
            

            {/* Quantity */}
            <View
              style={{
                position: "absolute",
                bottom: -200,
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
              marginTop: 200,
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
               ${price} / Box
            </Text>
            <View >
              <Text
              style={{
                fontSize:20
              }}
              >
              {description}
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
          <TouchableOpacity style={styles.toCartButton} onPress={() => navigation.navigate('Home')}>
            <Text 
            style={{color:'white'}} 
            >Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>

  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
},
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray2,
  },
  buttonStyle:{
    backgroundColor:"#c6c6c6",
    width: '23%',
    height: '5%',
    alignItems: "center",
    padding: 10,
    flexDirection:"row",
    borderRadius: 100,
    marginLeft: "-70%",
    marginTop:"4%",
  },
  icon: {
    width: "30%",
    height: "170%",
    // alignItems:"left",
    // justifyContent:"left",
    aspectratio: "1.4"

  },
  toCartButton: {
    width: "65%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    marginTop: 100,
    justifyContent: "center",
    backgroundColor: "#212162",
  },
});

export default SingleShowBox;
