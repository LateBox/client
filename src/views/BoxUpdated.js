import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight,TouchableOpacity } from 'react-native';


function BoxUpdated({ navigation,route }) {

  const [boxName, setBoxName] = React.useState("Box Name");
  const [description, setDescription] = React.useState("description");
  const [price, setPrice] = React.useState(5);
  const [restaurantId, setRestaurantId] = React.useState("restaurantId");
  const [stock, setStock] = React.useState("stock");
  const [restaurantName, setRestaurantName] = React.useState('restaurantName');
  const [restaurantAddress, setRestaurantAddress] = React.useState('45 Clarence St, Ottawa, K1N 9K1');
  const [imageUri, setImageUri] = React.useState("imageUri");
  // const itemId = 0;
  const [orderQuantity, setOrderQuantity] = React.useState(1);
  const [rating, setRating] = React.useState('rating');
  const itemId  = 0;
  console.log(itemId)

  const getBox = async () => {
    try {
      const response = await fetch(currentUrl + "products/" + itemId, {
        method: "GET",
        // mode: 'no-cors',

        // credentials: 'include',
        "Access-Control-Allow-Credentials": "true",
      });
      const json = await response.json();

      setBoxName(json.name);
      setDescription(json.description);
      setPrice(json.price);
      setRestaurantId(json.restaurantId);
      setRestaurantName(json.restaurantName);
      setRestaurantAddress(json.restaurantAddress);
      setStock(json.stock);
      setImageUri(json.imageUri);
      return json;
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };


  React.useEffect(() => {
    getBox();
  }, []);

  //  const timer = setTimeout(() => {
  //   () => navigation.navigate('Login');
  //   }, 1000);
  return (
    
    <TouchableOpacity style={styles.title} onPress={() => navigation.navigate('RestoTab')}>

        <View style={styles.welcomeview}>

            <Text style={styles.welcometext}>Box updated successfully.</Text>
            {/* <Text style={styles.description}></Text> */}
            {/* <Image style={styles.logo1} source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/EmojiHomeCropped.png'}} /> */}
            
            
        </View>

        <View style={styles.above}>
                <Text style={styles.text3}> </Text>
                <Text style={styles.text4}> {"\n"}{"\n"}</Text>
            <Image style={styles.logo1} source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/EmojiHomeCropped.png'}} /> 
            
        </View>

        <Image style={styles.logo2} source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/BlueLateBox.png'}} />
       


        

       
    </TouchableOpacity>
  );
}

export default BoxUpdated;

const styles = StyleSheet.create({


    welcometext:{
        borderStyle: 'solid',
        justifyContent: 'center',
        color: "#212162",
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        left:10
    },
    above: {
        
        alignItems:"center",
        right:"11%",
        // marginTop:"3%",
        height:"30%"
      },
    text3: {
        alignItems:"center",
        justifyContent:"center",
        fontSize: 23,
        fontWeight: 'bold',
      },
      text4: {
        alignItems:"center",
        justifyContent:"center",
        fontSize: 16,
      },

    description:{
        borderStyle: 'solid',
        justifyContent: 'center',
        fontSize: 20,
        textAlign: 'center',
    },

    welcomeview:{
        height: "30%",
        top:"10%",
        right:"13%",
    },
    title: {
        
        alignItems: "center",
        width: "130%",
        height: "100%",
        // justifyContent:"center",
      },


    logo1:{
      width: 177,
      height:105
    },


    logo2: {
        width: "30%",
        padding:"10%",
        height: "15%",
        right: "11%",
        top:"20%",

    },




});
