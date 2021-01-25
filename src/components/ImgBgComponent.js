import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Text } from 'react-native';
import dvals from '../constants/default_values';
import getImage from '../functions/getImage';
import PropTypes from 'prop-types';

class ImgBgComponent extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        const { text } = this.props;

        return(
            <ImageBackground source={getImage('Home')} style={ [btsp.img, btsp.container] }>
                 <Text style={ btsp.txtBody }> {text} </Text>
            </ImageBackground>
        )
    }
}   

ImgBgComponent.propTypes = {
    text: PropTypes.string,
};

const btsp = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'flex-end',
    },  
    img: {
        height: dvals.HEIGHT*0.25,
        width: dvals.WIDTH,
    },
    txtBody: {
        fontWeight: '700',
        fontSize: dvals.fontSize
    }
});

export default ImgBgComponent;