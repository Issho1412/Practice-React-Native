import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import DayOne from '../views/week-one/day-one';
import DayTwo from '../views/week-one/day-two';
import DayThree from '../views/week-one/day-three';
import DayFour from '../views/week-one/day-four';

import DayFive from '../views/week-two/day-five';

import SplashScreen from '../views/splash-screen';
import Main from '../views/main';

const WeekOne = createStackNavigator({
    DayOne: { screen:  DayOne },
    DayTwo: { screen: DayTwo }, 
    DayThree: { screen: DayThree },
    DayFour: { screen: DayFour }
}, {
    headerMode: 'none',
    initialRouteName: 'DayOne',
});

const WeekTwo = createStackNavigator({
    DayFive: { screen: DayFive },
}, {
    headerMode: 'none',
    initialRouteName: 'DayFive',
});

const AppNavigator = createStackNavigator({
    SplashScreen: { screen: SplashScreen },
    Main: { screen: Main },
    WeekOne: { screen: WeekOne },
    WeekTwo: { screen: WeekTwo }
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