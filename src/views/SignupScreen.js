import * as React from 'react';
import { Button, View, TextInput, StyleSheet } from 'react-native';

function SignupScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TextInput
                style={styles.input}
                value={String}
                placeholder="Full Name"
            />

            <TextInput
                style={styles.input}
                value={String}
                placeholder="E-mail address"
            />

            <TextInput
                style={styles.input}
                value={String}
                placeholder="Phone number"
            />
            <TextInput
                style={styles.input}
                value={String}
                placeholder="password"
            />

            <Button title="Sign up" onPress={() => navigation.navigate('Login')} />

            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />


        </View>
    );
}


const styles = StyleSheet.create({
    app: {
        backgroundColor: 'white'
      },
    input: {
        width: 350,
        height: 55,
        backgroundColor: '#42A5F5',
        margin: 10,
        padding: 8,
        color: 'white',
        borderRadius: 14,
        fontSize: 18,
        fontWeight: '500',
      },
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }
});

export default SignupScreen;