import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';
import cvalues from '../constants/default_values';

class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        }
    }

    loadingSplashEnd = async () => {
        return new Promise((resolve) =>
            setTimeout(() => { resolve('result') },
                3000
            )
        )
    }

    render() {
        return (
            <View style={btsp.container}>
                <Text style={btsp.textStyles}>
                    PRACTICES
                </Text>

                <Image source={require('../assets/logos/logo-splash.jpg')} style={cvalues.btsp.imgLogo} />

                <Text style={btsp.textStyles}>
                    REACT NATIVE
                </Text>
            </View>
        );
    }

    async componentDidMount() {
        var direct = await this.loadingSplashEnd();
        if (direct != null) {
            this.props.navigation.navigate('Main');
        }
    }
}

const btsp = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#000',
        justifyContent: 'center'
    },
    textStyles: {
        color: colors.colorSplash,
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center'
    },
});

export default SplashScreen;