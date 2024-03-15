import {appColors} from "../../colors/appColors";


export const appStyles = () => {
    return {
        buttonStyle: {
            width: '10em',
            height: '3em',
            backgroundColor: appColors.lightGreen,
            border: `3px solid ${appColors.darkGreen}`,
            borderRadius: 70 ,
            fontSize: 20,
            fontFamily: `"Madimi One", sans-serif`,
            color: appColors.darkGreen
        },
        title: {
            fontSize: 60,
            color: appColors.darkGreen,
        },
        titleScreenContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            flexDirection: 'column'
        }
    }
}