import React from 'react';
import { Link } from 'react-router-dom';
import { StyleSheet, Text, View } from 'react-native';


class Signup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                username: '',
                email: '',
                password: ''
            },
            submitted: false 
        }
    }

    render() {
        return (
            <View>

            </View>
        )
    }
}

export default Signup;