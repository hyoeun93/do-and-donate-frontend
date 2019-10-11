import React from 'react';
import { Link } from 'react-router-dom';
import { StyleSheet, Text, View } from 'react-native';
// import { connect } from 'react-redux';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            submitted: false
        };
    }

    render() {
        return(
            <View>
                <Text>Login</Text>
            </View>
        )
    }

}

export default Login;