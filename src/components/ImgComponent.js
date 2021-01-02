import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';

class ImgComponent extends Component {
    render() {
        const { dirUrl, height, width } = this.props;

        return (
            <Image source={ dirUrl }
                style= {{ height: height, width: width }}
            />
        );
    }
}

const btsp = StyleSheet.create({
    imgConst: {
        resizeMode: 'stretch'
    }
});

export default ImgComponent;