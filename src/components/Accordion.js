import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";

import Collapsible from "react-native-collapsible";

const Accordion = () => {
  const [isCollapsed, setIsCollapsed] = React.useState(true);

  const toggleExpanded = () => {
    return setIsCollapsed(!isCollapsed);
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleExpanded}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Single Collapsible</Text>
        </View>
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsed}>
        <View style={styles.content}>
          <Animatable.Text
            animation={isCollapsed ? undefined : "zoomIn"}
            duration={300}
            useNativeDriver
          >
            Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs
          </Animatable.Text>
        </View>
      </Collapsible>
    </View>
  );
};

export default Accordion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  title: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "300",
    marginBottom: 20,
  },
  header: {
    backgroundColor: "#F5FCFF",
    padding: 10,
  },
  headerText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
  content: {
    padding: 20,
    backgroundColor: "#fff",
  },
  active: {
    backgroundColor: "rgba(255,255,255,1)",
  },
  inactive: {
    backgroundColor: "rgba(245,252,255,1)",
  },
  selectors: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  selector: {
    backgroundColor: "#F5FCFF",
    padding: 10,
  },
  activeSelector: {
    fontWeight: "bold",
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: "500",
    padding: 10,
  },
  multipleToggle: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 30,
    alignItems: "center",
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
});
