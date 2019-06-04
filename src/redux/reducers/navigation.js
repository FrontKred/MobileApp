import * as C from "../constants";
import createReducer from '../helpers/createReducer';
import AppRouteConfigs from "../../navigators/AppRouteConfigs";

const actionsOne = AppRouteConfigs.router.getActionForPathAndParams('Login');
const initialNavState = AppRouteConfigs.router.getStateForAction(actionsOne);

const loggedInStatus = createReducer({}, {
    [C.LogIn.SET_LOGGED_IN_STATE](state, action) {
        return action;
    }
});


const nav = (state = initialNavState, action) => {
    const nextState = AppRouteConfigs.router.getStateForAction(action, state);
    return nextState || state;
};


export {
    loggedInStatus,
    nav
};