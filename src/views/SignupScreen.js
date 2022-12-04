import * as React from 'react';
import { Button, View, TextInput, StyleSheet,TouchableOpacity,Text,Image } from 'react-native';
import currentUrl from "../constants/urls";


function SignupScreen({ navigation }) {

    const [fullName, setFullName] = React.useState('Full Name');
    const [email, setEmail] = React.useState('Email');
    const [password, setPassword] = React.useState('Password');
    const [phone, setPhone] = React.useState('Phone Number');
    const [userType, setUserType] = React.useState('UserType');

    
const getFromApi = () => {
    return fetch(currentUrl+'accounts',
                    {
                        method:'GET',
                        // mode: 'no-cors',
                        
                        // credentials: 'include',
                        'Access-Control-Allow-Credentials':'true'
                
                    },
                )
        .then((response) => response.json())
        .then((json) => {
            console.log(fullName)
            return json;
        })
        .catch((error) => {
            console.error(error);
        });
};

const postAccount = () => {
    console.log("hada houa l fucking name: "+ fullName)
    var data = {
            "fullName" : fullName,
            "email" : email,
            "password" : password,
            "phone" : phone,
            "userType" : "normal"
    }
    return fetch(currentUrl+'accounts',
    // return fetch('http://localhost:8080/accounts',
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



        return (
        
        <View style={styles.mainContainer}>

            <View style={styles.topBar}>

                <Text style={styles.titleText} >{"\n"}Create new Account</Text>
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
                    {"PLEASE ENTER YOUR NAME                                                                "}
                </Text> 

                <TextInput
                    style={styles.input}
                    placeholder="Full name"
                    placeholderTextColor="#a9a9a9"
                    onChangeText={value => setFullName(value)}
                    fullNameValue={fullName}
                    autoCapitalize={"none"}
                />

                <Text style={styles.sentence}>
                    {"PLEASE ENTER YOUR EMAIL                                                               "}
                </Text> 

                <TextInput
                    style={styles.input}
                    placeholder="Email Address"
                    placeholderTextColor="#a9a9a9"
                    onChangeText={value => setEmail(value)}
                    emailValue={email}
                    autoCapitalize={"none"}
                />

                <Text style={styles.sentence}>
                    {"PLEASE ENTER YOUR PASSWORD                                                    "}
                </Text> 

                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder="Password"
                    placeholderTextColor="#a9a9a9"
                    onChangeText={value => setPassword(value)}
                    passwordValue={password}
                    autoCapitalize={"none"}
                />

                <Text style={styles.sentence}>
                    {"PLEASE ENTER YOUR PHONE NUMBER                                          "}
                </Text> 

                <TextInput
                    style={styles.input}
                    keyboardType={'phone-pad'}
                    placeholder="Phone Number"
                    maxLength={10}
                    placeholderTextColor="#a9a9a9"
                    onChangeText={value => setPhone(value)}
                    phoneValue={phone}
                    autoCapitalize={"none"}
                />

                

                <TouchableOpacity style={styles.signUpBtn} onPress={postAccount}>
                    <Text onPress={() => navigation.navigate('NewAccount2')} style={styles.signUpBtnTxt}>Sign up</Text>
                </TouchableOpacity>

            


            </View>


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
        height: '26%',
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
        height:38,
        color:"#000000",
        TextColor:"black",
        marginBottom:"6%",
        justifyContent:"center",
        fontSize: 12,
        paddingLeft:15,

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
        marginBottom: 20,
        fontSize: 14,
        color: "#141445",
        marginTop: 17,
    },
    sentence: {
  
        fontSize: 12,
        color: "#8F8E8E",
      },



});

export default SignupScreen;