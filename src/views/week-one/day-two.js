import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import cvalues from '../../constants/default_values';

class DayTwo extends Component {
    render() { 
        return (
            <View style={btsp.container}>
                <Text style={btsp.textStyles}>
                    DAY 2
                </Text>
            </View>
        );
    }
}

const btsp = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#000',
        justifyContent: 'center'
    },
    textStyles: {
        color: colors.colorSplash,
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center'
    },
});

export default DayTwo;