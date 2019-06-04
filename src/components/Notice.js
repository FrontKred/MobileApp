import React, {Component} from 'react';
import propTypes from 'prop-types';
import color from '../styles/colors';
import {
    View,
    Text,
    Easing,
    Animated,
    TouchableOpacity, StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../styles/colors';

export default class Notice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            positionValue: new Animated.Value(-60)
        }
    }

    closeNotice() {
        this.props.handleCloseNotice();
    }

    showNoticeAnimate(value) {
        const {positionValue} = this.state;
        Animated.timing(
            positionValue,
            {
                toValue: value,
                duration: 300,
                velocity: 3,
                tension: 2,
                friction: 8,
                easing: Easing.easeOutBack,
            }
        ).start();
    }

    render() {
        const {type, firstLine, secondLine, showNotice} = this.props;
        showNotice ? this.showNoticeAnimate(0) : this.showNoticeAnimate(-60);
        const {positionValue} = this.state;
        return (
            <Animated.View style={[{marginBottom: positionValue}, styles.wrapper]}>
                <View style={styles.errorMessageContainer}>

                    <View style={styles.errorMessage}>
                        <Text style={styles.errorText}>{type}</Text>
                        <Text>{firstLine}</Text>
                    </View>
                    <Text>{secondLine}</Text>
                </View>
                <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => this.closeNotice()}>
                    <Icon
                        name="times"
                        size={20}
                        color={colors.LIGHT_GRAY}
                    />
                </TouchableOpacity>


            </Animated.View>
        )
    }
}


Notice.propTypes = {
    type: propTypes.string.isRequired,
    firstLine: propTypes.string,
    secondLine: propTypes.string,
    showNotice: propTypes.bool,
    handleCloseNotice:propTypes.func.isRequired
};
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        padding: 10,
        zIndex:200,
        height: 60,
        backgroundColor: colors.WHITE,
    },
    errorMessageContainer: {
        flex: 1,
        marginBottom: 2,
    },
    errorMessage: {
        flexDirection: 'row',
        flex: 1,
    },
    errorText: {
        fontSize: 14,
        marginRight: 5,
        color: colors.COQUELICOT,
        fontWeight: '600'
    },
    closeButton: {
        position: 'absolute',
        right: 5,
        top: 5,
    }

});