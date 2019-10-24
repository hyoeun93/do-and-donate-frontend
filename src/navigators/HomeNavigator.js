import { createStackNavigator } from 'react-navigation-stack';
import ActionBarImage from '../components/ActionBarImage';
import React from 'react'

import Home from '../screens/HomeScreen';


const HomeNavigator = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: () => ({
                headerTitle: <ActionBarImage />,
                headerStyle: { backgroundColor: '#FAFBF9' },
                headerTitleStyle: { color: '#283044' },
            }),
        },
    }
)

export default HomeNavigator;