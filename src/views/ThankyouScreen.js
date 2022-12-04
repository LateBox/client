import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { TouchableOpacity } from 'react-native-web';


function ThankyouScreen(props, { navigation }) {
  //  const timer = setTimeout(() => {
  //   () => navigation.navigate('Login');
  //   }, 1000);
  return (
    
    <View style={styles.title}>

        <View style={styles.welcomeview}>

            <Text style={styles.welcometext}>Thank you for your order!</Text>
            {/* <Text style={styles.description}></Text> */}
            {/* <Image style={styles.logo1} source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/EmojiHomeCropped.png'}} /> */}
            
            
        </View>

        <View style={styles.above}>
                <Text style={styles.text3}>Pickup this order at</Text>
                <Text style={styles.text4}>###Address of restaurant###{"\n"}{"\n"}</Text>
            <Image style={styles.logo1} source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/EmojiHomeCropped.png'}} /> 
            
        </View>

        <Image style={styles.logo2} source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/BlueLateBox.png'}} />
       


        

       
    </View>
  );
}

export default ThankyouScreen;

const styles = StyleSheet.create({


    welcometext:{
        borderStyle: 'solid',
        justifyContent: 'center',
        color: "#212162",
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
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

    logo2: {
        width: "30%",
        padding:"10%",
        height: "15%",
        right: "7%",
        top:"20%",

    },
    logo1:{
        width: "50%",
        padding:"5%",
        height: "25%",
        right: "0%",
        top:"20%",
    },



});
