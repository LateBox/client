import React from 'react';
import { StyleSheet, Button, Text, View, Image, TouchableHighlight } from 'react-native';

function AccountInfo1({ navigation }) {

    return (
    <View>
        <View style={styles.above}>
            <TouchableHighlight style={styles.roundshape}>
            <Image source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/bag.png'}}
                style={styles.logo} />
            </TouchableHighlight>
        </View>
        <View style={styles.under}>
            <Text style={styles.maintext}>A PLANET WITH NO FOOD WASTE</Text>
            <Text>
            {"\n"}
          </Text>
            <Text style={styles.secondtext}>Perfectly good, surplus food from your</Text>
            <Text style={styles.secondtext}>local stores. It’s always a surprise</Text>
            <Text style={styles.secondtext}>and an instant good deed for the planet.</Text>
            <Text style={styles.secondtext}>planet.{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>
        </View>

        <View style={styles.bottompage}>
            <Text onPress={() => navigation.navigate('ShowBox')} style={styles.textskip}>SKIP</Text>

            <View style={styles.circles}>
              <View style={styles.circlemain}>
              </View>
              <View style={styles.circle}>
              </View>
              <View style={styles.circle}>
              </View>
              <View style={styles.circle}>
              </View>
            </View>

            <Text onPress={() => navigation.navigate('NewAccount2')} style={styles.textnext}>NEXT</Text>

        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    above: {
      flex: 1,
      alignItems:"center"
    },
    item: {
      alignSelf: "center",
      color:"white"
    },
    logo: {
        width: "80%",
        height: "90%",
        alignItems:"center",
        justifyContent:"center",
        left: "10%",
        top: "20%",

      },
      under: {
        alignItems:"center",
        justifyContent:"center",
        top:"160%"

      },
      maintext: {
        alignItems:"center",
        justifyContent:"center",
        fontWeight: 'bold',
        fontSize: 18,
      },
      secondtext: {
        alignItems:"center",
        justifyContent:"center",
        fontSize: 14,

      },
      bottompage: {
        flexDirection:"row",
        padding:1,
        display: "flex",
        justifyContent:'space-around',
        top:"125%"

        
      },
      circles: {
        marginTop: "2%",
        display: "flex",
        width: "20%",
        flexDirection:"row",
        justifyContent:'space-between'


      },
      circlemain: {
        width: "9%",
        height: "60%",
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
    roundshape:  {
      backgroundColor: '#f18861',
      top: -150,
      height: 600, 
      width: 300, 
      justifyContent:"center",
      borderRadius: 150   
    },
    textskip: {
      alignItems:"center",
      justifyContent:"center",
      fontWeight: 'bold',
      fontSize: 16,
    },
    textnext: {
      alignItems:"center",
      justifyContent:"center",
      fontWeight: 'bold',
      fontSize: 16,
    },
});



export default AccountInfo1;

