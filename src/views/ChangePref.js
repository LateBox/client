import {
  StyleSheet,
  Button,
  Text,
  View,
  ScrollView,
  Image,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import React, { useState } from "react";
import LateboxButton from '../components/LateboxButton';
import THEME from "../constants/theme";
import icons from "../constants/icons";


function ChangePref(props, { navigation }){{
        var halal = "halal"
        var vegan = "vegan"
        var vege = "vege"
        var gluten = "gluten"
        var lactose = "lactose"
        var indian = "indian"
        var fastfood="fastfood"
        var italian= "italian"
        var mexican= "mexican"
        var mediterranean= "mediterranean"
        var african= "african"
        var asian= "asian"
        var bakery= "bakery"

        var arr = [halal, italian, mediterranean, asian]

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
          const bg = { backgroundColor: active ? THEME.COLORS.SELECT : THEME.COLORS.UNSELECT };
          return (
            <TouchableOpacity style={[styles.buttonStyle, bg]} onPress={() => {onPress(); buttonChange(vegan);} }>
              <Image style={styles.iconStyle} source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/lettuce2.png'}}/>
              <Text>  Vegan</Text>
            </TouchableOpacity>
          );
        };

        const ButtonHalal = (props) => {
          const { color, activeColor } = props;
          const [active, setActive] = useState(true);
          const onPress = () => setActive(!active);
          const bg = { backgroundColor: active ? THEME.COLORS.SELECT : THEME.COLORS.UNSELECT };
          return (
            <TouchableOpacity style={[styles.buttonStyle, bg]} onPress={() => {onPress(); buttonChange(halal);} }>
            <Image style={styles.iconStyle} source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/halal.png'}}/>
              <Text>  Halal</Text>
            </TouchableOpacity>
          );
        };

        const ButtonVege = (props) => {
          const { color, activeColor } = props;
          const [active, setActive] = useState(false);
          const onPress = () => setActive(!active);
          const bg = { backgroundColor: active ? THEME.COLORS.SELECT : THEME.COLORS.UNSELECT };
          return (
            <TouchableOpacity style={[styles.buttonStyle, bg]} onPress={() => {onPress(); buttonChange(vege);} }>
            <Image style={styles.iconStyle} source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/vege.png'}}/>
              <Text>  Vegetarian</Text>
            </TouchableOpacity>
          );
        };

        const ButtonGluten = (props) => {
          const { color, activeColor } = props;
          const [active, setActive] = useState(false);
          const onPress = () => setActive(!active);
          const bg = { backgroundColor: active ? THEME.COLORS.SELECT : THEME.COLORS.UNSELECT };
          return (
            <TouchableOpacity style={[styles.buttonStyle, bg]} onPress={() => {onPress(); buttonChange(gluten);} }>
            <Image style={styles.iconStyle} source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/gluten.png'}}/>
              <Text>  Gluten-free</Text>
            </TouchableOpacity>
          );
        };

        const ButtonLactose = (props) => {
          const { color, activeColor } = props;
          const [active, setActive] = useState(false);
          const onPress = () => setActive(!active);
          const bg = { backgroundColor: active ? THEME.COLORS.SELECT : THEME.COLORS.UNSELECT };
          return (
            <TouchableOpacity style={[styles.buttonStyle, bg]} onPress={() => {onPress(); buttonChange(lactose);} }>
            <Image style={styles.iconStyle} source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/lactose.png'}}/>
              <Text>  Lactose-free</Text>
            </TouchableOpacity>
          );
        };

        const ButtonIndian = (props) => {
          const { color, activeColor } = props;
          const [active, setActive] = useState(false);
          const onPress = () => setActive(!active);
          const bg = { backgroundColor: active ? THEME.COLORS.SELECT : THEME.COLORS.UNSELECT };
          return (
            <TouchableOpacity style={[styles.buttonStyle, bg]} onPress={() => {onPress(); buttonChange(indian);} }>
            <Image style={styles.iconStyle} source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/indian.png'}}/>
              <Text>  Indian</Text>
            </TouchableOpacity>
          );
        };

        const ButtonFast = (props) => {
          const { color, activeColor } = props;
          const [active, setActive] = useState(false);
          const onPress = () => setActive(!active);
          const bg = { backgroundColor: active ? THEME.COLORS.SELECT : THEME.COLORS.UNSELECT };
          return (
            <TouchableOpacity style={[styles.buttonStyle, bg]} onPress={() => {onPress(); buttonChange(fastfood);} }>
            <Image style={styles.iconStyle} source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/fast.png'}}/>
              <Text>  Fast food</Text>
            </TouchableOpacity>
          );
        };

        const ButtonItalian = (props) => {
          const { color, activeColor } = props;
          const [active, setActive] = useState(true);
          const onPress = () => setActive(!active);
          const bg = { backgroundColor: active ? THEME.COLORS.SELECT : THEME.COLORS.UNSELECT };
          return (
            <TouchableOpacity style={[styles.buttonStyle, bg]} onPress={() => {onPress(); buttonChange(italian);} }>
            <Image style={styles.iconStyle} source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/pizza.png'}}/>
              <Text>  Italian</Text>
            </TouchableOpacity>
          );
        };

        const ButtonMexican = (props) => {
          const { color, activeColor } = props;
          const [active, setActive] = useState(false);
          const onPress = () => setActive(!active);
          const bg = { backgroundColor: active ? THEME.COLORS.SELECT : THEME.COLORS.UNSELECT };
          return (
            <TouchableOpacity style={[styles.buttonStyle, bg]} onPress={() => {onPress(); buttonChange(mexican);} }>
            <Image style={styles.iconStyle} source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/tacos.png'}}/>
              <Text>  Mexican</Text>
            </TouchableOpacity>
          );
        };

        const ButtonMed = (props) => {
          const { color, activeColor } = props;
          const [active, setActive] = useState(true);
          const onPress = () => setActive(!active);
          const bg = { backgroundColor: active ? THEME.COLORS.SELECT : THEME.COLORS.UNSELECT };
          return (
            <TouchableOpacity style={[styles.buttonStyle, bg]} onPress={() => {onPress(); buttonChange(mediterranean);} }>
            <Image style={styles.iconStyle} source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/kebab.png'}}/>
              <Text>  Mediterranean</Text>
            </TouchableOpacity>
          );
        };

        const ButtonAfrican = (props) => {
          const { color, activeColor } = props;
          const [active, setActive] = useState(false);
          const onPress = () => setActive(!active);
          const bg = { backgroundColor: active ? THEME.COLORS.SELECT : THEME.COLORS.UNSELECT };
          return (
            <TouchableOpacity style={[styles.buttonStyle, bg]} onPress={() => {onPress(); buttonChange(african);} }>
            <Image style={styles.iconStyle} source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/african.png'}}/>
              <Text>  African</Text>
            </TouchableOpacity>
          );
        };

        const ButtonAsian = (props) => {
          const { color, activeColor } = props;
          const [active, setActive] = useState(true);
          const onPress = () => setActive(!active);
          const bg = { backgroundColor: active ? THEME.COLORS.SELECT : THEME.COLORS.UNSELECT };
          return (
            <TouchableOpacity style={[styles.buttonStyle, bg]} onPress={() => {onPress(); buttonChange(asian);} }>
            <Image style={styles.iconStyle} source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/soup.png'}}/>
              <Text>  Asian</Text>
            </TouchableOpacity>
          );
        };

        const ButtonBakery = (props) => {
          const { color, activeColor } = props;
          const [active, setActive] = useState(false);
          const onPress = () => setActive(!active);
          const bg = { backgroundColor: active ? THEME.COLORS.SELECT : THEME.COLORS.UNSELECT };
          return (
            <TouchableOpacity style={[styles.buttonStyle, bg]} onPress={() => {onPress(); buttonChange(bakery);} }>
            <Image style={styles.iconStyle} source={{uri: 'https://raw.githubusercontent.com/LateBox/latebox/main/SVGS/cake.png'}}/>
              <Text>  Bakery</Text>
            </TouchableOpacity>
          );
        };

        return (
          <View style={styles.container}>
          <ScrollView>
            {/* <Button title="Return to Router" onPress={() => props.navigation.navigate('Router')} /> */}

            <Text style={styles.maintext}>{"\n"}Dietary Restrictions</Text>

            {/* Two items in each row because width is 50% */}
            <View style={{flexDirection:'row'}}> 
              <ButtonVegan/>
              <ButtonHalal/>
            </View>

            <View style={{flexDirection:'row'}}> 
              <ButtonVege/>
              <ButtonGluten/>
            </View>

            <View style={{flexDirection:'row'}}> 
              <ButtonLactose/>

            </View>

            <Text style={styles.maintext}>Food Preferences</Text>

            <View style={{flexDirection:'row'}}> 
              <ButtonIndian/>
              <ButtonFast/>
            </View>

            <View style={{flexDirection:'row'}}> 
              <ButtonItalian/>
              <ButtonMexican/>
            </View>

            <View style={{flexDirection:'row'}}> 
              <ButtonMed/>
              <ButtonAfrican/>
            </View>

            <View style={{flexDirection:'row'}}> 
              <ButtonAsian/>
              <ButtonBakery/>
            </View>

            {/* empty text to add space between save/cancel buttons and preference buttons */}
            <Text></Text>
            <LateboxButton text=" Cancel" image={icons.back} onPress={() => props.navigation.navigate('Home')} />
            <LateboxButton text=" Save and go back" image={icons.back} onPress={() => props.navigation.navigate('Home')} />

          </ScrollView>
        </View>      
        );
}}


const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      backgroundColor: THEME.COLORS.LIGHTGRAY2,
    },
    logo: {
      height: 300, 
      width: 300, 
    },
    buttonStyle: {
      width: '50%',
      height: 'auto',
      alignItems: "center", // vertical
      justifyContent: 'center', // horizontal
      padding: 16,
      flexDirection:"row",
      borderRadius: 50,
    },
    iconStyle: {
      width: '20%',
      height: '200%',
      resizeMode: "contain",
    },
    maintext: {
      fontSize: 20,
      padding: 16,
    },
    textback: {
      alignItems:"center",
      justifyContent:"center",
      fontWeight: 'bold',
      fontSize: 16,
    },
    textsave: {
      alignItems:"center",
      justifyContent:"center",
      fontWeight: 'bold',
      fontSize: 16,
    },
});

export default ChangePref;
