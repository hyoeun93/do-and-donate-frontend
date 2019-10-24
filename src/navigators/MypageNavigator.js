import { createStackNavigator } from 'react-navigation-stack';
import ActionBarImage from '../components/ActionBarImage';
import React from 'react'
import MypageScreen from '../screens/MypageScreen'
import MychallengeScreen from '../screens/MychallengeScreen';
import UserChallengeList from '../components/UserChallengeList';
import UserChallengeCard from '../components/UserChallengeCard';
import UserChallengeDetail from '../components/UserChallengeDetail';

const MyPageNavigator = createStackNavigator(
    {
        MypageScreen: {
            screen: MypageScreen,
            navigationOptions: () => ({
                headerTitle: <ActionBarImage />
            }),
        },
        MyChallenge: {
            screen: MychallengeScreen
        },
        UserChallengeList: {
            screen: UserChallengeList
        },
        UserChallengeCard: {
            screen: UserChallengeCard
        },
        UserChallengeDetail: {
            screen: UserChallengeDetail
        }
       
    }
)

export default MyPageNavigator;