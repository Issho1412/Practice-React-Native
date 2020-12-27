import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import dvals from '../../constants/default_values';

class ButtonComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, bg, actions } = this.props;
        return (
            <TouchableOpacity style={ [btsp.btn, {backgroundColor: bg}] } onPress={ actions }>
                <View style={btsp.outLine}>
                    <Text style={btsp.txt}>{name}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const btsp = StyleSheet.create({
    btn: {
        height: 65,
        width: 65,
        alignItems: 'center',
        borderRadius: dvals.borderRadius * 10,
        justifyContent: 'center',
        marginVertical: 20
    },
    outLine: {
        height: 60,
        width: 60,
        alignItems: 'center',
        borderRadius: dvals.borderRadius * 10 - 5,
        borderWidth: 2.5,
        justifyContent: 'center',
    },  
    txt: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default ButtonComponent;