import Restaurant from "../models/restaurant";
import { Text, View } from "react-native";

const Restaurants: React.FC<{items: Restaurant[]}> = (props) => {

  return(
    <View>
      {props.items.map((item => <Text key={item.id}>{item.title}</Text>))}
    </View>
  );

};

export default Restaurants;