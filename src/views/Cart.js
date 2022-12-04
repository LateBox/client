import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { TouchableOpacity } from 'react-native-web';



const Cart = () => {
  
    return (
    <View style={styles.main}>
            <View style={styles.above}>
                
                <Text style={styles.text1}>Your order from</Text>
                <Text style={styles.text2}>###RestaurantName###{"\n"}{"\n"}</Text>
                <Image source={{uri: 'https://github.com/LateBox/latebox/blob/main/SVGS/map.png?raw=true'}}
                        style={styles.logo} />
            </View>
          
            <View style={styles.middle}>
                <Text style={styles.text3}>Pickup this order at</Text>
                <Text style={styles.text4}>###Address of restaurant###{"\n"}{"\n"}</Text>
            </View>
            <View style={styles.bottompage}>
                    <Image source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/time.svg'}}
                        style={styles.time} />
                        <Text style={styles.text3}>Pickup time</Text>
                        <Text style={styles.text3}>15-30 min</Text>
            </View>
            <View style={styles.bottompage2}>
            <Text style={styles.text5}>Items</Text>

                    <Image source={{uri: 'https://github.com/LateBox/latebox/blob/main/SVGS/cart.png?raw=true'}}
                        style={styles.logo2} />

            <Text style={styles.text5}>Total</Text>
            <Text style={styles.text5}>Subtotal</Text>
            <Text style={styles.text5}>Tax</Text>


                    
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
        marginTop:"3%",
        height:"182%"
      },
      middle: {
        backgroundColor:"white",
        height:"82%",
        alignItems:"center",
      },
  
      logo: {
        width: "82%",
        height: "67%",

      },
       logo2: {
        width: "50%",
        height: "50%",

      },
      time: {
        width: "6%",
        height: "145%",

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
      },
      text5: {
        alignItems:"left",
        justifyContent:"left",
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft:"4%",
      },
      text4: {
        alignItems:"center",
        justifyContent:"center",
        fontSize: 13.8,
      },
      bottompage: {
        flexDirection:"row",
        padding:1,
        display: "flex",
        justifyContent:"space-around",
        marginLeft:"2",
        backgroundColor:"white",
        


      },
      bottompage2: {
        backgroundColor:"white",


      },
      circlemain: {
        width: "7px",
        height: "7px",
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

