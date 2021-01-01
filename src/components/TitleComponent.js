import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';
import dvals from '../constants/default_values';

class TitleComponent extends Component {
    render() {
        const { txt } = this.props;

        return(
            <View style={ btsp.border }>
                <Text style={ btsp.txtTitle }>{txt}</Text> 
            </View>
        );
    }
}

const btsp = StyleSheet.create({
    border: {
        borderColor: colors.colorTextTitle,
        borderWidth: 1,
        padding: 5,
        width: dvals.WIDTH * 0.85
    },
    txtTitle: {
        color: colors.colorTextTitle,
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});
export default TitleComponent;