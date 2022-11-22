import * as React from 'react';
import { Button, View, Text, ScrollView,Pressable,StyleSheet,Image } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';


const includeExtra = true;


const actions = [
  {
    title: 'Take Image',
    type: 'capture',
    options: {
      saveToPhotos: false,
      mediaType: 'photo',
      includeBase64: false,
      includeExtra,
    },
  },
  {
    title: 'Select Image',
    type: 'library',
    options: {
      saveToPhotos: false,
      selectionLimit: 0,
      mediaType: 'photo',
      includeBase64: false,
      includeExtra,
    },
  },

];


function SpareScreen({ navigation }) {

  const [response, setResponse] = React.useState(null);
  const onButtonPress = React.useCallback((type, options) => {
    if (type === 'capture') {
      ImagePicker.launchCamera(options, setResponse).catch((error) => {
        console.error(error);
      })
    } else {
      ImagePicker.launchImageLibrary(options, setResponse).catch((error) => {
        console.log(error);
      })
    }
  }, []);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aliceblue',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 8,
  },
  imageContainer: {
    marginVertical: 24,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>This is a spare screen test your code in it if you wish</Text>
        <Button title="Return to Router" onPress={() => navigation.navigate('Router')} />  


        <Text>🌄 React Native Image Picker</Text>
      <ScrollView>
          {actions.map(({title, type, options}) => {
            return (

              <Button
                onPress={() => onButtonPress(type, options)}
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? 'skyblue' : 'steelblue',
                  },
                  styles.container,
                  
                ]}
                title={title}>
                </Button>
            );
          })}
        <ScrollView style={styles.container}>
      <Text style={styles.text}>{JSON.stringify(response, null, 2)}</Text>
    </ScrollView>

        {response?.assets &&
          response?.assets.map((urli) => ( 
            console.log(urli),
            // (<View key={urli} style={styles.imageContainer}>
            (<View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={{uri:urli.uri}}
              />
            </View>)
          ))}
      </ScrollView>

        
      </View>
    );


}
export default SpareScreen;