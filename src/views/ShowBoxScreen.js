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
            console.log(data);
            console.log(json)
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
                        <>
                            <Text>id: {item.id}, {"\n"}
                            Name: {item.name}, {"\n"}
                            description:{item.description}, {"\n"}
                            price: {item.price}, {"\n"}
                            restaurantId: {item.restaurantId}, {"\n"}
                            stock: {item.stock}</Text>
                            <Image source={{ uri: item.imageUri }} style={{ width: 200, height: 200 }} />
                            <Button
                                onPress={() =>{navigation.navigate('EditBox' , {
                                    itemId: item.id})}} 
                                    // itemId: item.id});setLoading(true)}} 
                                    
                            title="Edit"
                            color="#841584"
                            accessibilityLabel="Learn more about this purple button"/>
                            {console.log()}
                            <Text>{"\n"}{"\n"}</Text>
                        </> 
                    )}
                />
                
            )}
            {isLoading ? console.log(data) : console.log("nothing here")}
            

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
