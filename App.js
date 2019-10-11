import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import { StyleSheet, Text, View } from 'react-native';
import reducers from './src/reducers';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import ChallengeScreen from './src/screens/ChallengeScreen';
import MypageScreen from './src/screens/MypageScreen';


const store = createStore(reducers)

const LoginNavigator = createStackNavigator({
  Login: {
      screen: LoginScreen,
  },
  Signup: {
      screen: SignupScreen,
  }
});

const AppNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Challenges: ChallengeScreen,
    MyPage: MypageScreen,
    Login: LoginNavigator
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(AppNavigator);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      <View>
        {/* <Text>Total Challenges #</Text>
        <Text>Total Participants #</Text>
        <Text>Total Donated $</Text> */}
      </View>
      </Provider>
    );
  }
  
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
