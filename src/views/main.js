import React, { Component } from 'react';
import { FlatList, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import dvals from '../constants/default_values';
import colors from '../constants/colors';

import ImgBgComponent from '../components/ImgBgComponent';
import ItemHome from '../components/ItemHomeComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lstItems: dvals.ITEMS_HOME,
        };
    }

    directItem = route => {
        this.props.navigation.navigate(route);
    };

    render() {
        const LST_ITEM = this.state.lstItems;
        const renderItem = ({ item }) => (
            <ItemHome 
                title={ item.title }
                srcImg={ item.src }
                colorText={ item.color }
                link={ () => { this.directItem(item.link) }}
            />
        );
        
        return (
            <View style={ [dvals.btsp.container, btsp.bgBlack] }>
                <ImgBgComponent text={ '30 Practices React-Native' }/>
                <FlatList 
                    numColumns='3'
                    data={ LST_ITEM }
                    renderItem={renderItem}
                    keyExtractor={ item => item.key }
                />
            </View>
        );
    }
}

const btsp = StyleSheet.create({
    bgBlack: {
    
    }
})

export default Main;