import React, { Component } from 'react';
import AppNavigator from './navigations/AppNavigator';

export default class IndexRender extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AppNavigator></AppNavigator>
        )
    }
}