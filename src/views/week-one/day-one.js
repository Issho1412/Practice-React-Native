import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import cvalues from '../../constants/default_values';

import BtnRowCpn from '../../components/StopWatchCPN/ButtonComponent';
import TableRowsCpn from '../../components/StopWatchCPN/TableRowsComponent';
import TimerCpn from '../../components/StopWatchCPN/TimerComponent';
import TitleCpn from '../../components/TitleComponent';
import moment from 'moment';

let start = null;
class DayOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayData: [],
            startTime: '',
            startBtn: true,
            eslasp: 0,
            time: '00: 00: 00',
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        if (this.state.time != nextState.time) {
            return false;
        }
        else {
            return true;
        }
    }

    returnBack = () => {
        this.props.navigation.navigate('Main');
    }
    reset = () => {
        clearInterval(start);
        this.setState({ time: '00: 00: 00' });
        this.setState({ eslasp: 0 });
        this.setState({ arrayData: [] });
        start = '';
    }
    start = () => {
        var esclap = this.state.eslasp;
        var startTime = new Date().getTime() - esclap;
        start = setInterval(() => {
            esclap = new Date().getTime() - startTime;
            this.setState({ eslasp: esclap });
            this.setState({ time: moment(esclap).format('mm:ss:SS') });
        }, 100);
        this.setState({ startBtn: false });
    }
    pause = () => {
        clearInterval(start);
        var new_data = this.state.time;
        this.setState({ arrayData: [...this.state.arrayData, new_data] });
        this.setState({ startBtn: true });
    }

    render() {
        const { arrayData, startBtn } = this.state;
        return (
            <View style={btsp.container}>
                <BtnRowCpn name='Back' bg={colors.colorOrange} actions={this.returnBack} />
                <TitleCpn txt={'STOP WATCH'} />
                <TimerCpn time_value={this.state.time} />
                <View style={btsp.btnRow}>
                    {
                        startBtn ? <BtnRowCpn name='Start' bg={colors.colorGreen} actions={this.start} /> : <BtnRowCpn name='Stop' bg={colors.colorRed} actions={this.pause} />
                    }
                    <BtnRowCpn name='Reset' bg={colors.colorPurple} actions={this.reset} />
                </View>
                <ScrollView>
                    {
                        arrayData.map((x, index) =>
                            <TableRowsCpn value={x} key={index} id={'Stoped at: '} />
                        )
                    }
                </ScrollView>

            </View>
        );
    }
}

const btsp = StyleSheet.create({
    btnRow: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        paddingHorizontal: cvalues.WIDTH * 0.1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#000',
        justifyContent: 'center',
        paddingVertical: cvalues.HEIGHT * 0.1
    },
});

export default DayOne;