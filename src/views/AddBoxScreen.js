import * as React from 'react';
import { Button, View, Text, StyleSheet, TextInput, TouchableOpacity,Image } from 'react-native';
import currentUrl from "../constants/urls";
import ShowBoxScreen from './ShowBoxScreen';
import * as ImagePicker from 'expo-image-picker';  // not react-image-picker




function AddBoxScreen({ navigation }) {
  const [boxId, setboxId] = React.useState('0');
  const [boxName, setBoxName] = React.useState('Box Name');
  const [description, setDescription] = React.useState('description');
  const [price, setPrice] = React.useState('price');
  const [restaurantId, setRestaurantId] = React.useState('restaurantId');
  const [restaurantName, setRestaurantName] = React.useState('restaurantName');
  const [restaurantAddress, setRestaurantAddress] = React.useState('restaurantAddress');
  const [stock, setStock] = React.useState('stock');
  const [imageUri, setImageUri] = React.useState('imageUri');
  const [rating, setRating] = React.useState('rating');


  const takeImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result.uri);



    if (!result.cancelled) {
      setImageUri(result.uri);
    }
  };


  const getFromApi = () => {
    return fetch(currentUrl+'products',
                    {
                        method:'GET',
                        // mode: 'no-cors',
                        
                        // credentials: 'include',
                        'Access-Control-Allow-Credentials':'true'
                
                    },
                )
        .then((response) => response.json())
        .then((json) => {
            console.log(fullName)
            return json;
        })
        .catch((error) => {
            console.error(error);
        });
  };

  const postBox = () => {
    var data = {
      "name": boxName,
      "description": description,
      "price": price,
      "restaurantId": "0",
      "stock": stock,
      "imageUri":imageUri,
      "restaurantId":restaurantId,
      "restaurantName":restaurantName,
      "restaurantAddress":restaurantAddress,
      "rating":"3.5"
    }
    return fetch(currentUrl + 'products',
      // return fetch('http://localhost:8080/accounts',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': 'true',
        },
        // mode: 'no-cors',
        // credentials: 'include',
        body: JSON.stringify(data),

      }
    )
      .then((response) => response.json())
      .then((json) => {
        // console.log(json)
        return json;
      })
      // get the new products before moving to the show box screen
      // .then(ShowBoxScreen.getProducts)
      .then(navigation.navigate('EditBox' , {
        itemId: boxId}))
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    
      <View style={styles.mainContainer}>

    


        <View style={styles.body}>
          <Text style={styles.forgot}>
            {"\n"}
            {"\n"}
            {"\n"}
          </Text>
          



          <Text style={styles.sentence}>
            {"PLEASE ENTER THE BOX NAME                                     "}
          </Text>

          <TextInput
            style={styles.input}
            placeholder=" name"
            placeholderTextColor="#a9a9a9"
            onChangeText={value => setBoxName(value)}
            boxNameValue={boxName}
            autoCapitalize={"none"}
          />

          <Text style={styles.sentence}>
            {"PLEASE ENTER YOUR DESCRIPTION                                     "}
          </Text>

          <TextInput
            style={styles.input}
            placeholder="DESCRIPTION"
            placeholderTextColor="#a9a9a9"
            onChangeText={value => setDescription(value)}
            descriptionValue={description}
            autoCapitalize={"none"}
          />

          <Text style={styles.sentence}>
            {"PLEASE ENTER YOUR PRICE                              "}
          </Text>

          <TextInput
            style={styles.input}
            placeholder="price"
            placeholderTextColor="#a9a9a9"
            onChangeText={value => setPrice(value)}
            priceValue={price}
            autoCapitalize={"none"}
          />

          <Text style={styles.sentence}>
            {"PLEASE ENTER YOUR STOCK NUMBER                      "}
          </Text>

          <TextInput
            style={styles.input}
            keyboardType={'phone-pad'}
            placeholder="STOCK NUMBER"
            maxLength={10}
            placeholderTextColor="#a9a9a9"
            onChangeText={value => setStock(value)}
            stockValue={stock}
            autoCapitalize={"none"}
          />





          
<TouchableOpacity style={styles.photobtn} onPress={takeImage}>
<Text style={styles.signUpBtnTxt}>Upload photo</Text>
</TouchableOpacity>

      {imageUri && <Image source={{ uri: imageUri }} style={{ width: 180, height: 180 }} />}


          
          {/* <Button title="Sign up" onPress={() => navigation.navigate('Login')} />

                <Button title="Go to Home" onPress={() => navigation.navigate('Home')} /> */}


        </View>
        <TouchableOpacity style={styles.signUpBtn} onPress={postBox}>
            <Text style={styles.signUpBtnTxt}>Submit box</Text>
          </TouchableOpacity>


      </View>


  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: '110%',
    display: 'flex',
    flexDirection: 'column',
  },
  topBar: {
    alignItems: 'center',
    backgroundColor: 'rgba(241, 136, 97, 0.8)',
    height: '24%',
  },
  body: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',

  },
  photobtn: {
    width: "40%",
    borderRadius: 25,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    marginBottom:10
  },
  signUpBtnTxt: {
    color: "white",

  },
  image: {
    marginBottom: 40

  },
  input: {
    marginTop: "2%",
    width: "80%",
    backgroundColor: 'rgba(245, 220, 189, 0.4)',
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
    // marginTop: -70,
    backgroundColor: "rgba(33, 33, 98, 0.8)",
    top:-100,
    left:70
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


export default AddBoxScreen;