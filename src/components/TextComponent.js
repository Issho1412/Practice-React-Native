import React, { Component } from 'react';
import { Text } from 'react-native';

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

export default TextComponent;