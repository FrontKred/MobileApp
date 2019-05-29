import { StyleSheet } from 'react-native';
import colors from "../../styles/colors";


const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        zIndex:11,
        display: 'flex',
        alignItems: 'center',
    },
    scrollViewWrapper: {
        marginTop: 100,//исправить
        flex: 1,
        padding: 0,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    noticeWrapper:{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0
    },
    scrollView: {
        flex: 1,
        paddingLeft:10,
        paddingRight:10
    },
    headerWelcomeWrapper: {
        display: 'flex',
        flex: 1,
        padding: 30,
        justifyContent: 'center',
    },
    welcomeText: {
        fontSize: 20,
        paddingTop: 10,
       // letterSpacing:1,
        color: colors.TEAL_BLUE,
        fontWeight: '400',
    },
    welcomeWrapper: {
        display: 'flex',
        padding:10,
    },
    buttonLogin: {
        backgroundColor: colors.COQUELICOT,
        marginBottom: 10,
    },
    buttonReg: {
        backgroundColor: colors.BLACK,
        marginBottom: 10,
    },
    formWrapper: {
        display: 'flex',
        width: '100%',
    },
    buttonsWrapper: {
        display: 'flex',
        marginTop: 30,

    },
    logo: {
        height:40,
        width:250,
    }
});
export default styles;