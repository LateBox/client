import * as React from 'react';
import { useState } from "react";
import { Image,Button,Switch, View, Text, StyleSheet, TextInput, TouchableOpacity,ActivityIndicator } from 'react-native';
import currentUrl from "../constants/urls";
import ShowBoxScreen from './ShowBoxScreen';

import * as ImagePicker from 'expo-image-picker';  // not react-image-picker



function EditBoxScreen({ navigation, route  }) {
  const [boxName, setBoxName] = React.useState('Box Name');
  const [description, setDescription] = React.useState('description');
  const [price, setPrice] = React.useState('price');
  const [restaurantId, setRestaurantId] = React.useState('restaurantId');
  const [restaurantName, setRestaurantName] = React.useState('restaurantName');
  const [restaurantAddress, setRestaurantAddress] = React.useState('restaurantAddress');
  const [stock, setStock] = React.useState('stock');
  const [imageUri, setImageUri] = React.useState('imageUri');
  const [rating, setRating] = React.useState('rating');

  const [isLoading, setLoading] = React.useState(true);
  const itemId  = route.params.itemId;
  // const itemId  = 0;
  // console.log(itemId);
//   const getProduct = async () => {
//     try {
//         const response = await fetch(currentUrl + 'products/19',
//             {
//                 method: 'GET',
//                 // mode: 'no-cors',

//                 // credentials: 'include',
//                 'Access-Control-Allow-Credentials': 'true'

//             },
//         );
//         const json = await response.json();
//         setBoxName(json.boxName);
//         setDescription("json.description");
//         setPrice(json.price);
//         setRestaurantId(json.restaurantId);
//         setStock(json.stock);
//         setData(json);
//         console.log(data);
         
//         console.log(json)
//     } catch (error) {
//         console.error(error);
//     } finally {
//         setLoading(false);
//     }
// }


  // const getBox = () => {
  //   return fetch(
  //               )
  //       .then((response) => response.json())
  //       .then((json) => {
          
  //       })
  //       .catch((error) => {
  //           console.error(error);
  //       });
  // };



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

  const getBox = async () => {
    try {
      const response = await fetch(
        currentUrl+'products/'+itemId,
                    {
                        method:'GET',
                        // mode: 'no-cors',
                        
                        // credentials: 'include',
                        'Access-Control-Allow-Credentials':'true'
                
                    },
      );
      const json = await response.json();
     
      setBoxName(json.name)
      setDescription(json.description)
      setPrice(json.price)
      setRestaurantId(json.restaurantId)
      setStock(json.stock)
      setImageUri(json.imageUri)
      setRating(json.rating)
      return json;
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  // getBox();

  const putBox = () => {
    var data = {
      "name": boxName,
      "description": description,
      "price": price,
      "restaurantId": "0",
      "stock": stock,
      "imageUri":imageUri

    }
    return fetch(currentUrl + 'products/'+itemId,
      // return fetch('http://localhost:8080/accounts',
      {
        method: 'PUT',
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
      .then(navigation.navigate('ShowBox'))
      .catch((error) => {
        console.error(error);
      });
  };

  const deleteBox = () => {

    return fetch(currentUrl + 'products/'+itemId,
      // return fetch('http://localhost:8080/accounts',
      {
        method: 'DELETE',
        headers: {
          // 'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': 'true',
        }
        // mode: 'no-cors',
        // credentials: 'include',
        // body: JSON.stringify(data),

      }
    )
          // get the new products before moving to the show box screen

    // .then(ShowBoxScreen.getProducts)
      .then(navigation.navigate('ShowBox'))
      .catch((error) => {
        console.error(error);
      });
  };

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  // this line is necessary to get the data before the html loads, it kinda triggers the method getBox() before returning the view
  React.useEffect(() => {
    getBox();
}, []);



  return (

    
      <View style={styles.mainContainer}>


        <View style={styles.body}>
          <Text style={styles.forgot}>
            {"\n"}
            {"\n"}
            {"\n"}
          </Text>
          

          {isLoading ? <ActivityIndicator /> : (
          <><Text style={styles.sentence}>
            {"PLEASE ENTER THE BOX NAME                                     "}
          </Text><TextInput
              style={styles.input}
              placeholderTextColor="#black"
              onChangeText={value => setBoxName(value)}
              value={boxName}
              autoCapitalize={"none"} /><Text style={styles.sentence}>
              {"PLEASE ENTER YOUR DESCRIPTION                                     "}
            </Text><TextInput
              style={styles.input}
              placeholder="DESCRIPTION"
              placeholderTextColor="#a9a9a9"
              onChangeText={value => setDescription(value)}
              value={description}
              autoCapitalize={"none"} /><Text style={styles.sentence}>
              {"PLEASE ENTER YOUR price                              "}
            </Text><TextInput
              style={styles.input}
              secureTextEntry={true}
              placeholder="price"
              placeholderTextColor="#a9a9a9"
              onChangeText={value => setPrice(value)}
              value={price}
              autoCapitalize={"none"} /><Text style={styles.sentence}>
              {"PLEASE ENTER YOUR stock NUMBER                      "}
            </Text><TextInput
              style={styles.input}
              keyboardType={'phone-pad'}
              placeholder="STOCK NUMBER"
              maxLength={10}
              placeholderTextColor="#a9a9a9"
              onChangeText={value => setStock(value)}
              value={stock}
              autoCapitalize={"none"} /></>
          )}


<TouchableOpacity style={styles.photobtn} onPress={takeImage}>
<Text style={styles.signUpBtnTxt}>Upload photo</Text>

</TouchableOpacity>
      {imageUri && <Image source={{ uri: imageUri }} style={{ width: 200, height: 200, borderRadius:25, top:5, }} />}

    <View style= {styles.notifyrows}>

      <Switch 
        trackColor={{ false: "#ececec", true: "#ececec" }}
        thumbColor={isEnabled ? "#f18861" : "#c6c6c6"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text>Notify shelters</Text>

    </View>
      
<View style={styles.buttons}>
          <TouchableOpacity style={styles.signUpBtn} onPress={putBox}>
            <Text style={styles.signUpBtnTxt}>edit box</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signUpBtn2} onPress={deleteBox}>
            <Text style={styles.signUpBtnTxt}>delete box</Text>
          </TouchableOpacity>

          {/* <Button title="Sign up" onPress={() => navigation.navigate('Login')} />

                <Button title="Go to Home" onPress={() => navigation.navigate('Home')} /> */}

</View>

        </View>


      </View>
    

  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  notifyrows:{
    top: "5%",
    flexDirection:"row",
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
  image: {
    marginBottom: 40

  },
  input: {
    marginTop: "2%",
    width: "80%",
    backgroundColor: 'rgba(245, 220, 189, 0.4)',
    borderRadius: 25,
    height: 35,
    color: "black",
    marginBottom: "6%",
    justifyContent: "center",
    paddingLeft: 11,
    fontSize: 15
  },

  signUpBtn: {
    width: "40%",
    borderRadius: 25,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 70,
    backgroundColor: "rgba(33, 33, 98, 0.8)",
    marginRight:10,
  },
  photobtn: {
    width: "40%",
    borderRadius: 25,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  signUpBtn2: {
    width: "40%",
    borderRadius: 25,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 70,
    backgroundColor: "#CF2534",
    marginRight:10,
  },
  buttons: {
    flexDirection: "row",
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


export default EditBoxScreen;