import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { charityFetch } from '../actions/charityAction';
import { connect } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

class UserChallengeDetail extends React.Component{

    state={
        charity: '',
        photo_base64: null,
        image: null, 
        toggle: false
    }

    handleSubmit = () => { 
        const userchallenge = this.props.navigation.state.params.challengeDetails
        console.log('submitted, and update UserChallenge') 
        alert('You submitted the Challenge!');
        // this.props.postPhoto(this.state.image);
        
        fetch(`http://192.168.6.96:3000/api/v1/users/${this.props.currentUser.id}/user_challenges/${userchallenge.id}`,{
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_challenge_id: userchallenge.id,
                user_id: this.props.currentUser.id,
                challenge_id: userchallenge.attributes.challenge.id,
                charity_id: this.state.charity,
                datetime: null,
                photos: null,
                file_name: null,
                title: null, 
                completed: 'true'
            })
        })
        this.props.navigation.navigate('MypageScreen');
    }

//Maybe Need To Fetch with SHOW Request------------------------------------------------------------------
    componentDidMount() {
        this.props.charityFetch();
        this.getPermissionAsync();
    //     fetch(`http://10.9.109.91:3000/api/v1/users/${this.props.currentUser.id}/user_challenges`)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log('NEW', data)
    //         this.setState({
    //             completion: data.data
    //         })
    //     })
    
    }
    
    render() {
        let { image } = this.state;
        console.log('user challenge Detail', this.props.navigation.state.params.challengeDetails)
        console.log('User Challenge Props', this.props)
        console.log('User Challenge State', this.state)
        const userchallenge = this.props.navigation.state.params.challengeDetails
        // if(!this.state.completion) {
        //     return <Text>Loading</Text>
        // }
            return(
                <ScrollView style={{ flex: 1 }}>
                <View style={styles.container}>
                <Text style={styles.titleText}>{userchallenge.attributes.challenge.title}</Text>
                <Text style={styles.nextText}>Start Date</Text>
                <Text style={styles.subText}> {userchallenge.attributes.challenge.start_date}</Text>
                <Text style={styles.nextText}>End Date</Text>
                <Text style={styles.subText}>{userchallenge.attributes.challenge.end_date}</Text>
                {userchallenge.attributes.completed ? <Text style={styles.subText}>Status: Inactive</Text> : <Text style={styles.subText}>Status: Active</Text>}
                <Text style={styles.subText}>Payout: ${userchallenge.attributes.challenge.payout}</Text>
                <View style={{flex:.5, marginBottom: 10}}>
                {/* userchallenge.attributes.charity !== undefined  */}
                {userchallenge.attributes.completed 
                ? 
                <Text style={styles.subText}>You donated to: {userchallenge.attributes.charity.name}</Text> 
                : 
                <Text></Text>
                }
                </View>
                
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                {userchallenge.attributes.completed 
                ?
                [<Text>🎊</Text>,
                <Text>YOU DID IT!</Text>
                ]
                :
                <View>
                <Button
                color="#A6A6A8"
                title="Pick an image from camera roll"
                onPress={this._pickImage}
                />
                {image &&
                <Image source={{ uri: image }} style={{ width: 300, height: 300, alignSelf: 'center' }} />}
                </View>
                }

                {userchallenge.attributes.photos_url.length > 0
                ?
                userchallenge.attributes.photos_url.map(url => {
                    return (
                    <View style={{padding: 3}}>
                        <Image key={Math.floor(Math.random() * 100) + 1} style={{width: 300, height: 300}} source={{ uri: url}} />
                    </View>
                    )
                })
                :
                <Text></Text>
                }

                {userchallenge.attributes.completed 
                ? 
                <Text></Text>
                : 
                <Button color="#283044" title="Ready to Submit?" onPress={() => this.setState({ toggle: true})}/>
                }

                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                {this.state.toggle
                ?
                [<RNPickerSelect
                    placeholder={{
                        label: 'Select a charity',
                        value: ''
                    }}
                    onValueChange={(value) => this.setState({ charity: value })}
                    items={
                        this.props.charities.map(charity => {
                            return {label: charity.name, value: charity.id}
                        })
                    } 
                />,
                <Button color="#283044" title="Submit" onPress={this.handleSubmit}/>]
                
                :
                <Text></Text>
                }
                </View>
                </View>
                
                </View>
            </ScrollView>
        )
    }    

    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
          const { status } = await Permissions.askAsync(Permissions.CAMERA);
        //   status = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
            status = await Permissions.askAsync(Permission.CAMERA).status;
            }

        
        }
    }
    _pickImage = async () => {
        let result = await ImagePicker.launchCameraAsync({
          allowsEditing: true,
          aspect: [4, 3],
          base64: true,
          quality: 0.1
        });
        console.log('photoresult',result);
        if (!result.cancelled) {
          this.setState({ 
            image: result.uri,
            photo_base64: result.base64
        });
        }
        const userchallenge = this.props.navigation.state.params.challengeDetails;
        fetch(`http://192.168.6.96:3000/api/v1/users/${this.props.currentUser.id}/user_challenges/${userchallenge.id}`,{
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_challenge_id: userchallenge.id,
                user_id: this.props.currentUser.id,
                challenge_id: userchallenge.attributes.challenge.id,
                charity_id: null,
                datetime: null,
                photos: this.state.photo_base64,
                file_name: Math.floor(Math.random() * 100) + 1,
                title: null, 
                completed: 'false'
            })
        })
        // this.props.navigation.navigate('MypageScreen');
    };
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginHorizontal: 50,
      //   alignItems: 'center',
      //   justifyContent: 'center',
        marginTop: 10,
        marginBottom: 20
    },
    titleText: {
        marginTop: 20,
        marginBottom: 20,
        fontSize: 25,
        fontWeight: 'bold'
    },
    nextText: {
        letterSpacing: 1,
        lineHeight: 50,
        marginBottom: 10,
        color: '#212020',
        fontSize: 16,
        lineHeight: 15,
        fontWeight: 'bold'
    },
    subText: {
        letterSpacing: 1,
        lineHeight: 50,
        marginBottom: 10,
        color: '#212020',
        fontSize: 16,
        lineHeight: 15,
    },
    bottom: {
        justifyContent: 'center',
        position: 'absolute',
        alignItems: 'center',
        bottom: 0
    }
});

const mapStateToProps = state => {
    return {
        currentUser: state.auth.currentUser,
        charities: state.charity.charities 
    }
}

export default connect(mapStateToProps, {charityFetch})(UserChallengeDetail);