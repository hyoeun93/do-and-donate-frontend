import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { charityFetch } from '../actions/charityAction';
import RNPickerSelect from 'react-native-picker-select';
import UserChallengeList from '../components/UserChallengeList';

class ChallengeDetail extends React.Component {

    state = {
        userChallenges: [],
        comment: "",
        commentlist: []
    }

    handlePress = () => {
        console.log('hi')
        fetch(`http://192.168.1.245:3000/api/v1/users/${this.props.currentUser.id}/user_challenges`, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: this.props.currentUser.id,
                challenge_id: this.props.navigation.state.params.details.id,
                datetime: null,
                photos: null,
                title: null,
                completed: 'false'
            })
            })
            .then(res => res.json())
            .then(data => {
            //   console.log(data)
              this.setState({
                  userChallenges: [...this.state.userChallenges, data.data]
              })
              
            }
        )
        this.props.navigation.navigate('MypageScreen');
    }

    handleAddComment = () => {
        fetch(`http://192.168.1.245:3000/api/v1/challenges/${this.props.navigation.state.params.details.id}/challengecomments`, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                challenge_id: this.props.navigation.state.params.details.id,
                content: this.state.comment
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log('COMENT LIST', this.state.commentlist)
            this.setState({
                commentlist: [...this.state.commentlist, data.data]
            })
        })
    }

    componentDidMount() {
            fetch(`http://192.168.1.245:3000/api/v1/challenges/${this.props.navigation.state.params.details.id}/challengecomments`)
            .then(res => res.json())
            .then(data => {
                console.log('fetchedComments', data)
                this.setState({
                    commentlist: data.data
                })
            })

        //     fetch(`http://10.9.111.98:3000/api/v1/users/${this.props.currentUser.id}/user_challenges`)
        // .then(res => res.json())
        // .then(data => {
             
        //     console.log('getUsesrChallenge', data)
        //     this.setState({
        //         userChallenges: data.data
        //     })
        // })
        
    }
    render() {
        console.log('ChallengeDetail', this.props.navigation.state.params.details)
        // console.log('Charities', this.props.charities)
        console.log('currentUser', this.props.currentUser)
        console.log('Challenge States', this.state)
            return(
                <ScrollView style={styles.ScrollView}>
                    {/* <UserChallengeList userChallenges={this.state.userChallenges}/> */}
                    {/* <Image 
                    source={require(this.props.navigation.state.params.details)}
                    /> */}
                     <View style={{ alignItems: 'flex-start', paddingTop: 20, marginHorizontal: 50}}>
                    <Text style={styles.textStyle}>Explore More</Text>
                    </View>
                    <View style={styles.container}>
                    <Text style={styles.subText}>Goal: {this.props.navigation.state.params.details.title}</Text>
                    <Text style={styles.subText}>{this.props.navigation.state.params.details.description}</Text>
                    <Text style={styles.subText}>Money Pot: ${this.props.navigation.state.params.details.money_pot}</Text>
                    <Text style={styles.subText}>Payout: ${this.props.navigation.state.params.details.payout}</Text>
                    <Text style={styles.subText}>Start Date: {this.props.navigation.state.params.details.start_date} </Text>
                    <Text style={styles.subText}>End Date: {this.props.navigation.state.params.details.end_date} </Text>
                    <Text style={styles.subText}>Donor: {this.props.navigation.state.params.details.donor.name}</Text>                    
                
                
                <Button style={{marginTop: 100}} color="#283044" title="Join This Challenge" onPress={this.handlePress}/>
                
                <View>
                {Object.keys(this.props.currentUser).length === 0
                ?
                <Text></Text>
                :
                <TextInput 
                style={{ lineHeight: 19, marginBottom: 20, marginTop: 10, height: 40, borderColor: 'gray', borderWidth: 1 }}
                multiline={true}
                numberOfLines={4}
                onChangeText={(value) => this.setState({ comment: value })}
                value={this.state.comment}
                />
                }

                {Object.keys(this.props.currentUser).length === 0
                ?
                <Text></Text>
                :
                <Button color="#78A1BB" title="Add comments" onPress={this.handleAddComment}/>
                }
                <Button color="#78A1BB" title="View Comments" onPress={this.handleComment} />
                </View>
                {/* {this.state.commentlist.map(comm => {
                    return <Text key={comm.id}>{comm.attributes.content}</Text>
                })}
     */}
                    {/* <Text>Photos: {this.props.navigation.state.params.details.img_url}</Text> */}
                </View>
                </ScrollView>
            )
        
        
    }

    handleComment = () => { 
            return this.props.navigation.navigate('ChallengeComment', {uChallenges: this.state.commentlist, currentU: this.props.currentUser})
    }

}

const styles = StyleSheet.create({
    scrollView: {
        marginHorizontal: 20, 
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
      marginBottom: 20
    },
    textStyle: {
        marginBottom: 20,
        fontSize: 25,
        fontWeight: 'bold'
    },
    subText: {
        marginHorizontal: 10,
        marginBottom: 10,
        color: '#212020',
        fontSize: 14,
        lineHeight: 15,
    }
});


const mapStateToProps = state => {
    return {
        currentUser: state.auth.currentUser,
        charities: state.charity.charities,
        userChallenges: state.userChallenge.userChallenges  
    }
}

export default connect(mapStateToProps, {charityFetch})(ChallengeDetail);