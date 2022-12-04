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
        const ButtonVegan = (props) => {
          const { color, activeColor } = props;
          const [active, setActive] = useState(false);
          const onPress = () => setActive(!active);
          const buttonStyle = {
              backgroundColor: active ? "rgba(241, 136, 97, 1)" : "rgba(198, 198, 198, 0.35)",
              width: '27%',
              height: '97%',
              alignItems: "center",
              padding: 10,
              flexDirection:"row",
              borderRadius: 100  
            };
          return (
            <TouchableOpacity style={buttonStyle} onPress={() => {onPress(); buttonChange(vegan);} }>
              <Image style={styles.icon} source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/lettuce2.png'}}/>
              <Text >  Vegan</Text>
            </TouchableOpacity>

          );
        };

        const ButtonHalal = (props) => {
          const { color, activeColor } = props;
          const [active, setActive] = useState(false);
          const onPress = () => setActive(!active);
          const buttonStyle = {
              backgroundColor: active ? "rgba(241, 136, 97, 1)" : "rgba(198, 198, 198, 0.35)",
              width: '25%',
              height: '97%',
              alignItems: "center",
              padding: 10,
              flexDirection:"row",
              borderRadius: 100  
            };
          return (
            <TouchableOpacity style={buttonStyle} onPress={() => {onPress(); buttonChange(halal);} }>
            <Image style={styles.icon} source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/halal.png'}}/>
              <Text >  Halal</Text>
            </TouchableOpacity>

          );
        };

        const ButtonVege = (props) => {
          const { color, activeColor } = props;
          const [active, setActive] = useState(false);
          const onPress = () => setActive(!active);
          const buttonStyle = {
              backgroundColor: active ? "rgba(241, 136, 97, 1)" : "rgba(198, 198, 198, 0.35)",
              width: '35%',
              height: '97%',
              alignItems: "center",
              padding: 10,
              flexDirection:"row",
              borderRadius: 100  
            };
          return (
            <TouchableOpacity style={buttonStyle} onPress={() => {onPress(); buttonChange(vege);} }>
            <Image style={styles.icon} source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/vege.png'}}/>
              <Text >  Vegetarian</Text>
            </TouchableOpacity>

          );
        };

        const ButtonGluten = (props) => {
          const { color, activeColor } = props;
          const [active, setActive] = useState(false);
          const onPress = () => setActive(!active);
          const buttonStyle = {
              backgroundColor: active ? "rgba(241, 136, 97, 1)" : "rgba(198, 198, 198, 0.35)",
              width: '30%',
              height: '126%',
              alignItems: "center",
              padding: 5,
              flexDirection:"row",
              borderRadius: 100,
            };
          return (
            <TouchableOpacity style={buttonStyle} onPress={() => {onPress(); buttonChange(gluten);} }>
            <Image style={styles.icon2} source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/gluten.png'}}/>
              <Text > Gluten-free</Text>
            </TouchableOpacity>

          );
        };

        const ButtonLactose = (props) => {
          const { color, activeColor } = props;
          const [active, setActive] = useState(false);
          const onPress = () => setActive(!active);
          const buttonStyle = {
              backgroundColor: active ? "rgba(241, 136, 97, 1)" : "rgba(198, 198, 198, 0.35)",
              width: '30%',
              height: '132%',
              alignItems: "center",
              padding: 5,
              flexDirection:"row",
              borderRadius: 100,
            };
          return (
            <TouchableOpacity style={buttonStyle} onPress={() => {onPress(); buttonChange(lactose);} }>
            <Image style={styles.icon2} source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/lactose.png'}}/>
              <Text > Lactose-free</Text>
            </TouchableOpacity>

          );
        };

        const ButtonIndian = (props) => {
          const { color, activeColor } = props;
          const [active, setActive] = useState(false);
          const onPress = () => setActive(!active);
          const buttonStyle = {
              backgroundColor: active ? "rgba(241, 136, 97, 1)" : "rgba(198, 198, 198, 0.35)",
              width: '24%',
              height: '124%',
              alignItems: "center",
              padding: 5,
              flexDirection:"row",
              borderRadius: 100,
            };
          return (
            <TouchableOpacity style={buttonStyle} onPress={() => {onPress(); buttonChange(indian);} }>
            <Image style={styles.icon3} source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/indian.png'}}/>
              <Text >  Indian</Text>
            </TouchableOpacity>

          );
        };

        const ButtonFast = (props) => {
          const { color, activeColor } = props;
          const [active, setActive] = useState(false);
          const onPress = () => setActive(!active);
          const buttonStyle = {
              backgroundColor: active ? "rgba(241, 136, 97, 1)" : "rgba(198, 198, 198, 0.35)",
              width: '28%',
              height: '124%',
              alignItems: "center",
              padding: 5,
              flexDirection:"row",
              borderRadius: 100,
            };
          return (
            <TouchableOpacity style={buttonStyle} onPress={() => {onPress(); buttonChange(fastfood);} }>
            <Image style={styles.icon4} source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/fast.png'}}/>
              <Text > Fast food</Text>
            </TouchableOpacity>

          );
        };

        const ButtonItalian = (props) => {
          const { color, activeColor } = props;
          const [active, setActive] = useState(false);
          const onPress = () => setActive(!active);
          const buttonStyle = {
              backgroundColor: active ? "rgba(241, 136, 97, 1)" : "rgba(198, 198, 198, 0.35)",
              width: '25%',
              height: '124%',
              alignItems: "center",
              padding: 5,
              flexDirection:"row",
              borderRadius: 100,
            };
          return (
            <TouchableOpacity style={buttonStyle} onPress={() => {onPress(); buttonChange(italian);} }>
            <Image style={styles.icon3} source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/pizza.png'}}/>
              <Text >  Italian</Text>
            </TouchableOpacity>

          );
        };

        const ButtonMexican = (props) => {
          const { color, activeColor } = props;
          const [active, setActive] = useState(false);
          const onPress = () => setActive(!active);
          const buttonStyle = {
              backgroundColor: active ? "rgba(241, 136, 97, 1)" : "rgba(198, 198, 198, 0.35)",
              width: '28%',
              height: '124%',
              alignItems: "center",
              padding: 5,
              flexDirection:"row",
              borderRadius: 100,
            };
          return (
            <TouchableOpacity style={buttonStyle} onPress={() => {onPress(); buttonChange(mexican);} }>
            <Image style={styles.icon5} source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/tacos.png'}}/>
              <Text >  Mexican</Text>
            </TouchableOpacity>

          );
        };

        const ButtonMed = (props) => {
          const { color, activeColor } = props;
          const [active, setActive] = useState(false);
          const onPress = () => setActive(!active);
          const buttonStyle = {
              backgroundColor: active ? "rgba(241, 136, 97, 1)" : "rgba(198, 198, 198, 0.35)",
              width: '35%',
              height: '124%',
              alignItems: "center",
              padding: 5,
              flexDirection:"row",
              borderRadius: 100,
            };
          return (
            <TouchableOpacity style={buttonStyle} onPress={() => {onPress(); buttonChange(mediteranean);} }>
            <Image style={styles.icon6} source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/kebab.png'}}/>
              <Text >   Mediteranean</Text>
            </TouchableOpacity>

          );
        };

        const ButtonAfrican = (props) => {
          const { color, activeColor } = props;
          const [active, setActive] = useState(false);
          const onPress = () => setActive(!active);
          const buttonStyle = {
              backgroundColor: active ? "rgba(241, 136, 97, 1)" : "rgba(198, 198, 198, 0.35)",
              width: '28%',
              height: '124%',
              alignItems: "center",
              padding: 5,
              flexDirection:"row",
              borderRadius: 100,
            };
          return (
            <TouchableOpacity style={buttonStyle} onPress={() => {onPress(); buttonChange(african);} }>
            <Image style={styles.icon3} source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/african.png'}}/>
              <Text >  African</Text>
            </TouchableOpacity>

          );
        };

        const ButtonAsian = (props) => {
          const { color, activeColor } = props;
          const [active, setActive] = useState(false);
          const onPress = () => setActive(!active);
          const buttonStyle = {
              backgroundColor: active ? "rgba(241, 136, 97, 1)" : "rgba(198, 198, 198, 0.35)",
              width: '24%',
              height: '124%',
              alignItems: "center",
              padding: 5,
              flexDirection:"row",
              borderRadius: 100,
            };
          return (
            <TouchableOpacity style={buttonStyle} onPress={() => {onPress(); buttonChange(asian);} }>
            <Image style={styles.icon3} source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/soup.png'}}/>
              <Text >   Asian</Text>
            </TouchableOpacity>

          );
        };

        const ButtonBakery = (props) => {
          const { color, activeColor } = props;
          const [active, setActive] = useState(false);
          const onPress = () => setActive(!active);
          const buttonStyle = {
              backgroundColor: active ? "rgba(241, 136, 97, 1)" : "rgba(198, 198, 198, 0.35)",
              width: '25%',
              height: '124%',
              alignItems: "center",
              padding: 5,
              flexDirection:"row",
              borderRadius: 100,
            };
          return (
            <TouchableOpacity style={buttonStyle} onPress={() => {onPress(); buttonChange(bakery);} }>
            <Image style={styles.icon3} source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/cake.png'}}/>
              <Text >   Bakery</Text>
            </TouchableOpacity>

          );
        };




        return (
            
            
        <View>

            <View style={styles.above}>
                <TouchableHighlight style={styles.roundshape}>
                    <Image source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/latebox.png'}}
                        style={styles.logo} />
                </TouchableHighlight>
                
            </View>
    
            <View style={styles.under}>
                <Text>
                    {"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}
                </Text>
                <Text style={styles.maintext}>   Dietary Restrictions</Text>
                <Text>
                    {"\n"}{"\n"}
                </Text>

                <View style={styles.row1}>
                  <ButtonVegan/>
                  <ButtonHalal/>
                  <ButtonVege/>
                </View>

                <Text>
                    {"\n"}
                </Text>

                <View style={styles.row2}>

                <ButtonGluten/>
                <ButtonLactose/>
                    
                </View>

                <Text>
                    {"\n"}{"\n"}{"\n"}{"\n"}{"\n"}
                   

                </Text>
                <Text style={styles.maintext}>   Food Preferences</Text>
                <Text>
                    {"\n"}{"\n"}
                </Text>

                <View style={styles.row1}>
                <ButtonIndian/>
                <ButtonFast/>
                <ButtonItalian/>
                    </View>

                    <Text>
                    {"\n"}
                    </Text>
                <View style={styles.row2}>

                <ButtonMexican/>
                <ButtonMed/>
                    
                </View>
                <Text>
                    {"\n"}
                    </Text>
                <View style={styles.row1}>

                <ButtonAfrican/>
                <ButtonAsian/>
                <ButtonBakery/>

                    </View>
                    <Text>
                    {"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}
                </Text>
                    <View style={styles.bottompage}>
            <Text onPress={() => navigation.navigate('ShowBox')} style={styles.textskip}>SKIP</Text>

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

            <Text onPress={() => navigation.navigate('Home')} style={styles.textnext}>NEXT</Text>

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
        // alignItems:"left",
        // justifyContent:"left",
        aspectratio: "1.4"
  
      },
      icon2: {
        width: "20%",
        height: "95%",
        // alignItems:"left",
        // justifyContent:"left",
        aspectratio: "1.4"
  
      },
      icon3: {
        width: "25%",
        height: "105%",
        // alignItems:"left",
        // justifyContent:"left",
        aspectratio: "1.4"
  
      },
      icon4: {
        width: "25%",
        height: "130%",
        // alignItems:"left",
        // justifyContent:"left",
        aspectratio: "1.4"
  
      },
      icon5: {
        width: "27%",
        height: "57%",
        // alignItems:"left",
        // justifyContent:"left",
        aspectratio: "1.4"
  
      },
      icon6: {
        width: "15%",
        height: "80%",
        // alignItems:"left",
        // justifyContent:"left",
        aspectratio: "1.4"
  
      },
   
    under: {
      // alignItems:"left",
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
