import * as React from 'react';
import { Button, View, TextInput, StyleSheet,TouchableOpacity,Text,Image } from 'react-native';

function SignupScreen({ navigation }) {
    return (
        
        <View style={styles.mainContainer}>

            <View style={styles.topBar}>

                <Text style={styles.titleText} >Create new Account</Text>
                <Text style={styles.forgot}>
                    {"\n"}
                </Text>
                
                <TouchableOpacity>
                    <Text style={styles.existing} onPress={() => navigation.navigate('Login')}>Already Registered? Login</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.body}>
                <Text style={styles.forgot}>
                    {"\n"}
                 {"\n"}
                 {"\n"}
                </Text>

                <Text style={styles.sentence}>
                    {"PLEASE ENTER YOUR NAME                                     "}
                </Text> 

                <TextInput
                    style={styles.input}
                    value={String}
                    placeholder="Full name"
                    placeholderTextColor="#a9a9a9"
                    autoCapitalize={"none"}
                />

                <Text style={styles.sentence}>
                    {"PLEASE ENTER YOUR EMAIL                                     "}
                </Text> 

                <TextInput
                    style={styles.input}
                    value={String}
                    placeholder="E=mail Address"
                    placeholderTextColor="#a9a9a9"
                    
                />

                <Text style={styles.sentence}>
                    {"PLEASE ENTER YOUR PASSWORD                              "}
                </Text> 

                <TextInput
                    style={styles.input}
                    value={String}
                    secureTextEntry={true}
                    placeholder="Password"
                    placeholderTextColor="#a9a9a9"
                />

                <Text style={styles.sentence}>
                    {"PLEASE ENTER YOUR PHONE NUMBER                      "}
                </Text> 

                <TextInput
                    style={styles.input}
                    keyboardType={'phone-pad'}
                    value={String}
                    placeholder="Phone Number"
                    maxLength={10}
                    placeholderTextColor="#a9a9a9"
                />

                

                <TouchableOpacity style={styles.signUpBtn} onPress={postAccount}>
                    <Text style={styles.signUpBtnTxt}>Sign up</Text>
                </TouchableOpacity>

                {/* <Button title="Sign up" onPress={() => navigation.navigate('Login')} />

                <Button title="Go to Home" onPress={() => navigation.navigate('Home')} /> */}


            </View>


        </View>
    );
}

const getFromApi = () => {
    return fetch('http://localhost:8080/accounts',
                    {
                        method:'GET',
                        // mode: 'no-cors',
                        
                        // credentials: 'include',
                        'Access-Control-Allow-Credentials':'true'
                
                    },
                )
        .then((response) => response.json())
        .then((json) => {
            // console.log(json)
            return json;
        })
        .catch((error) => {
            console.error(error);
        });
};

const postAccount = () => {
    var data = {
            "email" : "email1",
            "password" : "password1",
            "phone" : "phone1",
            "userType" : "userType1"
    }
    return fetch('http://localhost:8080/accounts',
                    {
                        method:'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Credentials':'true',
                          },
                        // mode: 'no-cors',
                        // credentials: 'include',
                        body: JSON.stringify(data),
                    
                    }
                )
                .then((response) => response.json())
                .then((json) => {
                    // console.log(json)
                    return json;
                })
                .catch((error) => {
                    console.error(error);
                });
};



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
        width:"80%",
        backgroundColor:'rgba(245, 220, 189, 0.4)',
        borderRadius:25,
        height:30,
        color: "white",
        marginBottom:"6%",
        justifyContent:"center",
        padding:20,
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
    signUpBtnTxt:{
        color: "white",

    },
    titleText: {
        marginTop: 40,
        fontSize: 28,
        color: "#141445",
    },
    existing:{
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

export default SignupScreen;