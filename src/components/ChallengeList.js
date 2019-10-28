import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ChallengeCard from './ChallengeCard';
import Constants from 'expo-constants';
import ChallengeDetail from './ChallengeDetail';
// import { connect } from 'react-redux';

class ChallengeList extends React.Component{
    
    renderChallengeList = () => {
        return this.props.challenges.data.map(challenge => {
            return <ChallengeCard key={challenge.id} challenge={challenge} included={this.props.challenges.included} /> 
        })
    }
    render() {
        console.log('ChallengeList', this.props.challenges)
        if(!this.props.challenges) {
            return <Text>Challenge List Not Found</Text>
        }
        return(
            <ScrollView style={styles.scrollView}>
                {this.renderChallengeList()}
            </ScrollView>
        )
    }    
    

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
      },
    scrollView: {
        marginHorizontal: 20, 
    }
})
export default ChallengeList;