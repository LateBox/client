import * as React from 'react';
import { 
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    View,
    Dimensions,
} from 'react-native';
import THEME from "../constants/theme";
const { width, height } = Dimensions.get('window');
const buttonHeight = height / 16;


export default function LateboxButton({ text, image, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Image
              source={image}
              resizeMode="contain"
              style={styles.buttonImage}
        />
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    flexDirection: 'row', // so that text and icon are next to each other
    borderRadius: 1,
    paddingVertical: 2, // top bottom
    paddingHorizontal: 10, // left right
    backgroundColor: THEME.COLORS.WHITE,
    width: width,
    height: buttonHeight,
    justifyContent: 'flex-start',/* horizontal alignment */
    alignItems: 'center', /* vertical alignment */
    marginTop: 2, // distance between buttons
  },
  buttonText: {
    display: 'flex',
    color: THEME.COLORS.TEXT,
    fontWeight: '500',
    fontSize: 16,
    textAlign: 'left',
  },
  buttonImage: {
    display: 'flex',
    width: width/8,
    height: buttonHeight/2,
    tintColor: THEME.COLORS.ICON,
  },
});