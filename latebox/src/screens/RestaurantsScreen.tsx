import Restaurant from "../models/restaurant";
import { View, Text, StyleSheet } from "react-native";

const RestaurantsScreen: React.FC<{items: Restaurant[]}> = (props) => {
    return(
        <View style={styles.screen}>
            {props.items.map((item => <Text key={item.id}>{item.title}</Text>))}
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default RestaurantsScreen;