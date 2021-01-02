import React, { Component } from 'react';
import { Animated, ImageBackground, PanResponder, Text, StyleSheet, View } from 'react-native';
import TextCpn from '../../components/TextComponent';
import ImgCpn from '../../components/ImgComponent';
import colors from '../../constants/colors';
import cvalues from '../../constants/default_values';

class DayThree extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const { } = this.state;
        return (
            <ImageBackground style={btsp.container} source={require('../../assets/images/agrass.png')}>
                <TextCpn
                    tAlign={'center'}
                    tBold={'700'}
                    tColor={colors.colorWhite}
                    tSize={30}
                    txt={'DAY 3'}
                />
                <TextCpn
                    tAlign={'center'}
                    tBold={'700'}
                    tColor={colors.colorWhite}
                    tSize={30}
                    txt={'GESTURE HANDLER'}
                />

                <Animated.View>
                    <ImgCpn
                        dirUrl={require('../../assets/icons/icon-baseball.png')}
                        height={300}
                        width={300}
                    />
                </Animated.View>
            </ImageBackground>
        );
    }
}

const btsp = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#000',
        justifyContent: 'center',
    },
});

export default DayThree;