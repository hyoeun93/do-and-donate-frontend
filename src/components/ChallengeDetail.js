import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, Image } from 'react-native';
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
        alert('You joined the challenge');
        fetch(`http://192.168.6.96:3000/api/v1/users/${this.props.currentUser.id}/user_challenges`, {
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
        fetch(`http://192.168.6.96:3000/api/v1/challenges/${this.props.navigation.state.params.details.id}/challengecomments`, {
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
                comment: '',
                commentlist: [...this.state.commentlist, data.data]
            })
        })
    }

    componentDidMount() {
            fetch(`http://192.168.6.96:3000/api/v1/challenges/${this.props.navigation.state.params.details.id}/challengecomments`)
            .then(res => res.json())
            .then(data => {
                console.log('fetchedComments', data)
                this.setState({
                    commentlist: data.data
                })
            })
    }

    renderIncluded = () => {
        const cName = this.props.navigation.state.params.details.title
        const photos = this.props.navigation.state.params.included
        return photos.map(arr => {
            if(arr.type === "user_challenge") {
                if(cName === arr.attributes.challenge.title) {
                    if(arr.attributes.photos_url.length > 0) {
                        return arr.attributes.photos_url.map(photo => {
                            return(<Image key={Math.floor(Math.random() * 100) + 1} style={{width: 300, height: 300, alignSelf: 'center' }} source={{uri: photo}} />)
                        })
                    }
                }
            }
        })
    }

    render() {
        console.log('ChallengeDetail', this.props.navigation.state.params)
        const photos = this.props.navigation.state.params.included
        // console.log('Charities', this.props.charities)
        // console.log('currentUser', this.props.currentUser)
        // console.log('Challenge States', this.state)
            return(
                <ScrollView style={styles.ScrollView}>
                    {/* <UserChallengeList userChallenges={this.state.userChallenges}/> */}
                    <View style={{ alignItems: 'flex-start', paddingTop: 20, marginHorizontal: 50}}>
                    <Text style={styles.textStyle}>Explore More</Text>
                    </View>
                    <View style={styles.container}>
                    <Text style={styles.topText}>Goal</Text>
                    <Text style={styles.mainText}>{this.props.navigation.state.params.details.title}</Text>
                    <Text style={styles.subSubText}>{this.props.navigation.state.params.details.description}</Text>
                    <Text></Text>
                    <Text style={styles.nextText}>Start Date</Text>
                    <Text style={styles.subText}>{this.props.navigation.state.params.details.start_date} </Text>
                    <Text style={styles.nextText}>End Date</Text>
                    <Text style={styles.subText}>{this.props.navigation.state.params.details.end_date} </Text>
                    <Text style={styles.nextText}>Money Pot</Text>
                    <Text style={styles.subText}>${this.props.navigation.state.params.details.money_pot}</Text>
                    <Text style={styles.nextText}>Payout</Text>
                    <Text style={styles.subText}>${this.props.navigation.state.params.details.payout}</Text>
                    <Text style={styles.nextText}>Donor</Text>
                    <Text style={styles.subText}>{this.props.navigation.state.params.details.donor.name}</Text>                    
                
                
                <Button style={{marginTop: 150}} color="#8B786D" title="Join This Challenge" onPress={this.handlePress}/>
                
                <View>
                {Object.keys(this.props.currentUser).length === 0
                ?
                <Text></Text>
                :
                <TextInput 
                placeholder="comment"
                style={styles.textBox}
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
                <Text style={styles.photoText}>#Photos People Uploaded</Text>
    
                </View>
                </View>
                <ScrollView
                horizontal={true}
                >
                {this.renderIncluded()}
                </ScrollView>
                </ScrollView >
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
      marginHorizontal: 50,
    //   alignItems: 'center',
    //   justifyContent: 'center',
      marginTop: 10,
      marginBottom: 20
    },
    textBox: {
        lineHeight: 19, 
        marginBottom: 20, 
        marginTop: 10, 
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1,
        borderRadius: 10
    },
    textStyle: {
        marginBottom: 20,
        fontSize: 25,
        fontWeight: 'bold'
    },
    topText: {
        color: '#8B786D',
        marginBottom: 5,
        fontSize: 25,
        fontWeight: 'bold'
    },
    mainText: {
        marginBottom: 20,
        fontSize: 18,
        fontWeight: 'bold'
    },
    nextText: {
        letterSpacing: 1,
        lineHeight: 50,
        marginBottom: 10,
        color: '#212020',
        fontSize: 16,
        fontWeight: 'bold'
    },
    subSubText: {
        letterSpacing: 1,
        lineHeight: 50,
        marginBottom: 10,
        color: '#212020',
        fontSize: 16,
        lineHeight: 25,
    },
    subText: {
        letterSpacing: 1,
        lineHeight: 50,
        marginBottom: 10,
        color: '#212020',
        fontSize: 16,
        lineHeight: 15,
    },
    photoText: {
        letterSpacing: 1,
        lineHeight: 15,
        marginTop: 50,
        color: '#212020',
        fontSize: 16
    },
});


const mapStateToProps = state => {
    return {
        currentUser: state.auth.currentUser,
        charities: state.charity.charities,
        userChallenges: state.userChallenge.userChallenges  
    }
}

export default connect(mapStateToProps, {charityFetch})(ChallengeDetail);