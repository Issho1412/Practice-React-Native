import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import getImage from '../../functions/getImage';

class TitleBarComponent extends Component {
    render() {
        const { goHome } = this.props;

        return (
            <View style={[ btsp.container, {paddingVertical: 10} ]}>
                <Image style={ btsp.imgItem } source={getImage('icon-add')} />
                <TouchableOpacity onPress={ goHome }>
                    <Image style={ btsp.imgItem } source={getImage('icon-twitter')} />
                </TouchableOpacity>
                
                <View style={ btsp.container }> 
                    <Image style={ btsp.imgItem } source={getImage('icon-search')} />
                    <Image style={ btsp.imgItem } source={getImage('icon-edit')} />
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