import * as React from 'react';
import { Button, View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator,Image, TextInput } from 'react-native';
import { useIsFocused } from "@react-navigation/native";
import currentUrl from "../constants/urls";
import {  icons } from "../constants";


function ShowBoxScreen({  navigation}) {
    const [isLoading, setLoading] = React.useState(true);
    const [data, setData] = React.useState([]);
    const [searchString, setSearchString] = React.useState('');

    const isFocused = useIsFocused();
    const setFilters = () => {};



    const getProducts = async () => {
        console.debug(currentUrl)

        try {
            if(searchString == ''){
                const response = await fetch(currentUrl + 'products',
                    {
                        method: 'GET',
                        // mode: 'no-cors',
    
                        // credentials: 'include',
                        'Access-Control-Allow-Credentials': 'true'
    
                    },
                );
                const json = await response.json();
                setData(json);
                console.log(data);
                console.log(json)
            }
            else{
                const response = await fetch(currentUrl + 'products/name/' +searchString,
                    {
                        method: 'GET',
                        // mode: 'no-cors',
    
                        // credentials: 'include',
                        'Access-Control-Allow-Credentials': 'true'
    
                    },
                );
                const json = await response.json();
                setData(json);
                console.log(data);
                console.log(json)
            }
            
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

      // this line is necessary to get the data before the html loads
    

    React.useEffect(() => {
        if(isFocused){
                getProducts();
        }
      }, [searchString]);




    return (

        <View style={styles.mainContainer}>
            
            <View style={styles.searchBar}>
            
                <TextInput
                    style={styles.input}
                    placeholder="Search for something"
                    placeholderTextColor="#a9a9a9"
                    onChangeText={value => setSearchString(value)}
                    boxNameValue={searchString}
                    autoCapitalize={"none"}
                /> 
                <TouchableOpacity style={styles.searchBtn} onPress={(setFilters)}>
                    {/* <Text style={styles.searchBtnTxt}>Filters</Text> */}
                    <Image style={styles.icon} source={icons.filters}/>

                </TouchableOpacity>

            </View>


            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                        <View style={styles.cardHolder}>
                            <View>
                                <View style={styles.singleCard}>
                                    <View style={styles.singleCardTop}>
                                        <Image source={{ uri: item.imageUri }} style={styles.cardPic}  />
                                        <View style={styles.cardText}>
                                            {/* id: {item.id}, {"\n"} */}
                                            <Text style={styles.cardTextTitle}>
                                                {item.restaurantName} {"\n"}

                                            </Text>
                                            <Text style={styles.cardTextAddress}>
                                                {item.restaurantAddress} {"\n"}{"\n"}

                                            </Text>
                                            <Text style={styles.cardTextDescription}>
                                                {item.description}{"\n"}{"\n"}

                                            </Text>
                                            <Text style={styles.cardTextRating}>
                                                {item.rating + '/5  ⭐'}

                                            </Text>

                                        </View>
                                    </View>
                                    <View style={styles.singleCardBottom}>

                                        <Text style={styles.cardTextPrice}>$ {item.price}</Text>
                                        <Button tyle={styles.singleCardBottomButton}
                                            onPress={() =>{navigation.navigate('SingleShowBox' , {
                                                itemId: item.id})}} 
                                                // itemId: item.id});setLoading(true)}} 
                                            title="View Box"
                                            color="#212162"
                                            accessibilityLabel="Learn more about this purple button"
                                        />
                                    </View>
                                </View>


                            </View>

                                {/* <Button
                                    onPress={() =>{navigation.navigate('EditBox' , {
                                        itemId: item.id})}} 
                                        // itemId: item.id});setLoading(true)}} 
                                    title="Edit"
                                    color="#841584"
                                    accessibilityLabel="Learn more about this purple button"
                                /> */}
                        </View> 
                    )}
                />
                
            )}
            {/* {isLoading ? console.log(data) : console.log("nothing here")} */}
            

            
            {/* <Button title="Sign up" onPress={() => navigation.navigate('Login')} />

                <Button title="Go to Home" onPress={() => navigation.navigate('Home')} /> */}




        </View>


    );
}

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    topBar: {
        alignItems: 'center',
        backgroundColor: 'rgba(241, 136, 97, 0.8)',
        height: '24%',
    },
    searchBar: {
        flexDirection: 'row' ,
        margin:10,
        justifyContent:'space-between'

    },
    body: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',

    },
    image: {
        marginBottom: 40,

    },
    input: {
        width: "90%",
        backgroundColor: 'rgba(245, 220, 189, 0.4)',
        borderRadius: 25,
        height: 40,
        color: "black",
        justifyContent: "center",
        padding: 5,
        paddingLeft: 15,
        fontSize: 12,
    },
        cardHolder:{
        // margin:'100px 100px 100px 100px',
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:20,
        paddingRight:20,

    },
    singleCard:{
        // margin:'100px 100px 100px 100px',
        backgroundColor:'#FFFFFF',
        paddingTop:10,
        // paddingBottom:10,
        // paddingLeft:20,
        // paddingRight:20,
        borderRadius:10,
    },
    singleCardTop:{
        // margin:'100px 100px 100px 100px',
        backgroundColor:'#FFFFFF',
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:40,
        paddingRight:40,
        flexDirection: 'row' ,
    },
    singleCardBottom:{
        // margin:'100px 100px 100px 100px',
        backgroundColor:'rgba(198, 198, 198,0.4)',
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:40,
        paddingRight:40,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
        flexDirection: 'row' ,
        justifyContent:'space-between'
    },
    singleCardBottomButton:{
        // margin:'100px 100px 100px 100px',
        backgroundColor:'rgba(198, 198, 198,0.5)',
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:40,
        paddingRight:40,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
        borderRadius: 25,

    },

    
    cardPic:{
        // margin: '10px 10px 10px 10px',
        width: 150, 
        height: 150,

    },
    cardText:{
        width:'60%',
        flexDirecton: 'row' ,
        height: '100%',
        paddingLeft:10,


    },
    cardTextTitle:{
        flexDirecton: 'row' ,
        // height: '40%',
        paddingLeft:5,
        fontSize:26,


    },
    cardTextAddress:{
        paddingLeft:5,

        fontSize:12,

    },
    cardTextDescription:{
        flexDirecton: 'row' ,
        // height: '60%',
        paddingLeft:5,


    },
    cardTextRating:{
        flexDirecton: 'row' ,
        // height: '60%',
        paddingLeft:5,


    },

    cardTextPrice:{

        fontSize:26,


    },



    searchBtn: {
        width: "10%",
        alignItems: "center",
        justifyContent: "center",
        // marginTop: 10,
        
        // backgroundColor: "rgba(33, 33, 98, 0.8)",
    },
    icon: {
        width: 25,
        height: 25,
        
    },
    searchBtnTxt: {
        color: "white",

    },
    titleText: {
        marginTop: 40,
        fontSize: 28,
        color: "#141445",
    },
    existing: {
        height: 10,
        marginBottom: 20,
        fontSize: 14,
        color: "#141445",
        marginTop: 17,
    },
    sentence: {

        fontSize: 10,
        color: "#8F8E8E",
    },



});


export default ShowBoxScreen;
