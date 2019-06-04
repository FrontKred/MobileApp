import {createStackNavigator} from "react-navigation";
import Login from "../screens/Login";
import ForgotPassword from "../screens/ForgotPassword";

const AppRouteConfigs=createStackNavigator({
    Login: {screen: Login},
    ForgotPassword: {screen: ForgotPassword}
});
export default AppRouteConfigs;