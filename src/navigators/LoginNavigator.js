import { createStackNavigator } from 'react-navigation-stack';
import ActionBarImage from '../components/ActionBarImage';
import React from 'react'
import Login from '../screens/LoginScreen';
import Signup from '../screens/SignupScreen';

const LoginNavigator = createStackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions: () => ({
                headerTitle: <ActionBarImage />
            }),
        },
        Signup: {
            screen: Signup,
            navigationOptions: () => ({
                headerTitle: <ActionBarImage />
            }),
        }
    }
)

export default LoginNavigator;