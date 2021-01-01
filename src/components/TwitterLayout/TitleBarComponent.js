import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

class TitleBarComponent extends Component {
    render() {
        return (
            <View style={[ btsp.container, {paddingVertical: 10} ]}>
                <Image style={ btsp.imgItem } source={require('../../assets/icons/icon-add.png')} />
                <Image style={ btsp.imgItem } source={require('../../assets/icons/icon-twitter.png')} />
                
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