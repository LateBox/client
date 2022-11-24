import { StyleSheet, Button, Text, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import React, { useState } from "react";



function NewAccountPreferences({ navigation }) {
    {
        var arr = []

        var halal = "halal"
        var vegan = "vegan"
        var vege = "vege"
        var gluten = "gluten"
        var lactose = "lactose"

        var indian = "indian"
        var fastfood="fastfood"
        var italian= "italian"
        var mexican= "mexican"
        var mediteranean= "mediteranean"
        var african= "african"
        var asian= "asian"
        var bakery= "bakery"


        function buttonChange(varr){
            console.log(arr);
            console.log(varr);
            if (arr.includes(varr)) {
                console.log("removing");

                return arr = arr.filter(e => e !== varr);
              }
              console.log("adding");

              return arr.push(varr);
              
        }

        return (
            
            
        <View>

            <View style={styles.above}>
                <TouchableHighlight style={styles.roundshape}>
                    <Image source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/a519091b93b168ebe7a69c9d361a3c65980ebd13/SVGS/latebox.svg'}}
                        style={styles.logo} />
                </TouchableHighlight>
                
            </View>
    
            <View style={styles.under}>
                <Text>
                    {"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}
                </Text>
                <Text style={styles.maintext}>   Dietary Restrictions</Text>
                <Text>
                    {"\n"}{"\n"}
                </Text>

                <View style={styles.row1}>

                    <TouchableOpacity
                        onPress={() => buttonChange(vegan)}
                        title="vegan"
                        color= {arr.includes("vegan")? 'black' : 'orange'}
                        style={styles.button}
                        >
                        <Image style={styles.icon} source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/lettuce2.svg'}}/>

                        <Text> Vegan</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => buttonChange(halal)}
                        title="halal"
                        color= {arr.includes("halal")? 'black' : 'orange'}
                        style={styles.button}
                        >
                        <Image style={styles.icon} source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/halal-cropped.svg'}}/>

                        <Text> Halal</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => buttonChange(vege)}
                        title="vege"
                        color= {arr.includes("vege")? 'black' : 'orange'}
                        style={styles.button2}
                        >
                        <Image style={styles.icon} source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/vegan-cropped.svg'}}/>

                        <Text> Vegetarian</Text>
                    </TouchableOpacity>

                </View>
                <Text>
                    {"\n"}
                </Text>
                <View style={styles.row2}>

                    <TouchableOpacity
                        onPress={() => buttonChange(gluten)}
                        title="gluten"
                        color= {arr.includes("gluten")? 'black' : 'orange'}
                        style={styles.button3}
                        >
                        <Image style={styles.icon2} source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/gluten-cropped.svg'}}/>

                        <Text> Gluten-free</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => buttonChange(lactose)}
                        title="lactose"
                        color= {arr.includes("lactose")? 'black' : 'orange'}
                        style={styles.button3}
                        >
                        <Image style={styles.icon2} source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/lactose-cropped.svg'}}/>

                        <Text> Lactose-free</Text>
                    </TouchableOpacity>
                </View>

                <Text>
                    {"\n"}{"\n"}{"\n"}{"\n"}{"\n"}
                   

                </Text>
                <Text style={styles.maintext}>   Food Preferences</Text>
                <Text>
                    {"\n"}{"\n"}
                </Text>

                <View style={styles.row1}>

                    <TouchableOpacity
                        onPress={() => buttonChange(indian)}
                        title="indian"
                        color= {arr.includes("indian")? 'black' : 'orange'}
                        style={styles.button4}
                        >
                        <Image style={styles.icon3} source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/indian-cropped.svg'}}/>

                        <Text>  Indian</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => buttonChange(fastfood)}
                        title="fastfood"
                        color= {arr.includes("fastfood")? 'black' : 'orange'}
                        style={styles.button4}
                        >
                        <Image style={styles.icon4} source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/fast-cropped.svg'}}/>

                        <Text> Fast food</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => buttonChange(italian)}
                        title="italian"
                        color= {arr.includes("italian")? 'black' : 'orange'}
                        style={styles.button4}
                        >
                        <Image style={styles.icon3} source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/pizza-cropped.svg'}}/>

                        <Text>  Italian</Text>
                    </TouchableOpacity>
                    </View>


                    <Text>
                    {"\n"}
                    </Text>
                <View style={styles.row2}>

                    <TouchableOpacity
                        onPress={() => buttonChange(mexican)}
                        title="mexican"
                        color= {arr.includes("mexican")? 'black' : 'orange'}
                        style={styles.button5}
                        >
                        <Image style={styles.icon5} source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/tacos-cropped.svg'}}/>

                        <Text>  Mexican</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => buttonChange(mediteranean)}
                        title="mediteranean"
                        color= {arr.includes("mediteranean")? 'black' : 'orange'}
                        style={styles.button6}
                        >
                        <Image style={styles.icon6} source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/kebab-cropped.svg'}}/>

                        <Text>  Mediteranean</Text>
                    </TouchableOpacity>
                </View>
                <Text>
                    {"\n"}
                    </Text>
                <View style={styles.row1}>

                    <TouchableOpacity
                        onPress={() => buttonChange(african)}
                        title="african"
                        color= {arr.includes("african")? 'black' : 'orange'}
                        style={styles.button4}
                        >
                        <Image style={styles.icon3} source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/african.svg'}}/>

                        <Text>  African</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => buttonChange(asian)}
                        title="asian"
                        color= {arr.includes("asian")? 'black' : 'orange'}
                        style={styles.button4}
                        >
                        <Image style={styles.icon3} source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/sopa-cropped.svg'}}/>

                        <Text> Asian</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => buttonChange(bakery)}
                        title="bakery"
                        color= {arr.includes("bakery")? 'black' : 'orange'}
                        style={styles.button4}
                        >
                        <Image style={styles.icon3} source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/cake.svg'}}/>

                        <Text>  Bakery</Text>
                    </TouchableOpacity>
                   
                    </View>
                    <Text>
                    {"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}
                </Text>
                    <View style={styles.bottompage}>
            <Text style={styles.textskip}>SKIP</Text>

            <View style={styles.circles}>
              <View style={styles.circle}>
              </View>
              <View style={styles.circle}>
              </View>
              <View style={styles.circle}>
              </View>
              <View style={styles.circlemain}>
              </View>
            </View>

            <Text onPress={() => navigation.navigate('AccountPreferences')} style={styles.textnext}>NEXT</Text>

        </View>


            </View>
         
            
        </View>
      
        );
    }
}



const styles = StyleSheet.create({
    above: {
      flex: 1,
      alignItems:"center"
    },

    roundshape:  {
      height: 300, 
      width: 300, 
      justifyContent:"center",
      borderRadius: 150   
    },
    logo: {
      width: "80%",
      height: "90%",
      alignItems:"center",
      justifyContent:"center",
      left: "10%",
      top: "-22%",

    },
    icon: {
        width: "30%",
        height: "170%",
        alignItems:"left",
        justifyContent:"left",
        aspectratio: "1.4"
  
      },
      icon2: {
        width: "20%",
        height: "95%",
        alignItems:"left",
        justifyContent:"left",
        aspectratio: "1.4"
  
      },
      icon3: {
        width: "25%",
        height: "120%",
        alignItems:"left",
        justifyContent:"left",
        aspectratio: "1.4"
  
      },
      icon4: {
        width: "25%",
        height: "150%",
        alignItems:"left",
        justifyContent:"left",
        aspectratio: "1.4"
  
      },
      icon5: {
        width: "27%",
        height: "57%",
        alignItems:"left",
        justifyContent:"left",
        aspectratio: "1.4"
  
      },
      icon6: {
        width: "15%",
        height: "80%",
        alignItems:"left",
        justifyContent:"left",
        aspectratio: "1.4"
  
      },
   
    under: {
      alignItems:"left",
      justifyContent:"center",
      bottom: "40%",
      marginLeft: "3%",

    },
      button: {
        width: '27%',
        height: '85%',
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        flexDirection:"row",
        borderRadius: 100  

      },
      button2: {
        width: '37%',
        height: '85%',
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        flexDirection:"row",
        borderRadius: 100  

      },
      button3: {
        width: '34%',
        height: '126%',
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 5,
        flexDirection:"row",
        borderRadius: 100,

      },
      button4: {
        width: '28%',
        height: '120%',
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 5,
        flexDirection:"row",
        borderRadius: 100,

      },
      button5: {
        width: '28%',
        height: '120%',
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 5,
        flexDirection:"row",
        borderRadius: 100,

      },
      button6: {
        width: '40%',
        height: '120%',
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 5,
        flexDirection:"row",
        borderRadius: 100,

      },
    maintext: {
      fontSize: 18,
    },
    row1: {
        alignItems: "center",
        flexDirection:"row", 
        justifyContent: 'space-around',
    },
    row2: {
        alignItems: "center",
        flexDirection:"row", 
        justifyContent: 'space-around',

    },
    bottompage: {
        flexDirection:"row",
        padding:1,
        display: "flex",
        justifyContent:'space-around',


      },
      circles: {
        marginTop: "5px",
        display: "flex",
        width: "20%",
        flexDirection:"row",
        justifyContent:'space-between'


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

export default NewAccountPreferences;