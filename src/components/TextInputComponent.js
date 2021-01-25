import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import TxtCpn from '../components/TextComponent';
import colors from '../constants/colors';
import values from '../constants/default_values';
import PropTypes from 'prop-types';

export default class TextInputComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // editable - true/false
        // hidden - true/false
        // placeHolder - string
        // onChangeText - callback()
        // value - string
        const { backgroundColor, label, editable, hidden, placeHolder, onChangeText, onSubmit, value, width } = this.props;
        return (
            <View>
                {
                    label ? <TxtCpn txt={label}
                                tBold={"bold"}
                                tSize={22}
                            /> 
                          : null
                }
                <TextInput
                    style={[btsp.input, { backgroundColor: backgroundColor, width: width }]}
                    editable={(editable) ? true : editable}
                    placeholder={placeHolder}
                    value={value}
                    secureTextEntry={hidden}
                    onChangeText={onChangeText}
                    onSubmitEditing={onSubmit}
                    clearButtonMode="always"
                />
            </View>
        );
    }
};

TextInputComponent.propType = {
    backgroundColor: PropTypes.string,
    label: PropTypes.string, 
    editable: PropTypes.bool,
    hidden: PropTypes.bool, 
    placeHolder: PropTypes.string, 
    onChangeText: PropTypes.func,
    value: PropTypes.string, 
};

TextInputComponent.defaultProps = {
    label: '', 
    editable: true,
    hidden: false, 
    placeHolder: 'input value', 
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