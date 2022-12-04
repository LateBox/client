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
                <Text style={styles.text3}>Pickup this order at</Text>
                <Text style={styles.text4}>###Address of restaurant###{"\n"}{"\n"}</Text>
            </View>
          
            {/* <View style={styles.middle}>
                <Text style={styles.text3}>Pickup this order at</Text>
                <Text style={styles.text4}>###Address of restaurant###{"\n"}{"\n"}</Text>
            </View> */}

            <View style={styles.bottompage}>
                    <Image source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/time.svg'}}
                        style={styles.time} />
                        <Text style={styles.text3}>Pickup time</Text>
                        <Text style={styles.text3}>15-30 min</Text>
            </View>

            <View style={styles.itemslog}>

              <Image source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/surprise.png'}}
                      style={styles.logo2} />
              <View>
                <Text style={styles.textLateBox}>LATE BOX</Text>
                <Text style={styles.textinfolate}>some information about this box</Text>
                <Text style = {styles.finalcircle}>1 x</Text>
                {/* <View style={styles.circle}></View> */}
              
                
              </View>


            </View>
                    
          <View style={styles.bottompage2}>
            <View style = {styles.payments}>
                <Text style={styles.text5}>Total{"\n"}{"\n"}</Text>
                <Text style={styles.text5}>                                                                  67${"\n"}{"\n"}</Text>
            
            </View>

            <View style = {styles.payments}>
            <Text style={styles.text6}>Subtotal{"\n"}</Text>
                <Text style={styles.text6}>                                                              60${"\n"}</Text>
            
            </View>

            <View style = {styles.payments}>
            <Text style={styles.text6}>Tax</Text>
                <Text style={styles.text6}>                                                                      7$</Text>
            
            </View>
                    
          </View>

          <View>
              <TouchableOpacity style={styles.loginBtn}>
              <Text style={styles.loginBtnTxt} >Pay Now</Text>
              </TouchableOpacity>

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
        height:"100%"
      },

      loginBtn: {
        width: "100%",
        borderRadius: 20,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        
        backgroundColor: "rgba(33, 33, 98, 0.8)",
      },
      loginBtnTxt: {
        color: "white",
        alignItems: "center",
        justifyContent: "center",
      },
      middle: {
        backgroundColor:"white",
        height:"40%",
        alignItems:"center",
      },

      payments:{
        flexDirection: "row",
      },
      finalcircle:{
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        color: 'white',
        borderColor: '#f18861',
        backgroundColor: '#f18861',
        borderStyle: 'solid',
        justifyContent: 'center',
        fontSize: 24,
        textAlign: 'center',

      },
      itemslog: {
        flexDirection: "row",
        backgroundColor:"white",
        height:"60%",
        alignItems:"center",
        justifyContent:"space-around",
      },
  
      logo: {
        width: "82%",
        height: "35%",

      },
       logo2: {
        width: "30%",
        height: "90%",

      },
      time: {
        width: "6%",
        height: "35%",

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
        fontSize: 14,

      },
      textLateBox: {
        alignItems:"center",
        justifyContent:"center",
        fontSize: 18,
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
      },
      text5: {
        alignItems:"left",
        justifyContent:"left",
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft:"4%",
      },
      text6: {
        alignItems:"left",
        justifyContent:"left",
        fontSize: 15,
        
        marginLeft:"4%",
      },
      text4: {
        alignItems:"center",
        justifyContent:"center",
        fontSize: 13.8,
      },
      bottompage: {
        flexDirection:"row",
        height: "23%",
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

