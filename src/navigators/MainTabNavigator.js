import React from 'react';
import propTypes from 'prop-types';
import {
    createBottomTabNavigator,
    createStackNavigator
} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import ExploreContainer from "../containers/ExploreContainer";
import SavedContainer from "../containers/SavedContainer";
import ProfileContainer from "../containers/ProfileContainer";
import colors from "../styles/colors";


const ExploreTab = createStackNavigator({
        ExploreContainer: {
            screen: ExploreContainer,
            navigationOptions: {
                header: null
            },
        },
        //CreateList: {screen: CreateList}
    },
    {mode: 'modal'},
);

ExploreTab.navigationOptions = ({navigation}) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) tabBarVisible = false;
    return {tabBarVisible};
};


const CustomTabBarIcon = (name, size) => {
    const CustomIcon = ({tintColor}) => (
        <Icon
            name={name}
            size={size}
            color={tintColor}
        />
    );
    CustomIcon.propTypes = {
        tintColor: propTypes.string.isRequired
    };
    return CustomIcon;
};


const MainTabNavigator = createBottomTabNavigator({
    Catalog: {
        screen: ExploreTab,
        navigationOptions: {
            tabBarLabel: 'Каталог',
            tabBarIcon: CustomTabBarIcon('ios-cube', 22),
        }
    },
    Saved: {
        screen: SavedContainer,
        navigationOptions: {
            tabBarLabel: 'Сохраненные',
            tabBarIcon: CustomTabBarIcon('ios-heart', 22),
        },
    },
    Profile: {
        screen: ProfileContainer,
        navigationOptions: {
            tabBarLabel: 'Профиль',
            tabBarIcon: CustomTabBarIcon('ios-contact', 22),
        },
    },
}, {
    tabBarOptions: {
        tabStyle:{},
        labelStyle: {
            fontWeight: '600',
            marginBottom: 5,
        },
        // inactiveTintColor: colors.LIGHT_PASTEL_PURPLE,
        inactiveBackgroundColor:colors.BLACK,
        activeBackgroundColor : colors.SAFRON,
        activeTintColor: colors.BLACK
    },
    tabBarPosition: 'bottom'
});

export default MainTabNavigator;