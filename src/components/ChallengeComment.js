import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, FlatList } from 'react-native';
import Constants from 'expo-constants';
// import { connect } from 'react-redux';

class ChallengeComment extends React.Component{
    state = {
        comment: "",
        commentlist: []
    }

    render() {
        console.log('commentTEST', this.props.navigation.state.params)
        const data = this.props.navigation.state.params.uChallenges
        if(!this.props.navigation.state.params.uChallenges)
            return<Text>Loading...</Text>
        return (
            <ScrollView style={ styles.scrollView}>
                <FlatList 
                    data={data}
                    renderItem={({item}) => (
                        <Item title={item.attributes.content} />
                    )}
                    keyExtractor={item => item.id}
                />
                {/* {this.props.navigation.state.params.uChallenges.map(uChallenge => {
                    return <FlatList key={uChallenge.id}>{uChallenge.attributes.content} />
                })} */}
            </ScrollView>
        )
        

    }    
    

}

function Item({ title }) {
    return (
      <View style={styles.item} >
        <Text style={styles.title}>{title}</Text>
      </View>
    );
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
    },
    item: {
        borderRadius:10,
        // backgroundColor: '#E8E9F3',
        padding: 20,
        borderWidth: 1,
        borderColor: '#A6A6A8',
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 15,
    },
})
export default ChallengeComment;