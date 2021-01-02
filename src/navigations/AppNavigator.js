import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import DayOne from '../views/week-one/day-one';
import DayTwo from '../views/week-one/day-two';
import DayThree from '../views/week-one/day-three';

import SplashScreen from '../views/splash-screen';
import Main from '../views/main';

const WeekOne = createStackNavigator({
    DayOne: { screen:  DayOne },
    DayTwo: { screen: DayTwo }, 
    DayThree: { screen: DayThree },
}, {
    headerMode: 'none',
    initialRouteName: 'DayOne',
});

const AppNavigator = createStackNavigator({
    SplashScreen: { screen: SplashScreen },
    Main: { screen: Main },
    WeekOne: { screen: WeekOne }
}, {
    headerMode: 'none',
    initialRouteName: 'Main',
});

const InitialNavigator = createStackNavigator({
    Auth: AppNavigator,
   // Bottom: TabBottomNavigator,
},{
    headerMode: 'none',
    headerShown: false,
    initialRouteName: 'Auth',
});

export default createAppContainer(InitialNavigator);