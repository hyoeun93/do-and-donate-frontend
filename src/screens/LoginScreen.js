import React from 'react';
import { View, Text, Button } from 'react-native';

class LoginScreen extends React.Component {
    render() {
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Login</Text>
                <Button title="Sign In" onPress={() => this.props.navigation.navigate('Signup')} />
            </View>
        )
    }
}

export default LoginScreen;