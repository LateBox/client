import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { TouchableOpacity } from 'react-native-web';


const Cart = () => {
    return (
    <View>
            <View style={styles.above}>
                
                
            
                <Text style={styles.text1}>Your order from</Text>
                <Text style={styles.text2}>###RestaurantName###{"\n"}{"\n"}</Text>
        
           
                    <Image source={{uri: 'https://github.com/LateBox/latebox/blob/main/SVGS/map.png?raw=true'}}
                        style={styles.logo} />
                

                <Text style={styles.text3}>{"\n"}Pickup this order at</Text>
                <Text style={styles.text4}>###Address of restaurant###{"\n"}{"\n"}</Text>
                <Image source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/time.svg'}}
                        style={styles.time} />
        </View>

    </View>
    );
}

const styles = StyleSheet.create({
    above: {

        alignItems:"center",
        marginTop:"3%",
      },
  
      roundshape:  {
        width: "100%",
        height: "116%",
        justifyContent:'center',
        alignItems: 'center',
      },
      logo: {
        width: "89%",
        height: "110%",

      },
      time: {
        width: "62%",
        height: "100%",

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
        fontSize: 13.8,
        fontWeight: 'bold',
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
        justifyContent:'space-around'

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

