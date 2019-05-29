import React,{Component} from 'react';
import {
    View,
    Text,
    KeyboardAvoidingView,
    StyleSheet
} from 'react-native';
import colors from '../styles/colors';
import InputField from '../components/form/InputField';
import Icon from 'react-native-vector-icons/FontAwesome';
import Notice from '../components/Notice';
import Loader from '../components/Loader';
import ButtonType01 from '../components/buttons/ButtonType01';
import propTypes from 'prop-types';

export default class ForgotPassword extends Component{
    constructor(props){
        super(props);
        this.state={
            formValid: true,
            validEmail: false,
            email: '',
            loaderVisible: false
        }
    }


    goToNextStep(){
        this.setState({loaderVisible:true});
        setTimeout(()=>{
            //Валидация должна быть
            this.setState({
                loaderVisible:false,
                formValid:false
            });

        },2000)
    }

    handleEmailChange(email){
        const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.setState({email});
        if(!this.state.validEmail){
            if(emailCheckRegex.test(email)){
                this.setState({validEmail:true})
            }
        }else{
            if(!emailCheckRegex.test(email)){
                this.setState({validEmail:false});
            }
        }
    }

    handleCloseNotice(){
        this.setState({
            formValid:true
        })
    }
    toogleChangeState() {
        const {formValid, validEmail} = this.state;
        return formValid && validEmail;
    }

    render() {
        const {loaderVisible,validEmail,formValid}=this.state;
        const background = (formValid) ? colors.GARGOYLE_GAS : colors.LIGHT_GRAY;
        const showNotice=!formValid;
        return (
            <View
                style={[{backgroundColor: background}, styles.wrapper]}
                behavior="padding">
                <View style={styles.forgotPassForm}>
                    <View style={styles.forgotPassTitleBlock}>
                        <Text style={{marginRight:10}}><Icon name="key" size={26}/></Text>
                        <Text style={styles.forgotPassTitle}>Забыли пароль?</Text>
                    </View>
                    <Text style={styles.forgotPassSubTitle}>Введи свой почтовый адрес</Text>
                    <InputField  placeholder='Email'
                                 onChangeText={(text) => this.handleEmailChange(text)}
                                 icon={<Icon name="envelope" size={23}/>}
                                 showCheckInput={validEmail}
                                 autoFocus={true}
                                 autoCapitalize={'characters'}
                    />

                    <View style={styles.forgotPassBlockButton}>
                        <ButtonType01
                            handleOnPress={() => this.goToNextStep()}
                            validForm={!this.toogleChangeState()}
                            buttonStyle={styles.forgoPassButton}
                            styleTitle={{color: colors.WHITE, paddingLeft: 10}}
                            title="Продолжить"
                            icon={<Icon
                                name="arrow-right"
                                size={15}
                                color={colors.WHITE}/>}
                        />
                    </View>

                </View>
                <View style={styles.noticeWrapper}>
                    <Notice
                        showNotice={showNotice}
                        type="Error"
                        firstLine="Пользователь не найден"
                        secondLine="Повторите попытку"
                        handleCloseNotice={() => this.handleCloseNotice()}
                    />
                </View>
                <Loader
                    animationType="fade"
                    visibleModal={loaderVisible}
                />
            </View>
        );
    }
}


ForgotPassword.propTypes={
  test:propTypes.string,
};




const styles=StyleSheet.create({
    wrapper:{
        display:'flex',
        flex:1,
    },
    forgotPassForm:{
        display:'flex',
        flex:1,
        marginTop:100,
        paddingLeft:30,
        paddingRight:30,
    },
    forgotPassBlockButton:{
        display:'flex',
        flex:1,
        marginTop:20,
    },
    forgotPassTitleBlock:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    forgoPassButton:{
        backgroundColor: colors.COQUELICOT,
    },
    forgotPassTitle:{
        fontSize:28,
        color: colors.BLACK
    },
    noticeWrapper:{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0
    },
    forgotPassSubTitle:{
        fontSize:20,
        marginBottom:50,
       // fontWeight:'600',
    }

});