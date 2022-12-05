import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight,TouchableOpacity } from 'react-native';


function WelcomeScreen({ navigation }) {
  //  const timer = setTimeout(() => {
  //   () => navigation.navigate('Login');
  //   }, 1000);
  return (
    
    <TouchableOpacity style={styles.title} onPress={() => navigation.navigate('Home')}>

        <View style={styles.welcomeview}>

            <Text style={styles.welcometext}>Welcome Jad Bennis</Text>
            <Text style={styles.description}>How are you doing today?</Text>
            <Image style={styles.logo1} source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/EmojiHome.png'}} />

            <></>
        </View>



        

       <Image style={styles.logo2} source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/BlueLateBox.png'}} />
       
    </TouchableOpacity>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({


    welcometext:{
        borderStyle: 'solid',
        justifyContent: 'center',
        color: "#212162",
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
    },

    description:{
        borderStyle: 'solid',
        justifyContent: 'center',
        fontSize: 20,
        textAlign: 'center',
    },

    welcomeview:{
        height: "60%",
        top:"8%",
        right:"8%",
    },
    title: {
        
        alignItems: "center",
        flex : 1,
        width: "120%",
        height: "100%",
        // justifyContent:"center",
      },
      logo1:{
        width: 177,
        height: 191,
        top:"38%",
        left: "8%",

    },
    logo2: {
        width: "30%",
        padding:"10%",
        height: "15%",
        right: "7%",
        top:"20%",

    },




});
