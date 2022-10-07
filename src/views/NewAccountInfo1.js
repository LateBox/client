import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';





const AccountInfo1 = () => {
    return (
    <View>
        <View style={styles.above}>
            <TouchableHighlight style={styles.roundshape}>
            <Image source={{uri: 'https://svgshare.com/i/n27.svg'}}
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
            <Text style={styles.secondtext}>planet.</Text>
        </View>

        <View style={styles.bottompage}>
            <Text style={styles.maintext}>SKIP</Text>

            <View style={styles.circlemain}>
            </View>
            <View style={styles.circle}>
            </View>
            <View style={styles.circle}>
            </View>
            <Text style={styles.maintext}>NEXT</Text>

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
        bottom: 100,

      },
      maintext: {
        alignItems:"center",
        justifyContent:"center",
        fontWeight: 'bold',
        fontSize: 16,

      },
      secondtext: {
        alignItems:"center",
        justifyContent:"center",
        fontSize: 12,

      },
      bottompage: {
        flexDirection:"row",
        justifyContent:'space-between',
        padding:1,


      },
      circlemain: {
        width: 10,
        height: 10,
        borderRadius: 100 / 2,
        backgroundColor: "#212162",
        flexDirection:"row",

      },
      circle: {
        width: 10,
        height: 10,
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
    }
});



export default AccountInfo1;

