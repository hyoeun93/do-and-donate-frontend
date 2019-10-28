import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Button, TextInput } from 'react-native';
import PasswordInputText from 'react-native-hide-show-password-input';
import { userLoginFetch } from '../actions/authAction';


class LoginScreen extends React.Component {
    state = {
        email: "",
        password: ""
    }

    handleClick = async () => {
        await this.props.userLoginFetch(this.state);
        this.setState({
            email: "",
            password: ""
        })
        this.props.navigation.navigate('Challenges');
    }
    render() {
        // console.log('loginScreen', this.state)
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                
                <TextInput 
                value={this.state.email}
                placeholder = "EMAIL ADDRESS" 
                onChangeText={(value) => this.setState({ email: value })}
                />
                <View style={{margin: 20}}>
                <TextInput
                secureTextEntry
                value={this.state.password}
                placeholder = "PASSWORD" 
                onChangeText={(value) => this.setState({ password: value })}
                />
                </View>
                <Button color="#283044" title="Log In" onPress={this.handleClick}/>

                <View>
                <Text>Don't have an account?</Text>
                <Button color="#283044" title="Sign Up" onPress={() => this.props.navigation.navigate('Signup')} />
                </View>
            </View>
        )
    }
}

const mapDispatchToProps = dispatch => ({
     userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(LoginScreen);