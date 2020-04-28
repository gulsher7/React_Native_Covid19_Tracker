import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import { fontFamily } from '../../styles/fontFamily';


const styles = StyleSheet.create({
    cardView: {
        paddingVertical: moderateScale(16),
        backgroundColor: 'white',
        borderRadius: moderateScale(6),
        shadowColor: '#000',
        shadowOffset: { width: moderateScale(0.5), height: moderateScale(0.5) },
        shadowOpacity: moderateScale(0.5),
        shadowRadius: moderateScale(3),
        elevation: moderateScale(5),
    },

    casesUpdateViewStyle: {
        paddingVertical: moderateScale(8),
        backgroundColor: colors.bgRedColor,
        paddingHorizontal: moderateScale(10),
        alignItems: 'center',
        borderRadius: moderateScale(4),
    },

    headerTextStyle: {
        
        fontSize: moderateScale(12),
        color: colors.redColor2,
        fontFamily: fontFamily.IBM_MEDIUM_FONT
    },

    deltaTextStyle: {
        fontSize: moderateScale(11),
        paddingVertical: moderateScale(12),
        color: colors.redColor1,
        fontFamily: fontFamily.IBM_REGULAR_FONT

    },

    casesNumberTextStyle: {
        fontSize: moderateScale(12),
        color: colors.redColor2,
        fontFamily: fontFamily.IBM_SEMIBOLD_FONT
    },

    knowAboutCoronaTextStyle: {
        fontSize: moderateScale(16),
        color: '#fd7e14',
        fontFamily: fontFamily.IBM_SEMIBOLD_FONT
    },

    coronavirusTextStyle: {
        fontSize: moderateScale(16),
        color: colors.redColor2,
        fontFamily: fontFamily.IBM_SEMIBOLD_FONT   
    }


});

export default styles