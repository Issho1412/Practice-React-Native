import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

class TitleBarComponent extends Component {
    render() {
        const { goHome } = this.props;

        return (
            <View style={[ btsp.container, {paddingVertical: 10} ]}>
                <Image style={ btsp.imgItem } source={require('../../assets/icons/icon-add.png')} />
                <TouchableOpacity onPress={ goHome }>
                    <Image style={ btsp.imgItem } source={require('../../assets/icons/icon-twitter.png')} />
                </TouchableOpacity>
                
                <View style={ btsp.container }> 
                    <Image style={ btsp.imgItem } source={require('../../assets/icons/icon-search.png')} />
                    <Image style={ btsp.imgItem } source={require('../../assets/icons/icon-edit.png')} />
                </View>
            </View>
        );
    }
}

const btsp = StyleSheet.create({
    container: { 
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imgItem: {
        height: 35,
        resizeMode: 'stretch',
        width: 35,
    }
});

export default TitleBarComponent;