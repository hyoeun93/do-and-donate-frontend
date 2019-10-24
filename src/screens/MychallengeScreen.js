import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import UserChallengeList from '../components/UserChallengeList';


class MychallengeScreen extends React.Component {

    render() {
        return(
            <ScrollView style={{ flex: 1 }}>
                <View style={{ alignItems: 'flex-start', paddingTop: 20, marginHorizontal: 50}}>
                    <Text style={styles.textStyle}>My Challenges</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <UserChallengeList />
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


export default MychallengeScreen;
