import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
  SafeAreaView,
  ScrollView,
  Animated,
} from "react-native";
import { COLORS } from "./theme";

const RangeMenu = () => {
  let AnimatedHeaderValue = new Animated.Value(0);
  const Header_Max_Height = 300; //max h of the header
  const Header_Min_Height = 50; //min h of the header

  const AnimatedHeaderBackGroundColor = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: ["blue", "red"],
    extrapolate: "clamp",
  });

  const animatedHeaderHeight = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: "clamp",
  });

  return (
    <SafeAreaView>
      <Animated.View
        style={[
          styles.header,
          {
            height: animatedHeaderHeight,
            backgroundColor: AnimatedHeaderBackGroundColor,
          },
        ]}
      >
        <Text style={styles.headerText}>React native collapsible bar</Text>
      </Animated.View>
    </SafeAreaView>
  );
};

export default RangeMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0,
  },

  headerText: {
    color: COLORS.white,
    fontSize: 18,
    textAlign: "center",
  },
});
