import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Card, Button } from 'react-native-elements';
// import { connect } from 'react-redux';

class UserChallengeCard extends React.Component{

    // handleOnPress = () => {
    //     const challengeDetails = this.props.mychallenge.data
    //     this.props.navigation.navigate('UserChallengeDetail', {challengeDetails: challengeDetails})
    // }

    // mapMyChallenge = () => {
    //     return this.props.mychallenge.data.map(challenge => {
    //         return 
    //     })
    // }

    

    render() {
        console.log('test', this.props.mychallenge.data)
        var RandomNumber = Math.floor(Math.random() * 100) + 1 ;
        if(!this.props.mychallenge.data) {
            return <Text>Do not exist</Text>
        }
        return(
            <ScrollView>
                {this.props.mychallenge.data.map(challenge => {
                    return [
                        <Card borderRadius={8} key={RandomNumber}>
                            { challenge.attributes.completed ? 
                                 <Text style={{fontSize: 10}}>⚫️</Text> 
                                 :
                                 <Text style={{fontSize: 10}}>🔵</Text>
                                }
                        <TouchableOpacity key={RandomNumber} onPress={() => this.props.navigation.navigate('UserChallengeDetail', {challengeDetails: challenge})}> 
                        <Text key={challenge.id}> {challenge.attributes.challenge.title}</Text>
                        </TouchableOpacity>
                        </Card>
                    ]
                })}
            </ScrollView>
        )
    }    
    

}

export default withNavigation(UserChallengeCard);