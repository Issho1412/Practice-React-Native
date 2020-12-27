import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import dvals from '../../constants/default_values';

class TimerComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { time_value } = this.props;
        return (
            <View style={btsp.container}>
                <Text style={btsp.txt}>
                    { time_value }
                </Text>
            </View>
        );
    }
}

const btsp = StyleSheet.create({
    container: {
        marginVertical: 10,
        width: dvals.WIDTH
    },
    txt: {
        color: 'white',
        fontSize: dvals.lrg_FontSize + 10,
        textAlign: 'center',
    }
});

export default TimerComponent;