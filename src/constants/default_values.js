import { Dimensions, StyleSheet } from 'react-native';
import colors from './colors';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const ITEMS_HOME = [
    { key: "1", color: colors.colorRed, link: 'DayOne', title: 'Day 1', src: require('../assets/images/icon-stop-watch.png') },
    { key: "2", color: colors.colorCyBlue, link: 'DayTwo', title: 'Day 2', src: require('../assets/images/icon-tweet.png') },
    { key: "3", color: colors.colorGreen, link: '', title: 'Day 3', src: require('../assets/images/icon-twitter.png') },
    { key: "4", color: colors.colorPurple, link: '', title: 'Day 4', src: require('../assets/images/icon-gesture.png') },
    { key: "5", color: colors.colorWhite, link: '', title: 'Day 5', src: require('../assets/images/icon-search.png') },
    { key: "6", color: colors.colorCyBlue, link: '', title: 'Day 6', src: require('../assets/images/icon-sort.png') },
    { key: "7", color: colors.colorOrange, link: '', title: 'Day 7', src: require('../assets/images/icon-tinder.png') },
    { key: "8", color: colors.colorPink, link: '', title: 'Day 8', src: require('../assets/images/icon-swipe-menu.png') },
    { key: "9", color: colors.colorRed, link: '', title: 'Day 9', src: require('../assets/images/icon-weather.png') },
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