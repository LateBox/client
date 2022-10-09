import { Pressable, View, Text } from 'react-native';

function MealGridTile({title}) {
    return (
        <View style={styles.gridItem}>
            <Pressable>
                <View>
                    <Text>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default MealGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
    }
})