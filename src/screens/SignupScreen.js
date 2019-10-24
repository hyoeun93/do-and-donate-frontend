import React from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, Button } from 'react-native';
import PasswordInputText from 'react-native-hide-show-password-input';
import { saveUser } from '../actions/authAction';

class SignupScreen extends React.Component {
    state = {
        username: "",
        email: "",
        password: ""
    }

    handleClick = () => {
        // const { username, email, password } = this.props;
        this.props.saveUser(this.state);
        this.props.navigation.navigate('Challenges');
    }

    render() {
        // console.log('signupscreen', this.state)
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                
                <TextInput 
                value={this.state.username}
                placeholder = "USERNAME" 
                onChangeText={(value) => this.setState({ username: value })}
                />
                <TextInput 
                value={this.state.email}
                placeholder = "EMAIL ADDRESS" 
                onChangeText={(value) => this.setState({ email: value })}
                />
                <TextInput
                secureTextEntry 
                value={this.state.password}
                placeholder = "PASSWORD" 
                onChangeText={(value) => this.setState({ password: value })}
                />
                <Button color="#283044" title="Submit" onPress={this.handleClick}/>
                
            </View>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    saveUser: userInfo => dispatch(saveUser(userInfo))
})

export default connect(null, mapDispatchToProps)(SignupScreen);