import { FlatList, View,Image, Button, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect } from 'react'


function HomeScreen(props, { navigation }) {
  //  const timer = setTimeout(() => {
  //   () => navigation.navigate('Login');
  //   }, 1000);
  return (
    
    <TouchableOpacity style={styles.title} onPress={() => navigation.navigate('Login')}>

       <Image style={styles.logo2} source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/BlackLateBox.png'}} />
       
    </TouchableOpacity>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  title: {
    backgroundColor: "#f18861",
    alignItems: "center",
    flex : 1,
    width: "120%",
    height: "100%",
    justifyContent:"center",
  },

  logo2: {
    width: "50%",
    height: "25%",
    right: "7%",

  },



});
