import React,{Component} from 'react';
import {Provider} from 'react-redux';
import Login from "./src/screens/Login";
import {Root,storeFactory} from './src/navigators/AppNavigator';

export default class App extends Component {
    render() {
        return (
            <Provider store={storeFactory()}>
                <Root/>
            </Provider>
        );
    }
}
