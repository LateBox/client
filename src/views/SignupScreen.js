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
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default SignupScreen;