import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import dvals from '../constants/default_values';
import colors from '../constants/colors';

class ItemHomeComponent extends Component {
    render() {
        const { link, title, srcImg, colorText } = this.props;

        return (
            <TouchableOpacity onPress={ link } style={btsp.container}>
                <Image source={srcImg} style={btsp.img} />
                <Text style={[btsp.txtTitle, { color: colorText }]}>{title}</Text>
            </TouchableOpacity>
        );
    }
}

const btsp = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.colorBlack,
        borderWidth: 0.5,
        borderColor: colors.colorTextTitle,
        height: dvals.HEIGHT * 0.175,
        justifyContent: 'center',
        padding: dvals.padding,
        width: dvals.WIDTH / 3,
    },
    img: {
        height: 45,
        width: 45
    },
    txtTitle: {
        fontWeight: '700',
    }
});

export default ItemHomeComponent;