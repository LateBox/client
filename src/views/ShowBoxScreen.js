import * as React from 'react';
import { Button, View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator,Image } from 'react-native';
import { useIsFocused } from "@react-navigation/native";
import currentUrl from "../constants/urls";


function ShowBoxScreen({  navigation}) {
    const [isLoading, setLoading] = React.useState(true);
    const [data, setData] = React.useState([]);

    const isFocused = useIsFocused();




    const getProducts = async () => {
        console.debug(currentUrl)

        try {
            const response = await fetch(currentUrl + 'products/',
                {
                    method: 'GET',
                    // mode: 'no-cors',

                    // credentials: 'include',
                    'Access-Control-Allow-Credentials': 'true'

                },
            );
            const json = await response.json();
            setData(json);
            // console.log(data);
            // console.log(json)
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

      // this line is necessary to get the data before the html loads
    React.useEffect(() => {
        // this conditionis necessary to refresh the data when coming from a different screen
        if(isFocused){ 
            getProducts();
        }
        //return the isFocused to refresh data when coming from different screen
    }, [[isFocused]]);





    return (

        <View style={styles.mainContainer}>
            <Button title="Return to Router" onPress={() => navigation.navigate('Router')} />

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
                                                {item.name} {"\n"}{"\n"}{"\n"}

                                            </Text>
                                            <Text style={styles.cardTextDescription}>
                                                {item.description}
                                                
                                            </Text>

                                        </View>
                                    </View>
                                    <View style={styles.singleCardBottom}>

                                        <Text style={styles.cardTextPrice}>$ {item.price}</Text>
                                        <Button
                                            onPress={() =>{navigation.navigate('EditBox' , {
                                                itemId: item.id})}} 
                                                // itemId: item.id});setLoading(true)}} 
                                            title="Add to cart"
                                            color="#841584"
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
            

            <TouchableOpacity style={styles.signUpBtn} onPress={getProducts}>
                <Text style={styles.signUpBtnTxt}>Refresh</Text>
            </TouchableOpacity>

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
    body: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',

    },
    image: {
        marginBottom: 40

    },
    input: {
        marginTop: "2%",
        width: "80%",
        backgroundColor: 'rgba(245, 220, 189, 0.4)',
        borderRadius: 25,
        height: 30,
        color: "black",
        marginBottom: "6%",
        justifyContent: "center",
        padding: 20,
        fontSize: 12,
    },
    cardHolder:{
        margin:'100px 100px 100px 100px',
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:20,
        paddingRight:20,
    
    },
    singleCard:{
        margin:'100px 100px 100px 100px',
        backgroundColor:'#D4CFC7',
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:20,
        paddingRight:20,
        borderRadius:10,
    },
    singleCardTop:{
        margin:'100px 100px 100px 100px',
        backgroundColor:'#D4CFC7',
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:20,
        paddingRight:20,
        flexDirection: 'row' ,
    },
    singleCardBottom:{
        margin:'100px 100px 100px 100px',
        backgroundColor:'#D4CFC7',
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:20,
        paddingRight:20,
        flexDirection: 'row' ,
        justifyContent:'space-between'
    },
    cardPic:{
        margin: '10px 10px 10px 10px',
        width: '40%', 
        height: '100%',

    },
    cardText:{
        width:'60%',
        flexDirecton: 'row' ,
        height: '100%',
        paddingLeft:10,


    },
    cardTextTitle:{
        flexDirecton: 'row' ,
        height: '40%',
        paddingLeft:5,
        fontSize:26,


    },
    cardTextDescription:{
        flexDirecton: 'row' ,
        height: '60%',
        paddingLeft:10,


    },

    cardTextPrice:{
        
        fontSize:26,


    },


    signUpBtn: {
        width: "65%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 70,
        backgroundColor: "rgba(33, 33, 98, 0.8)",
    },
    signUpBtnTxt: {
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
