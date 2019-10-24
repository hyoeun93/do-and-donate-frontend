import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Button, StyleSheet } from 'react-native';
import MychallengeScreen from './MychallengeScreen'

class MypageScreen extends React.Component {

    render() {
        return(
            <View style={{ flex: 1 }}>
                <View style={{ alignItems: 'flex-start', paddingTop: 20, marginHorizontal: 50}}>
                    <Text style={styles.title}>Welcome {this.props.currentUser.username} 🎃</Text>
                </View>
                {/* <MychallengeScreen /> */} 
                <View style={styles.container} >
                    <Button color="#78A1BB" title="My Challenges" onPress={() => this.props.navigation.navigate('MyChallenge')}></Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    textStyle: {
        marginBottom: 20,
        fontSize: 16,
        lineHeight: 19,
        fontWeight: 'bold'
    },
})

const mapStateToProps = state => {
    return {
        currentUser: state.auth.currentUser 
    }
}

export default connect(mapStateToProps)(MypageScreen);