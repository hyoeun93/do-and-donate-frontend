import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button } from 'react-native';
import Constants from 'expo-constants';
import { Card, CardItem } from 'react-native-elements';
// import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';
import { withNavigation } from 'react-navigation';
import ChallengeDetail from './ChallengeDetail';
// import { connect } from 'react-redux';

class ChallengeCard extends React.Component {
    render() {
        console.log('ChallengeCard', this.props.challenge.attributes)
        if(!this.props.challenge) {
            return <Text>'No Challenge Card'</Text>
        }
        const details = this.props.challenge.attributes
        return(
            
            <ScrollView style={styles.scrollView}>
    
                <Card borderRadius={8} style ={styles.cardStyle} title={this.props.challenge.attributes.title} image={{uri: this.props.challenge.attributes.donor.donor_img_url}}>
                    {/* <Image source={{uri : this.props.challenge.attributes.donor.donor_img_url}} style={{alignSelf: 'center', width: 150, height: 150, borderRadius: 200/2}}/> */}
                    <Text>Payout: ${this.props.challenge.attributes.payout}</Text>
                    <Text>Sponsored by: {this.props.challenge.attributes.donor.name}</Text>
                    <Button
                    color="#78A1BB"
                    title="More details"
                    onPress={() => this.props.navigation.navigate('ChallengeDetail', {details: details})}
                    />
                </Card>
                {/* <Card>
                    <CardTitle title={this.props.challenge.attributes.title}/>
                    <CardImage source={{uri : this.props.challenge.attributes.donor.donor_img_url}}/>
                    <CardContent text={this.props.challenge.attributes.payout} />
                    <CardContent text={this.props.challenge.attributes.donor.name}/>
                    <CardButton 
                    title="More details"
                    onPress={() => this.props.navigation.navigate('ChallengeDetail', {details: details})}
                    />
                </Card> */}
            </ScrollView>
            
            
        )
    }
        
    

}

const styles = StyleSheet.create({
    cardStyle: {
        borderWidth: 0,
        shadowColor:'#BFA89E'
      },
    scrollView: {
        marginHorizontal: 20, 
    }
})

export default withNavigation(ChallengeCard);