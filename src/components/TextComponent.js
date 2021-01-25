import React, { Component } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

class TextComponent extends Component {
    render() {
        // tAlign, tBold, txt - string
        // tColor, style - custom SSheet
        // tSize - number
        const { tAlign, tBold, tColor, tSize, txt, style } = this.props;

        let btsp = {
            color: tColor,
            fontSize: tSize,
            fontWeight: tBold,
            textAlign: tAlign
        };

        return (
            <Text style={[btsp, style]}>
                { txt }
            </Text>
        );
    }
}

TextComponent.propTypes = {
    txt: PropTypes.string.isRequired,
    tBold: PropTypes.string,
    tSize: PropTypes.number,
};

TextComponent.defaultProps = {
    txt: 'Text',
    tBold: '500',
    tSize: 15,
};

export default TextComponent;