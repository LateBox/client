import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { TouchableOpacity } from 'react-native-web';


function WelcomeScreen(props, { navigation }) {
  //  const timer = setTimeout(() => {
  //   () => navigation.navigate('Login');
  //   }, 1000);
  return (
    
    <View style={styles.title}>

        <View style={styles.welcomeview}>

            <Text style={styles.welcometext}>Welcome Jad Bennis</Text>
            <Text style={styles.description}>How are you doing today?</Text>
            <Image style={styles.logo1} source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/EmojiHome.png'}} />

            <></>
        </View>



        

       <Image style={styles.logo2} source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/BlueLateBox.png'}} />
       
    </View>
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
        right:"14%",
    },
    title: {
        
        alignItems: "center",
        flex : 1,
        width: "120%",
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
        height: "25%",
        top:"38%",
        left: "35%",

    },



});
