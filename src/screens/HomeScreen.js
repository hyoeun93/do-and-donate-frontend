import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';

class HomeScreen extends React.Component {
    state={
        date: ''
    }

    componentDidMount() {
        var that = this;
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        that.setState({
          //Setting the value of the date time
          date:
            date + '/' + month + '/' + year ,
        });
    }

    calculateUsers = () => {
        let count = 0;
        this.props.screenProps.challenges.data.map(challenge => {
            return count += challenge.relationships.users.data.length
        })
        return count;
    }

    calculateMoney = () => {
        let count = 0;
        this.props.screenProps.challenges.data.map(challenge => {
            return count += challenge.attributes.money_pot
        })
        return count;
    }

    render() {
        console.log('home', this.props.screenProps.challenges)
        const challenges = this.props.screenProps.challenges
        if(!challenges) {
            return <Text style={styles.textStyle} >Loading...</Text>
        }
        return(
            <View style={{ flex: 1 }}>
                <View style={{ alignItems: 'flex-start', paddingTop: 50, marginHorizontal: 50 }}>
                    <Text 
                    style={{
                        fontSize: 25,
                        fontWeight: 'bold',
                        color: '#78A1BB'
                        }}>
                        Today
                    </Text>
                    <Text
                    style={{
                    fontSize: 25,
                    marginTop: 5,
                    color: '#283044'
                    }}>
                    {this.state.date}
                    </Text>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 150}}>
                    
                    <Text style={styles.textStyle}>Total Challenges #</Text>
                        <Text style={styles.subText}>{challenges.data.length}</Text>
                    <Text style={styles.textStyle}>Total Participants #</Text>
                        <Text style={styles.subText}>{this.calculateUsers()}</Text>
                    <Text style={styles.textStyle}>Total Sponsored $</Text>
                        <Text style={styles.subText}>{this.calculateMoney()}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textStyle: {
        alignSelf: 'center', 
        justifyContent: 'center', 
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#283044'
    },
    subText: {
        fontWeight: 'bold',
        color: '#78A1BB'
    }
})

export default HomeScreen;