import React, {Component} from 'react';
import {
    Text,
    StyleSheet,
    View,
    Image
} from 'react-native';
import colors from '../styles/colors';
import RoundedButton from '../components/buttons/ButtonType01';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

export default class LoggedOut extends Component {

    onGooglePress(){
        alert('Нажата кнопка');
    }

    render() {
        return (
            <View style={styles.wrapper}>

                <View style={styles.headerWelcomeWrapper}>
                    <Image
                        source={require('../img/logo-CM01.png')}
                        style={styles.logo}/>

                    <Text style={styles.welcomeText}>
                        Продажа дорожной и строительной техники
                    </Text>
                </View>


                <View style={styles.buttonsWrapper}>
                    <Input
                        placeholder='Login'
                        leftIcon={
                            <Icon
                                name='user'
                                size={24}
                                color='black'
                            />
                        }
                    />

                    <RoundedButton
                        handleOnPress={this.onGooglePress}
                        text="Войти через Google"
                        color={colors.black}
                        background={colors.WHITE}
                        icon={<Icon name="google"
                                    style={styles.googleIcon}
                                    size={20}/>}
                    />
                    <RoundedButton
                        handleOnPress={this.onGooglePress}
                        text="Зарегистрироваться"
                        color={colors.BLACK}
                        icon={<Icon name="user-plus"
                                    style={styles.iconType01}
                                    size={20}/>}
                    />
                </View>


            </View>
        );
    }
}


const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        display: 'flex',
        zIndex:100,
        position: 'relative',
        backgroundColor: colors.GARGOYLE_GAS
    },
    headerWelcomeWrapper: {
        flex:1,
        padding: 20
    },
    buttonsWrapper:{
        display: 'flex',
        flex: 1,
        marginTop: 30,
        padding: 20
    },
    welcomeText:{
        fontSize:26,
        color:colors.WHITE,
        fontWeight: '300',
        marginBottom: 40
    },
    iconType01:{
        color: colors.BLACK,
        position: 'relative',
        left:20,
        zIndex:10
    },
    logo: {
        //width:100,
        //height:100,
        marginTop: 50,
        marginBottom: 50
    }
});


