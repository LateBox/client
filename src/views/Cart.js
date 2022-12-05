import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight,Animated } from 'react-native';
import { TouchableOpacity } from 'react-native';



function Cart({ navigation,route }) {
  
  const scrollX = new Animated.Value(0);
  const [boxName, setBoxName] = React.useState("Box Name");
  const [description, setDescription] = React.useState("description");
  const [price, setPrice] = React.useState(5);
  const [restaurantId, setRestaurantId] = React.useState("restaurantId");
  const [stock, setStock] = React.useState("stock");
  const [restaurantName, setRestaurantName] = React.useState('restaurantName');
  const [restaurantAddress, setRestaurantAddress] = React.useState('restaurantAddress');
  const [imageUri, setImageUri] = React.useState("imageUri");
  const itemId = 101;
  const [orderQuantity, setOrderQuantity] = React.useState(1);
  const [rating, setRating] = React.useState('rating');
  const initialPrice = 5;
  // const itemId  = route.params.itemId;


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
    return (
      <View style={styles.main}>
        <View style={styles.above}>
          <Text style={styles.text1}>Your order from</Text>
          <Text style={styles.text2}>{restaurantName}{"\n"}{"\n"}</Text>
          <Image onPress={() => Linking.openURL('google.com')} source={{uri: 'https://github.com/LateBox/latebox/blob/main/SVGS/map.png?raw=true'}}
            style={styles.logo} />
          <Text style={styles.text3}>Pickup this order at</Text>
          <Text style={styles.text4}>{restaurantAddress}{"\n"}{"\n"}</Text>
        </View>

        <View style={styles.bottompage}>
          <Image source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/time.png'}}
            style={styles.time} />
          <Text style={styles.text3}>Pickup time</Text>
          <Text style={styles.text3}>15-30 min</Text>
        </View>

           

        <View style={styles.itemslog}>
          <Image source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/surprise.png'}}
            style={styles.logo2} />
          <View style={styles.textlatebox}>
            <Text style={styles.textLateBox}>LATE BOX</Text>
            <Text style={styles.textinfolate}>It's sort of a mystery, isn't it?</Text>
            <Text style = {styles.finalcircle}>1x</Text>              
          </View>
        </View>

        <View style={styles.bottompage}>
          <Text style={styles.text3}>{"\n"}{"\n"}{"\n"}</Text>
        </View>
            
        <View style={styles.bottompage2}>
          <View style = {styles.payments}>
            <Text style={styles.text5}>Total{"\n"}</Text>
            <Text style={styles.text52}>{(price*1.13).toFixed(2)}{"\n"}{"\n"}</Text>
          </View>
          <View style = {styles.payments}>
            <Text style={styles.text6}>Subtotal</Text>
            <Text style={styles.text62}>{(price).toFixed(2)}</Text>
          </View>
          <View style = {styles.payments}>
            <Text style={styles.text6}>Tax</Text>
            <Text style={styles.text63}>{(price*0.13).toFixed(2)}</Text>
          </View>
          <View style={styles.cartadd}>
            <TouchableOpacity style={styles.loginBtn}>
              <Text style={styles.loginBtnTxt} >order</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    );
}

const styles = StyleSheet.create({
    main: {
        backgroundColor:"white",
      },
    above: {
        backgroundColor:"white",
        alignItems:"center",
        // marginTop:"3%",
        // height:"100%"
      },
      cartadd: {
        alignItems:"center",
        padding:"7%"
       
      },
      loginBtn: {
        width: "65%",
        borderRadius: 25,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: "rgba(33, 33, 98, 0.8)",
        padding:"1%",
  
      },
      loginBtnTxt: {
        color: "white",
        fontSize:20
      },
      textlatebox: {
        marginLeft:"-18%",
      
      },

      payments:{
        flexDirection: "row",

      },
      finalcircle:{
        width: 30,
        height: 30,
        borderRadius: 20,
        borderWidth: 1,
        color: 'white',
        borderColor: '#f18861',
        backgroundColor: '#f18861',
        borderStyle: 'solid',
        justifyContent: 'center',
        fontSize: 20,
        textAlign: 'center',
        top:"29%"

      },
      itemslog: {
        flexDirection: "row",
        backgroundColor:"white",
        height:"2%",
        alignItems:"center",
        justifyContent:"space-around",
      },
  
      logo: {
        width: "73%",
        height: "37%",

      },
       logo2: {
        width: "15%",
        height: "85%",
        padding:"12%",

      },
      time: {
        width: "6%",
        height: "52%",
        padding:"3%",

      },
      circle: {
        width: 300,
        height: 400,
        borderRadius: 100 / 2,
        backgroundColor: "rgba(33, 33, 98, 0.25)",
        flexDirection:"row",
        

      },
      textinfolate:{
        alignItems:"center",
        justifyContent:"center",
        fontSize: 13,

      },
      textLateBox: {
        alignItems:"center",
        justifyContent:"center",
        fontSize: 15,
        fontWeight: 'bold',
        
      },
    
      text1: {
        alignItems:"center",
        justifyContent:"center",
        fontSize: 12,
      },
      text2: {
        alignItems:"center",
        justifyContent:"center",
        fontSize: 18,
      },
      text3: {
        alignItems:"center",
        justifyContent:"center",
        fontSize: 14.3,
        fontWeight: 'bold',
        marginLeft:10
      },
      text5: {
        // alignItems:"left",
        // justifyContent:"left",
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft:"10%",
      },
      text52: {
        // alignItems:"left",
        // justifyContent:"left",
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft:"60%",
      },
      text6: {
        // alignItems:"left",
        // justifyContent:"left",
        fontSize: 14,
        marginLeft:"10%",
      },
      text62: {
        // alignItems:"left",
        // justifyContent:"left",
        fontSize: 14,
        marginLeft:"57%",
      },
      text63: {
        // alignItems:"left",
        // justifyContent:"left",
        fontSize: 14,
        marginLeft:"64%",
      },
      text4: {
        alignItems:"center",
        justifyContent:"center",
        fontSize: 13.8,
      },
      bottompage: {
        flexDirection:"row",
        // height: "3%",
        // padding:1,
        display: "flex",
        // justifyContent:"space-around",
        marginLeft:120,
         backgroundColor:"white",
        bottom:"30%"
      },
      bottompage2: {
        backgroundColor:"white",
      },

      circlemain: {
        width: "6px",
        height: "6px",
        borderRadius: 100 / 2,
        backgroundColor: "#212162",
        flexDirection:"row",

      },
      circle: {
        width: 7,
        height: 7,
        borderRadius: 100 / 2,
        backgroundColor: "rgba(33, 33, 98, 0.25)",
        flexDirection:"row",

      },
    circles: {
      marginTop: "5px",
      display: "flex",
      width: "20%",
      flexDirection:"row",
      justifyContent:'space-between'


    },
});

export default Cart;

