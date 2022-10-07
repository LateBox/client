import * as React from 'react';
import { Button, View, TextInput, StyleSheet,TouchableOpacity,Text,Image} from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';


function SigninScreen({ navigation }) {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.topBar}>

        <Text style={styles.titleText} >Login</Text>
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
            {"PLEASE ENTER YOUR EMAIL                                     "}
            </Text>  

            <TextInput
            style={styles.input}
            value={String}
            
            placeholder="hello@latebox.com"
            placeholderTextColor= 'rgba(77, 76, 76, 0.5)'
            />

            <Text style={styles.sentence}>
            {"PLEASE ENTER YOUR PASSWORD                             "}
            </Text>   

            <TextInput
            style={styles.input}
            value={String}
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor='rgba(77, 76, 76, 0.5)'
            /> 

            <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Home')}>
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
      height: '24%',
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
        height:30,
        color: "white",
        marginBottom:"6%",
        justifyContent:"center",
        padding:20,
        fontSize: 12,
      
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
      loginBtnTxt: {
        color: "white",
      },
    
  });

export default SigninScreen;