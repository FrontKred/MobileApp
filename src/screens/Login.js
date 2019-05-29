import React, {Component} from 'react';
import {
    Text,
    View,
    ScrollView,
    KeyboardAvoidingView,
    Image
} from 'react-native';
import colors from '../styles/colors';
import ButtonType01 from '../components/buttons/ButtonType01';
import InputField from '../components/form/InputField';
import styles from './styles/LogIn';
import Icon from 'react-native-vector-icons/FontAwesome';
import Notice from '../components/Notice';
import Loader from '../components/Loader';


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formValid: true,
            validEmail: false,
            email: '',
            validPassword: false,
            loaderVisible: false
        };
    }

    onLoginPress() {
        this.setState({loaderVisible: true});

        setTimeout(() => {

            if (!this.state.validEmail || !this.state.validPassword) {
                this.setState({formValid: false, loaderVisible: false})
            } else {
                this.setState({formValid: true, loaderVisible: false},()=>{
                    alert('Success');
                });

            }

        }, 2000);

    }

    handleCloseNotice() {
        this.setState({
            formValid: true
        })
    }

    handleEmailChange(email) {
        const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.setState({email});
        const {validEmail} = this.state;
        if (!validEmail) {
            if (emailCheckRegex.test(email)) {
                this.setState({
                    validEmail: true
                })
            }
        } else {
            if (!emailCheckRegex.test(email)) {
                alert('не прошел');
                this.setState({
                    validEmail: false
                })
            }
        }
    }


    handlePasswordChange(password) {
        const {validPassword} = this.state;
        if (!validPassword) {
            if (password.length >= 5) {
                this.setState({validPassword: true})
            }
        } else {
            if (password.length < 5) {
                this.setState({validPassword: false})
            }
        }
    }

    toogleChangeState() {
        const {validPassword, validEmail} = this.state;
        return validPassword && validEmail;
    }

    render() {
        const {formValid, loaderVisible,validEmail,validPassword} = this.state;
        const showNotice = !formValid;
        const background = formValid ? colors.GARGOYLE_GAS : colors.LIGHT_GRAY;
        return (
            <KeyboardAvoidingView
                behavior="padding"
                style={[{backgroundColor: background}, styles.wrapper]}>
                <View style={styles.scrollViewWrapper}>
                    <ScrollView style={styles.scrollView}>
                        <View style={styles.headerWelcomeWrapper}>
                            <View style={styles.welcomeWrapper}>
                                <Image
                                    source={require('../img/logo-CM01.png')}
                                    style={styles.logo}/>
                                <Text style={styles.welcomeText}>
                                    Продажа дорожной и строительной техники
                                </Text>
                            </View>
                            <View style={styles.formWrapper}>
                                <InputField
                                    placeholder='Email'
                                    onChangeText={(text) => this.handleEmailChange(text)}
                                    icon={<Icon name="envelope" size={15}/>}
                                    showCheckInput={validEmail}
                                    autoFocus={true}
                                    autoCapitalize={'characters'}
                                />
                                <InputField
                                    secureTextEntry
                                    onChangeText={(password) => this.handlePasswordChange(password)}
                                    placeholder='Password'
                                    icon={<Icon name="lock" size={20}/>}
                                    showCheckInput={validPassword}
                                />
                            </View>
                            <View style={styles.buttonsWrapper}>
                                <ButtonType01
                                    handleOnPress={() => this.onLoginPress()}
                                    validForm={!this.toogleChangeState()}
                                    buttonStyle={styles.buttonLogin}
                                    styleTitle={{color: colors.WHITE, paddingLeft: 10}}
                                    title="Войти"
                                    icon={<Icon
                                        name="sign-in"
                                        size={15}
                                        color={colors.WHITE}/>}
                                />
                                <ButtonType01
                                    handleOnPress={() => this.onLoginPress()}
                                    buttonStyle={styles.buttonReg}
                                    styleTitle={{color: colors.GARGOYLE_GAS, paddingLeft: 10}}
                                    title="Зарегистрироваться"
                                    type='solid'/>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.noticeWrapper}>
                    <Notice
                        showNotice={showNotice}
                        type="Error"
                        firstLine="Неккоректные данные"
                        secondLine="Повторите попытку"
                        handleCloseNotice={() => this.handleCloseNotice()}
                    />
                </View>
                <Loader
                    animationType="fade"
                    visibleModal={loaderVisible}
                />
            </KeyboardAvoidingView>
        )

    }
}

