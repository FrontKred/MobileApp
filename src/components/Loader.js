import React, {Component} from 'react';
import propTypes from 'prop-types';
import color from '../styles/colors';
import {
    View,
    Image,
    Modal,
    StyleSheet
} from 'react-native';

export default class Loader extends Component{

    render() {
        const {animationType,visibleModal}=this.props;
        return (
            <Modal
                animationType={animationType}
                transparent={true}
                visible={visibleModal}>
                <View style={styles.wrapper}>
                    <View style={styles.loaderContainer}>
                        <Image
                            style={styles.loaderImage}
                            source={require('../img/loader2.gif')}
                        />
                    </View>
                </View>
            </Modal>
        );
    }

}
Loader.propTypes={
    animationType:propTypes.string.isRequired,
    visible:propTypes.bool
};

const styles=StyleSheet.create({
    wrapper:{
        zIndex:10,
        backgroundColor:color.YELLOW,
        position: 'absolute',
        top:0,
        left:0,
        bottom:0,
        right:0
    },
    loaderContainer:{
        width:50,
        height:50,
        position: 'absolute',
        left:'50%',
        top: '50%',
        marginLeft:-25,
        marginTop:-25,
        borderRadius:15,
        backgroundColor: color.WHITE
    },
    loaderImage:{
        width:'100%',
        height:'100%',
        borderRadius:15,
    }
});