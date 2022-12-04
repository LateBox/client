import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

function AccountInfo3({ navigation }) {
    return (
    <View>
        <View style={styles.above}>
            <TouchableHighlight style={styles.roundshape}>
            <Image source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/tel.png'}}
                style={styles.logo} />
            </TouchableHighlight>
        </View>
        <View style={styles.under}>
            <Text style={styles.maintext}>GET NOTIFIED BASED ON YOUR</Text>
            <Text style={styles.maintext}>PREFERENCES</Text>
            <Text>
            {"\n"}
          </Text>
            <Text style={styles.secondtext}>We'll let you know if there's a box you would</Text>
            <Text style={styles.secondtext}>like near you{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>
        </View>

        <View style={styles.bottompage}>
            <Text onPress={() => navigation.navigate('ShowBox')} style={styles.textskip}>SKIP</Text>

            <View style={styles.circles}>
              <View style={styles.circle}>
              </View>
              <View style={styles.circle}>
              </View>
              <View style={styles.circlemain}>
              </View>
              <View style={styles.circle}>
              </View>
            </View>

            <Text onPress={() => navigation.navigate('AccountPreferences')} style={styles.textnext}>NEXT</Text>

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
        width: "90%",
        height: "90%",
        alignItems:"center",
        justifyContent:"center",
        left: "13%",
        top: "18%",

      },
      under: {
        alignItems:"center",
        justifyContent:"center",
        top:"160%",

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
        top:"127%"


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



export default AccountInfo3;

