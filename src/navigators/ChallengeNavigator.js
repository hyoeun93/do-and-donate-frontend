import { createStackNavigator } from 'react-navigation-stack';
import ActionBarImage from '../components/ActionBarImage';
import React from 'react'
import ChallengeCard from '../components/ChallengeCard';
import ChallengeScreen from '../screens/ChallengeScreen';
import ChallengeList from '../components/ChallengeList';
import ChallengeDetail from '../components/ChallengeDetail';
import ChallengeComment from '../components/ChallengeComment';

const ChallengeNavigator = createStackNavigator(
    {
        Challenges: {
            screen: ChallengeScreen,
            navigationOptions: () => ({
                headerTitle: <ActionBarImage />
            }),
        },

        ChallengeList: {
            screen: ChallengeList
        },
        
        ChallengeCard: {
            screen: ChallengeCard
        },

        ChallengeDetail: {
            screen: ChallengeDetail
        },

        ChallengeComment: {
            screen: ChallengeComment,
            navigationOptions: () => ({
                title: 'Comments'
            }),
        }
    }
)

export default ChallengeNavigator;