import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import ChallengeList from '../components/ChallengeList';

class ChallengeScreen extends React.Component {
    render() {
        return(
            <ScrollView style={{ flex: 1 }}>
                <View style={{ alignItems: 'flex-start', paddingTop: 20, marginHorizontal: 50}}>
                    <Text style={styles.textStyle}>Challenges</Text>
                </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ChallengeList challenges={this.props.screenProps.challenges}/>
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    textStyle: {
        marginBottom: 20,
        fontSize: 25,
        fontWeight: 'bold'
    }
})

export default ChallengeScreen;