import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import TitleBar from '../TwitterLayout/TitleBarComponent';
import TwitterPost from '../TwitterLayout/TwitterPostComponent';
import getImage from '../../functions/getImage';

const demo_data = [
    {   
        comment: '140', key: '1', like: '190',
        imgCnt: getImage('Twitter1'),
        logo: getImage('logo-cnn'), 
        minute: '39 mm',
        summary: 'Arnold @Schwarzenegger is endorsing @JohnKasich', 
        title: 'CNN @CNN',
        uText: 'cnn.it./1TYfphR',  
    },
    {   
        comment: '154', key: '2', like: '291',
        imgCnt: getImage('Twitter2'),
        logo: getImage('logo-new-york'), 
        minute: '56 mm',
        summary: 'What to cook as "Downton Abbey" ends', 
        title: 'The New York Times @nytimes ',
        uText: 'nyti.ms/1U4T019',  
    },
];

export default class MainLayout extends Component {
    constructor (props){
        super(props);
    }

    render(){
        const renderItem = ({ item }) => (
            <TwitterPost 
                aComments = {item.comment}
                title = {item.title}
                imgCnt = {item.imgCnt}
                aLikes = {item.like}
                logo = {item.logo}
                minute = {item.minute}
                content = {item.summary}
                textU = {item.uText}
            />
        );

        return(
            <View style={ btsp.container }>
                <TitleBar 
                    goHome = { () => { this.props.navigation.navigate('Main') }}
                />
                <FlatList 
                    data = {demo_data}
                    renderItem = {renderItem}
                    keyExtractor = { item => item.key}
                />
            </View>
        )
    }
}

const btsp = StyleSheet.create({
    container: {
        flex: 1, 
    }
});