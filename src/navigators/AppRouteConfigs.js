import {createStackNavigator} from "react-navigation";
import Login from "../screens/Login";
import ForgotPassword from "../screens/ForgotPassword";
import MainTabNavigator from "./MainTabNavigator";

const AppRouteConfigs=createStackNavigator({
    Login: {screen: Login},
    MainScreen:{
        screen:MainTabNavigator,
        navigationOptions:{
            header:null,
            gesturesEnabled: false,
        }
    },
    ForgotPassword: {screen: ForgotPassword}
});
export default AppRouteConfigs;