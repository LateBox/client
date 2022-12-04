import * as React from 'react';
import { Button, View, TextInput, StyleSheet,TouchableOpacity,Text,Image} from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import currentUrl from "../constants/urls";



function SigninScreen({ navigation }) {

  const [email, setEmail] = React.useState('Email');
  const [password, setPassword] = React.useState('Password');


  // function digestMessage(message) {
  //   const msgUint8 = new TextEncoder().encode(message);                           // encode as (utf-8) Uint8Array
  //   const hashBuffer = crypto.subtle.digest('SHA-256', msgUint8);           // hash the message
  //   const hashArray = Array.from(new Uint8Array(hashBuffer));                     // convert buffer to byte array
  //   const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string
  //   return hashHex;
  // }


  const getAuthToken = () => {
    
    console.log("hada houa l fucking username: "+ email)
    var data = {
            "username" : email,
            "password" : password,
    }
    return fetch(currentUrl+'authenticate',
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

      <Text style={styles.titleText} > {"\n"}Login</Text>
        <Text style={styles.forgot}>
          {"\n"}
        </Text>
        <TouchableOpacity>
              <Text style={styles.newaccount} onPress={() => navigation.navigate('Register')}>Don't have an account? Sign up</Text>
          </TouchableOpacity>

      </View>


        <View style={styles.body}>  
        <Text style={styles.forgot}>
          {"\n"}
          {"\n"}
          {"\n"}
        </Text>
        
          <Text style={styles.sentence}>
          {"PLEASE ENTER YOUR EMAIL                                                                         "}
          </Text>  

          <TextInput
          style={styles.input}            
          placeholder="hello@latebox.com"
          onChangeText={value => setEmail(value)}
          emailValue={email}
          placeholderTextColor= 'rgba(77, 76, 76, 0.5)'
          />

          <Text style={styles.sentence}>
          {"PLEASE ENTER YOUR PASSWORD                                                             "}
          </Text>   

          <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Password"
          // onChangeText={value => setPassword(digestMessage(value))}
          onChangeText={value => setPassword(value)}
          passwordValue={password}
          placeholderTextColor='rgba(77, 76, 76, 0.5)'
          /> 

          <TouchableOpacity style={styles.loginBtn} onPress={getAuthToken}>
          <Text style={styles.loginBtnTxt} >login</Text>
        </TouchableOpacity>
          
          
          {/* <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />       */}
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
      height: '28%',
    },
    body: {
        flex: 3,
        display: 'flex',
        backgroundColor: 'white',
        alignItems: 'center',
        
       
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
      loginBtn: {
        width: "65%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 150,
        backgroundColor: "rgba(33, 33, 98, 0.8)",
      },
      titleText: {
        marginTop: 40,
        fontSize: 28,
        color: "#141445",
      },
      newaccount:{
        marginBottom: 20,
        fontSize: 14,
        color: "#141445",
        marginTop: 17,
      },
      sentence: {
  
        fontSize: 12,
        color: "#8F8E8E",
      },
      loginBtnTxt: {
        color: "white",
      },
    
  });

export default SigninScreen;