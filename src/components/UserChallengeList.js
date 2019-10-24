import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import UserChallengeCard from './UserChallengeCard';
import { connect } from 'react-redux';

class UserChallengeList extends React.Component{
    state={
        myChallenges: []
    }

    componentDidMount() {
            console.log('did mount', this.props.currentUser)
            fetch(`http://192.168.1.245:3000/api/v1/users/${this.props.currentUser.id}/user_challenges`)
            // fetch(`http://localhost:3000/api/v1/users/5/user_challenges`)
            .then(res => res.json())
            .then(data => {
                console.log('getUsesrChallenge', data)
                this.setState({
                    myChallenges: [...this.state.myChallenges, data]
                })
            })
        
    }

    fetchMyChallenges = () => {
         
        var RandomNumber = Math.floor(Math.random() * 100) + 1 ;
            return this.state.myChallenges.map(mychallenge => {
                return <UserChallengeCard key={RandomNumber} mychallenge={mychallenge}/>
            })
        
    }
    
    render() {
        console.log('UserChallengeList', this.state.myChallenges)
        if(!this.state.myChallenges) {
            return <Text style={{ fontSize: 16, fontWeight: 'bold' }}>My Challenge List Not Found</Text>
        }
        return(
            <ScrollView style={{ flex: 1 }}>
            <View>
                {this.fetchMyChallenges()}
            </View>
            </ScrollView>
        )
    }    
    

}

const mapStateToProps = state => {
    return {
        currentUser: state.auth.currentUser 
    }
}

export default connect (mapStateToProps)(UserChallengeList);