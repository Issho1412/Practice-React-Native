import React, { Component } from 'react';
import { Image, Text, StyleSheet, View } from 'react-native';
import cvalues from '../../constants/default_values';
import colors from '../../constants/colors';

class TwitterPostComponent extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        const { aLikes, aComments, title, imgCnt, logo, minute, content, textU } = this.props;
        return (
            <View style={[ btsp.container ]}>
                <Image style={btsp.imgItem} source={ logo } />
                <View style={btsp.content}>
                    <View style={[ btsp.flexRow, { justifyContent: 'space-between'} ]}>
                        <Text style={ btsp.txtLogo }> { title } </Text>
                        <Text style={ btsp.fontSmall }> { minute } </Text>
                    </View>
                    
                    <View style={[ btsp.flexRow, { flexWrap: 'wrap'} ]}>
                        <Text style={ btsp.fontSmall }> { content } </Text>
                        <Text style={ btsp.txtU }>{ textU }</Text>
                    </View>
                    
                    <Image style={ btsp.imgCnt } source={ imgCnt }/>
                    
                    <View style={[ btsp.flexRow, { justifyContent: 'space-between' } ]}>
                        <View style={ btsp.flexRow }> 
                            <Image style={ btsp.icon } source={require('../../assets/icons/icon-back.png')} />
                            <Text></Text> 
                        </View>
                        <View style={ btsp.flexRow }> 
                            <Image style={ btsp.icon } source={require('../../assets/icons/icon-heart.png')} />
                            <Text style={ btsp.fontSmall }> { aLikes }</Text> 
                        </View>
                        <View style={ btsp.flexRow }> 
                            <Image style={ btsp.icon } source={require('../../assets/icons/icon-exchange.png')} />
                            <Text style={ btsp.fontSmall }> { aComments }</Text> 
                        </View>
                    </View> 
                </View>
            </View>
        );
    }
}

const btsp = StyleSheet.create({
    container: {
        backgroundColor: colors.colorWhite,
        flexDirection: 'row',
        padding: 10
    },
    content: {
        flex: 1,
    },
    flexRow: {
        flexDirection: 'row',
        marginHorizontal: 5,
        marginVertical: 2.5
    },
    fontSmall: {
        fontSize: 11.5
    },
    icon: {
        height: 15,
        width: 15,
        resizeMode: 'stretch'
    },
    imgItem: {
        borderRadius: 10,
        height: 40,
        width: 40
    },
    imgCnt: {
        borderRadius: 10,
        height: cvalues.HEIGHT * 0.225,
        width: cvalues.WIDTH - 100,
        resizeMode: 'stretch'
    },
    txtLogo: {
        fontWeight: '700',
        fontSize: 11.5,
        textAlign: 'right'
    },
    txtU: {
        color: '#00ACEE',
        marginLeft: 10,
        textDecorationLine:'underline'
    }
});

export default TwitterPostComponent;
