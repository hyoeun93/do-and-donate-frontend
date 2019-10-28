import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import { logger } from 'redux-logger';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import thunk from 'redux-thunk';
import reducers from './src/reducers';
import MainNavigator from './src/navigators/MainNavigator';
console.disableYellowBox = true;

// const store = createStore(reducers)
const store = createStore(reducers, applyMiddleware(thunk))

class App extends Component {
  state = {
    challenges: null
    }

  componentDidMount() {
      fetch('http://192.168.6.96:3000/api/v1/challenges')
      // fetch('http://192.168.1.245:3000//api/v1/challenges')
      .then(res => res.json())
      .then(data => {
          // console.log(data);
          this.setState({
              challenges: data
          })
      })
  }

  render() {
    const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 30 : StatusBar.currentHeight;
    return (
      <Provider style={{ flex: 1}} store={store}>
        {/* <View
        style={{
          width: "100%",
          height: STATUS_BAR_HEIGHT,
          backgroundColor: "#EBF5EE"
      }}> */}
        <StatusBar
           backgroundColor="#1c313a"
           barStyle="dark-content"
         />
         {/* </View> */}
        <MainNavigator loginUser={this.loginUser} screenProps={{challenges:this.state.challenges}}/>
      <View>
       
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
