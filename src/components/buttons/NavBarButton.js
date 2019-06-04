import React from 'react';
import propTypes from 'prop-types';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

const NavBarButton = ({title, float, handleButtonPress, color, icon}) => {
    const position = (float === 'right') ? {marginRight: 30} : {marginLeft: 30};
    console.log(color);
    return (
        <TouchableOpacity onPress={handleButtonPress}>
            {(icon) ?
                <View style={position}>{icon}</View> :
                <Text style={[{color}, position, styles.buttonText]}>{title}</Text>
            }
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    buttonText: {
        fontSize: 16,
    },
});

NavBarButton.propTypes = {
    title: propTypes.string.isRequired,
    float: propTypes.string,
    icon: propTypes.object,
    color: propTypes.string,
    handleButtonPress: propTypes.func
};


export default NavBarButton;