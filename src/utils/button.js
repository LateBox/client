import * as React from 'react';
import { 
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    View,
    Dimensions,
} from 'react-native';
import colors from "../constants/Colors";
import icons from "../constants/icons";
const {width, height} = Dimensions.get('window');
const buttonHeight = height / 16;


export default function LateboxButton({ text, image, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
        <Image
              source={image}
              resizeMode="cover"
              style={styles.buttonImage}
            />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 22,
    paddingVertical: 14,
    paddingHorizontal: 20,
    backgroundColor: colors.primary,
    width: width,
    height: buttonHeight,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: colors.accent,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  },
  buttonImage: {
    width: width/10,
    height: buttonHeight/2,
    tintColor: colors.accent,

  },
});