import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeNavigator from './HomeNavigator';
import ChallengeScreen from '../screens/ChallengeScreen';
import MypageScreen from '../screens/MypageScreen';
import LoginNavigator from './LoginNavigator';
import ChallengeNavigator from './ChallengeNavigator';
import MyPageNavigator from './MypageNavigator';
// import TabBarIcon from '../components/TabBarIcon';


  const AppNavigator = createBottomTabNavigator(
    {
      Home: HomeNavigator,
      Challenges: ChallengeNavigator,
      MyPage: MyPageNavigator,
      Login: LoginNavigator
    },
    {
      initialRouteName: 'Home',
    }
  );
  
  export default createAppContainer(AppNavigator);