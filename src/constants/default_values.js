import { Dimensions, StyleSheet } from 'react-native';
import getImage from '../functions/getImage';
import colors from './colors';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const ITEMS_HOME = [
    { key: "1", color: colors.colorRed, link: 'DayOne', title: 'Day 1', src: getImage('IStopWatch') },
    { key: "2", color: colors.colorCyBlue, link: 'DayTwo', title: 'Day 2', src: getImage('ITweet') },
    { key: "3", color: colors.colorPurple, link: 'DayThree', title: 'Day 3', src: getImage('IGesture') },
    { key: "4", color: colors.colorRed, link: 'DayFour', title: 'Day 4', src: getImage('IWeather') },
    { key: "5", color: colors.colorWhite, link: '', title: 'Day 5', src: getImage('ISearch') },
    { key: "6", color: colors.colorCyBlue, link: '', title: 'Day 6', src: getImage('ISort') },
    { key: "7", color: colors.colorOrange, link: '', title: 'Day 7', src: getImage('ITinder') },
    { key: "8", color: colors.colorPink, link: '', title: 'Day 8', src: getImage('ISwipeMenu') },
    { key: "9", color: colors.colorRed, link: '', title: 'Day 9', src: getImage('IWeather') },
];

const btsp = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1, 
        justifyContent: 'flex-start'
    },

    imgLogo: {
        height: HEIGHT * 0.3,
        width: WIDTH * 0.75,
        resizeMode: 'stretch'
    },

    txtTitle: {
        color: colors.colorTextTitle,
        fontWeight: '700',
    }
});

export default {
    ITEMS_HOME,
    HEIGHT, 
    WIDTH,
    btsp,
    borderRadius: 5,
    marginVertical: 30,
    marginHorizontal: 30,
    ffamily: '',
    fontSize: 18,
    lrg_FontSize: 50, 
    padding: 30
}