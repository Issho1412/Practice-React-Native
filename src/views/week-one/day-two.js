import React, { Component } from 'react';
import { Animated, View, Image, Text, StyleSheet } from 'react-native';
import BtnRowCpn from '../../components/StopWatchCPN/ButtonComponent';
import TitleCpn from '../../components/TitleComponent';
import TwitterLayout from '../../components/TwitterLayout/MainLayout';
import colors from '../../constants/colors';
import cvalues from '../../constants/default_values';

class DayTwo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            load_flash: true,
            zoomValue: new Animated.Value(cvalues.WIDTH * 0.4)
        }
    }

    zoomIn = () => {
        Animated.timing(this.state.zoomValue, {
            toValue: cvalues.WIDTH* 2,
            duration: 2000,
            useNativeDriver: false
        }).start();
    }

    loadFlashScreen = () => {
        setTimeout( () => {
            this.setState({ load_flash: false })
        }, 2100);
    }

    returnBack = () => {
        this.props.navigation.navigate('Main');
    }

    componentDidMount() {
        this.zoomIn();
        this.loadFlashScreen();
    }

    render() {
        const { load_flash, zoomValue } = this.state;

        return (
            <View style={btsp.container}>
                {
                    load_flash 
                    ?   <View style={btsp.flashScreen}>
                            <Animated.Image style={[ {width: zoomValue}, {height: zoomValue} ]} 
                                    source={require('../../assets/logos/logo-twitter.png')} 
                            ></Animated.Image>
                        </View> 
                    :   <TwitterLayout />
                }
            </View>
        );
    }
}

const btsp = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    flashScreen: {
        backgroundColor: '#00ACEE',
        borderColor: colors.colorTextTitle,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        height: cvalues.HEIGHT * 0.4,
        width: cvalues.WIDTH * 0.4,
    },
    textStyles: {
        color: colors.colorSplash,
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center'
    },
});

export default DayTwo;