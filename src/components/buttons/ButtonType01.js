import React, {Component} from 'react';
import {
    TouchableHighlight,
    StyleSheet
} from "react-native";
import propTypes from 'prop-types';
import colors from '../../styles/colors';
import {Button} from 'react-native-elements';



const ButtonType01 = ({icon, styleTitle, buttonStyle, type, title, handleOnPress, validForm}) => {
    const opacity = !validForm ? 1 : 0.8;
    const titleStyle = (styleTitle) ? {...styleTitle, textTransform: 'uppercase'} : {
        textTransform: 'uppercase',
        color: colors.TEAL_BLUE
    };
    return (
        <TouchableHighlight>
            <Button
                titleStyle={titleStyle}
                buttonStyle={[{opacity}, buttonStyle]}
                onPress={handleOnPress}
                icon={icon}
                type={type}
                title={title}
            />
        </TouchableHighlight>
    )
};

ButtonType01.propTypes = {
    title: propTypes.string.isRequired,
    icon: propTypes.object,
    type: propTypes.string,
    validForm: propTypes.bool,
    buttonStyle: propTypes.object,
    styleTitle: propTypes.object,
    handleOnPress: propTypes.func.isRequired
};


export default ButtonType01;