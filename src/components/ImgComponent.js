import React, { Component } from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

class ImgComponent extends Component {
    render() {
        const { dirUrl, radius, height, width } = this.props;

        return (
            <Image source={ dirUrl }
                style= {{ height: height, width: width, borderRadius: radius }}
            />
        );
    }
}

ImgComponent.propTypes = {
    dirUrl: PropTypes.number.isRequired, 
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
};


export default ImgComponent;