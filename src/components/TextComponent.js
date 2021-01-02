import React, { Component } from 'react';
import { Text } from 'react-native';

class TextComponent extends Component {
    render() {
        const { tAlign, tBold, tColor, tSize, txt,  } = this.props;
        let btsp = {
            color: tColor,
            fontSize: tSize,
            fontWeight: tBold,
            textAlign: tAlign
        };

        return (
            <Text style={ btsp }>
                { txt }
            </Text>
        );
    }
}

export default TextComponent;