import * as React from 'react';
import { Button, View, TextInput, StyleSheet,TouchableOpacity,Text,Image } from 'react-native';

function SignupScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../../assets/favicon.png")} />

            <TextInput
                style={styles.input}
                value={String}
                placeholder="Full name"
                placeholderTextColor="#a9a9a9"
                autoCapitalize={"none"}
            />

            <TextInput
                style={styles.input}
                value={String}
                placeholder="E=mail Address"
                placeholderTextColor="#a9a9a9"
                
            />

            <TextInput
                style={styles.input}
                keyboardType={'phone-pad'}
                value={String}
                placeholder="Phone Number"
                maxLength={10}
                placeholderTextColor="#a9a9a9"
            />

            <TextInput
                style={styles.input}
                value={String}
                secureTextEntry={true}
                placeholder="Password"
                placeholderTextColor="#a9a9a9"
            />

            <TouchableOpacity style={styles.signUpBtn} onPress={() => navigation.navigate('Home')}>
                <Text>Sign up</Text>
            </TouchableOpacity>

            {/* <Button title="Sign up" onPress={() => navigation.navigate('Login')} />

            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} /> */}


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
    image: {
        marginBottom: 40

    },
    input: {
        width: "80%",
        backgroundColor: "#465881",
        borderRadius: 25,
        height: 50,
        color: "white",
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    forgot: {
        height: 30,
        marginBottom: 30,
    },
    signUpBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#ff1493",
    },



});

export default SignupScreen;