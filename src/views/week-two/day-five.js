import React, { Component } from 'react';
import { ActivityIndicator, KeyboardAvoidingView, View, StyleSheet, ImageBackground } from 'react-native';
import TextCpn from '../../components/TextComponent';
import BtnCpn from '../../components/BtnComponent';
import colors from '../../constants/colors';
import dvalues from '../../constants/default_values';

class DayFive extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: false,
        }
    }

    render() {
        //const {  } = this.state;

        return (
            <View>
                <TextCpn txt=''/>
                <BtnCpn 
                    txt={'+'}
                    borderColor={'#22B14C'}
                />

            </View>
        );
    }

    componentDidMount() {
       
    }
}

const btsp = StyleSheet.create({
    container: {
        flex: 1,
    },

});

export default DayFive;