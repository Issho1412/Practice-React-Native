import React, { Component } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { color } from 'react-native-reanimated';
import colors from '../constants/colors';
import values from '../constants/default_values';

export default class TextInputComponent extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        // editable - true/false
        // hidden - true/false
        // placeHolder - string
        // onChangeText - callback()
        // value - string
        const { backgroundColor, editable, hidden, placeHolder, onChangeText, onSubmit, value, width } = this.props;
        return (
            <TextInput 
                style = {[ btsp.input, { backgroundColor: backgroundColor, width: width } ]}
                editable = { (editable) ? true : editable }
                placeholder = {placeHolder}
                value = {value}
                secureTextEntry = {hidden}
                onChangeText = {onChangeText}
                onSubmitEditing = {onSubmit}
                clearButtonMode="always"
            />
        );
    }
};

const btsp = StyleSheet.create({
    input: {
        alignSelf: 'center',
        borderBottomColor: colors.colorGray,
        borderBottomWidth: 1,
        height: 40,
        marginVertical: values.padding / 3
    }
});