import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Animated,
    Easing
} from 'react-native';
import propTypes from 'prop-types';
import {Input} from 'react-native-elements';
import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class InputField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            secureInput: !!props.secureTextEntry,
            inputValue: props.defaultValue,
            scaleCheckInputValue: new Animated.Value(0),
            positionShowButton:new Animated.Value(15)
        }
    }

    scaleCheckInput(val) {
        Animated.timing(
            this.state.scaleCheckInputValue,
            {
                toValue: val,
                duration: 500,
                easing: Easing.easeOut
            }
        ).start()
    }

    shiftShowButton(val){
        const {positionShowButton} = this.state;
        Animated.timing(
            positionShowButton,
            {
                toValue:val,
                duration: 500,
                easing: Easing.easeOut
            }
        ).start();
    }

    toogleShowPassword() {
        this.setState({secureInput: !this.state.secureInput});
    }

    onChangeText(text) {
        this.props.onChangeText(text)
    }

    render() {
        const {secureTextEntry, placeholder, icon, showCheckInput,autoFocus,autoCapitalize} = this.props;
        const {secureInput, inputValue, scaleCheckInputValue,positionShowButton} = this.state;
        const iconScale = scaleCheckInputValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0.01, 1.6, 1],
        });

        const scaleValue = showCheckInput ? 1 : 0;
        if(scaleValue===1){
            this.shiftShowButton(45);

        }else{
            this.shiftShowButton(15);
        }
        this.scaleCheckInput(scaleValue);
        return (
            <View>
                <Input
                    value={inputValue}
                    onChangeText={(text) => this.onChangeText(text)}
                    inputContainerStyle={{borderColor: colors.BLACK}}
                    secureTextEntry={secureInput}
                    placeholder={placeholder}
                    leftIcon={icon}
                    autoFocus={autoFocus}
                    autoCapitalize={autoCapitalize}
                />

                <Animated.View style={[{transform: [{scale: iconScale}]}, styles.checkInputWrapper]}>
                    <Icon
                        name="check"
                        size={20}
                        color={colors.BLACK}
                    />
                </Animated.View>

                {(secureTextEntry) ?
                    <Animated.View
                        style={[{right: positionShowButton},styles.showButtonWrapper]}>
                        <TouchableOpacity
                            onPress={() => this.toogleShowPassword()}>
                            {secureInput ? <Icon name="eye" size={20}/>
                                : <Icon name="eye-slash" size={20}/>
                            }
                        </TouchableOpacity>
                    </Animated.View>

                    : null
                }
            </View>
        )
    }
};
InputField.propTypes = {
    placeholder: propTypes.string,
    color: propTypes.string,
    icon: propTypes.object,
    secureTextEntry: propTypes.bool,
    onChangeText: propTypes.func,
    showCheckInput: propTypes.bool.isRequired,
    autoFocus:propTypes.bool,
    autoCapitalize:propTypes.string
};
const styles = StyleSheet.create({
    showButtonWrapper: {
        position: 'absolute',
        bottom: 15,
    },
    checkInputWrapper: {
        position: 'absolute',
        bottom: 15,
        right: 15
    }
});
