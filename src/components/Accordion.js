import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Button } from "react-native";

import Collapsible from "react-native-collapsible";
import { Slider } from "@miblanchard/react-native-slider";
import { TextInput } from "react-native";

const Accordion = () => {
  const [isCollapsed, setIsCollapsed] = React.useState(true);
  const [value, setValue] = React.useState(5);
  const [enteredAddressText, setEnteredAddressText] = React.useState("");
  const [currentAddress, setCurrentAddress] = React.useState("");

  const toggleExpanded = () => {
    return setIsCollapsed(!isCollapsed);
  };

  const addressInputHandler = (enteredAddressText) => {
    setEnteredAddressText(enteredAddressText);
  };

  const addAddressHandler = () => {
    setCurrentAddress(enteredAddressText);
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleExpanded}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Adjust range</Text>
        </View>
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsed}>
        <View style={styles.content}>
          <View>
            <TextInput
              placeholder="enter new address"
              onChangeText={addressInputHandler}
            />
            <Button title="change address" onPress={addAddressHandler} />
            <View>
              <Text>{currentAddress}</Text>
            </View>
          </View>
          <View>
            <Slider
              value={value}
              maximumValue={20}
              minimumValue={1}
              onValueChange={(value) => setValue(value)}
            />
            <Text>Current distance range: {parseInt(value, 10)}</Text>
          </View>
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
