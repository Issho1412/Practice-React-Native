import React, { Component } from 'react';
import { ActivityIndicator, KeyboardAvoidingView, View, StyleSheet, ImageBackground } from 'react-native';
import TextCpn from '../../components/TextComponent';
import InputCpn from '../../components/TextInputComponent';

import colors from '../../constants/colors';
import dvalues from '../../constants/default_values';

import getImage from '../../functions/getImage';
import APIs from '../../constants/APIs';
import helperAPI from '../../functions/helperAPI';
import helper from '../../functions/helperAPI';

class DayFour extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avenue: 'Vancouver',
            loading: false,
            error: false,
            search: '',
            tempature: 'Waiting ... ',
            weather: 'Waiting ...'
        }
    }

    handleChangeText = (search) => { this.setState({ search }); } // shorthand property if param == prop

    handleUpdateLocation = () => {
        // Get Location ID
        var avenue = this.state.search;
        if (avenue.length <= 0) {
            avenue = 'Vancouver';
        }
        this.setState({ avenue: avenue });
        this.setState({ loading: true });
        helperAPI.FetchGetAPI(APIs.getLocationID + avenue, {}, '', (res) => {
            if (res.length > 0) {
                let woeid = res[0].woeid;

                // Get Weather Data
                helperAPI.FetchGetAPI(APIs.getWeather + woeid, {}, '', (data) => {
                    const result = data.consolidated_weather[0];

                    this.setState({ weather: result.weather_state_name });
                    this.setState({ tempature: Number.parseFloat(result.the_temp).toFixed(2) });
                    this.setState({ loading: false });
                });
            }
            else {
                this.setState({ weather: 'Not Found' });
                this.setState({ tempature: 'Not Found' });
            }
        });
    }

    render() {
        const { avenue, loading, tempature, search, weather } = this.state;

        return (
            <KeyboardAvoidingView style={[btsp.container]}>
                <ImageBackground
                    source={getImage('Weather')}
                    style={btsp.imgContainer}
                >
                    <View style={btsp.view}>
                        <TextCpn txt={avenue} tSize={35} tBold={'700'}/>

                        {
                            !loading ? <View>
                                            <TextCpn txt={weather} tSize={18}  tAlign={'center'} />
                                            <TextCpn txt={tempature + "°"} tSize={35} />
                                        </View> 
                                    :   <ActivityIndicator animating={loading} color={colors.colorGray} size="large" />
                        }


                        <InputCpn
                           
                            backgroundColor={colors.colorWhite}
                            onChangeText={this.handleChangeText}
                            onSubmit={this.handleUpdateLocation}
                            placeHolder={'Search ....'}
                            value={search}
                            width={dvalues.WIDTH * 0.6}
                        />
                    </View>
                </ImageBackground>
            </KeyboardAvoidingView>
        );
    }

    componentDidMount() {
        this.handleUpdateLocation();
    }
}

const btsp = StyleSheet.create({
    container: {
        flex: 1,
    },
    imgContainer: {
        flex: 1,
        resizeMode: 'stretch',
    },
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default DayFour;