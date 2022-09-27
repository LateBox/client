import * as React from 'react';
import { Button, View, TextInput, StyleSheet,TouchableOpacity,Text,Image} from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

function SigninScreen({ navigation }) {
    return (
        
        
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"#f08080" }}>
        <Image source = {require("../../assets/favicon.png")}/>
        
        <TextInput
        style={styles.input}
        value={String}
        
        placeholder="username"
        placeholderTextColor="#a9a9a9"
        />
        <TextInput
        style={styles.input}
        value={String}
        
        placeholder="password"
        placeholderTextColor="#a9a9a9"
        />

    
        
        <Button title="Sign in" onPress={() => navigation.navigate('Home')} /> 
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />      
      </View>
    );
}


const styles = StyleSheet.create({
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
        color:"blue",
        fontSize:11
      }
    
  });

export default SigninScreen;