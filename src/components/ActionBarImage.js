import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

class ActionBarImage extends React.Component {
 
  render() {
 
    return (
      <View style={{flexDirection: 'row'}}>
        <Image
          source={require('../../assets/DD-logo.png')}
          style={{ width: 40, height: 40, borderRadius: 40/2, marginLeft: 15}}
        />
      </View>
    
    );
  }
}

export default ActionBarImage;