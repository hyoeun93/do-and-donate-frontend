import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Login from './screens.LoginScreen';
import Signup from './screens.SignupScreen';

const AppNavigator = createStackNavigator(
    {
        Login: {
            screen: Login,
        },
        Signup: {
            screen: Signup,
        }
    }
)

export default createAppContainer(AppNavigator);