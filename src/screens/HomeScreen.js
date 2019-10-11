import React from 'react';
import { View, Text } from 'react-native';


class HomeScreen extends React.Component {
    render() {
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Total Challenges #</Text>
                <Text>Total Participants #</Text>
                <Text>Total Donated $</Text>
            </View>
        )
    }
}

export default HomeScreen;