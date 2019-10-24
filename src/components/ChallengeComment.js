import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import Constants from 'expo-constants';
// import { connect } from 'react-redux';

class ChallengeComment extends React.Component{
    state = {
        comment: "",
        commentlist: []
    }

    render() {
        console.log('commentTEST', this.props.navigation.state.params)
        if(!this.props.navigation.state.params.uChallenges)
            return<Text>Loading...</Text>
        return (
            <ScrollView style={ styles.scrollView}>
                {this.props.navigation.state.params.uChallenges.map(uChallenge => {
                    return <Text key={uChallenge.id}>{uChallenge.attributes.content}</Text>
                })}
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
        flex: 1,
        marginHorizontal: 20, 
    }, 
    subText: {
        marginTop: 20, 
        // marginBottom: 20,
        marginHorizontal: 10,
        color: '#212020',
        fontSize: 14,
        lineHeight: 5,
    }
})
export default ChallengeComment;