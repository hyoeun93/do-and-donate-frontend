import React from 'react';
import { View, Text } from 'react-native';

class MypageScreen extends React.Component {
    render() {
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>My Page</Text>
            </View>
        )
    }
}

export default MypageScreen;