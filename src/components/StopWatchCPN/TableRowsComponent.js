import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import dvals from '../../constants/default_values';
import colors from '../../constants/colors';

class TableRowsComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { id, value } = this.props;
        return (
           <View style={btsp.container}>
               <Text style={{color: colors.colorWhite}}>{ id }</Text>
               <Text style={{color: colors.colorWhite}}>{ value }</Text>
           </View>
        );
    }
}

const btsp = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        borderBottomColor: colors.colorWhite,
        borderWidth: 0.2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        width: dvals.WIDTH * 0.8
    },
});

export default TableRowsComponent;