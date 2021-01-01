import React, { Component } from 'react';
import { View, FlatList, Text, StyleSheet, Image } from 'react-native';
import TitleBar from '../TwitterLayout/TitleBarComponent';
import TwitterPost from '../TwitterLayout/TwitterPostComponent';

const demo_data = [
    {   
        comment: '140', key: '1', like: '140',
        imgCnt: require('../../assets/images/John-Kasich.jpg'),
        logo: require('../../assets/logos/cnn-logo.png'), 
        minute: '39 mm',
        summary: 'Arnold @Schwarzenegger is endorsing @JohnKasich', 
        title: 'CNN @CNN',
        uText: 'cnn.it./1TYfphR',  
    },
    {   
        comment: '154', key: '2', like: '291',
        imgCnt: require('../../assets/images/Cook-Food.jpg'),
        logo: require('../../assets/logos/new-york-logo.png'), 
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
                title = {item.title}
                imgCnt = {item.imgCnt}
                logo = {item.logo}
                minute = {item.minute}
                content = {item.summary}
                textU = {item.uText}
            />
        );

        return(
            <View style={ btsp.container }>
                <TitleBar></TitleBar>
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