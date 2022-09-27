import * as React from 'react';
import { Button, View, TextInput, StyleSheet,TouchableOpacity,Text,Image} from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

function SigninScreen({ navigation }) {
    return (
        
        
      <View style={styles.container}>
        <Image style = {styles.image} source = {require("../../assets/favicon.png")}/>
        
        <TextInput
        style={styles.input}
        value={String}
        
        placeholder="Username"
        placeholderTextColor="#a9a9a9"
        />
        <TextInput
        style={styles.input}
        value={String}
        secureTextEntry={true}
        placeholder="Password"
        placeholderTextColor="#a9a9a9"
        /> 

        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Home')}>
        <Text >Sign in</Text>
      </TouchableOpacity>
        
        
        {/* <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />       */}
      </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f08080',
        alignItems: 'center',
        justifyContent: 'center',
       },
       image :{
        marginBottom: 40
     
      },
    input: {
        width:"80%",
        backgroundColor:"#465881",
        borderRadius:25,
        height:50,
        color: "white",
        marginBottom:20,
        justifyContent:"center",
        padding:20
    },
    forgot:{
        height: 30,
  marginBottom: 30,
      },
      loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#ff1493",
      },
    
  });

export default SigninScreen;