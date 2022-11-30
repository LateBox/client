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
} from "react-native";
import { useIsFocused } from "@react-navigation/native";
import currentUrl from "../constants/urls";

import { icons, COLORS, SIZES, FONTS } from "../constants";
import SigninScreen from "./SigninScreen";

function ShowBoxScreen({ navigation, props }) {
  const [restaurant, setRestaurant] = React.useState(null);

  React.useEffect(() => {
    setRestaurant();
  });

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
            <Text style={{ ...FONTS.h3 }}>Restaurant Name</Text>
          </View>
        </View>
      </View>
    );
  };

  const renderFoodInfo = () => {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
      >
        {restaurant?.menu.map((item, index) => (
          <View key={"menu-${index}"} style={{ alignItems: "center" }}>
            <View style={{ height: SIZES.height * 0.35 }}>
              {/* Food Image */}
              <Image
                source={item.photo}
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
                >
                  <Text style={{ ...FONTS.body1 }}>-</Text>
                </TouchableOpacity>
                <View
                  style={{
                    width: 50,
                    backgroundColor: COLORS.white,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ ...FONTS.h2 }}>5</Text>
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
                >
                  <Text style={{ ...FONTS.body1 }}>+</Text>
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
                style={{ marginVertical: 10, textAlign: "center", ...FONTS.h2 }}
              >
                {item.name} - {item.price.toFixed(2)}
              </Text>
              <Text style={{ ...FONTS.body3 }}>{item.description}</Text>
            </View>
          </View>
        ))}
      </Animated.ScrollView>
    );
  };

  return (
    <SafeAreaView style={styles.container}>{renderHeader()}</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray2,
  },
  mainContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  topBar: {
    alignItems: "center",
    backgroundColor: "rgba(241, 136, 97, 0.8)",
    height: "24%",
  },
  body: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  image: {
    marginBottom: 40,
  },
  input: {
    marginTop: "2%",
    width: "80%",
    backgroundColor: "rgba(245, 220, 189, 0.4)",
    borderRadius: 25,
    height: 30,
    color: "black",
    marginBottom: "6%",
    justifyContent: "center",
    padding: 20,
    fontSize: 12,
  },

  signUpBtn: {
    width: "65%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 70,
    backgroundColor: "rgba(33, 33, 98, 0.8)",
  },
  signUpBtnTxt: {
    color: "white",
  },
  titleText: {
    marginTop: 40,
    fontSize: 28,
    color: "#141445",
  },
  existing: {
    height: 10,
    marginBottom: 20,
    fontSize: 14,
    color: "#141445",
    marginTop: 17,
  },
  sentence: {
    fontSize: 10,
    color: "#8F8E8E",
  },
});

export default ShowBoxScreen;
