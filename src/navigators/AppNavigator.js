import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    createReduxContainer,
    createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import {applyMiddleware, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";
import reducer from "../redux/reducers";
import AppRouteConfigs from './AppRouteConfigs';


const App = createReduxContainer(AppRouteConfigs);

const AppWithNavigationState = connect(
    (state) =>
        ({
            state: state.nav,
        }),
)(App);

const middlewareNavigate = createReactNavigationReduxMiddleware(
    state => state.nav
);

const storeFactory = (initialState = {}) => {
    const add = compose(
        applyMiddleware(
            middlewareNavigate,
            thunkMiddleware,
            logger
        )
    );
    return createStore(reducer, initialState, add);
};
const Root = () => <AppWithNavigationState/>;

export {
    Root,
    storeFactory
}
