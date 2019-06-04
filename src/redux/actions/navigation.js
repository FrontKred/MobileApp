import * as C from "../constants";
import {user} from '../../data/initialData';

const setLoggedInState=loggedInState=>(
    {
        type:C.LogIn.SET_LOGGED_IN_STATE,
        loggedInState
    }
);


const logIn=(email,pass)=>{
    const action = dispatch => {
        if (email === user.email && pass === user.password) {
            dispatch(setLoggedInState(true));
            return true;
        }
        dispatch(setLoggedInState(false));
        return false;
    };
    return action;
};


export {logIn,setLoggedInState}