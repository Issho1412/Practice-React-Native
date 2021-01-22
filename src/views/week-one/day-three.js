import React, { Component } from 'react';
import { Animated, ImageBackground, PanResponder, StyleSheet } from 'react-native';
import TextCpn from '../../components/TextComponent';
import ImgCpn from '../../components/ImgComponent';
import colors from '../../constants/colors';

class DayThree extends Component {
    constructor(props){
        super(props);
        this.state = {
            ball: new Animated.ValueXY(),
            panMove: ''
        }
    }

    moveBall = (obj) => {
        var panResponder = PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
              obj.setOffset({
                x: obj.x._value,
                y: obj.y._value
              });
            },
            onPanResponderMove: Animated.event([
              [
                null,
                { dx: obj.x, dy: obj.y }
              ], { useNativeDriver: true }
            ]),
            onPanResponderRelease: () => {
              obj.flattenOffset();
            }
        });

        this.setState({ panMove: panResponder });
    }

    UNSAFE_componentWillMount(){
        this.moveBall(this.state.ball);
    }

    render() {
        const { ball, panMove } = this.state;
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

                <Animated.View
                    style={{ transform: [{ translateX: ball.x }, { translateY: ball.y }] }}
                    {...panMove.panHandlers}>
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