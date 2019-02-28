/*
*
@author thinhth on 2/28/19
*
*/

import {StyleSheet} from 'react-native'
import {colors, fontSize, styleConstants} from "../../commons/Constants";

export default StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: styleConstants.UI_ITEM_HEIGHT,
        borderRadius: styleConstants.UI_ITEM_BORDER_RADIUS,
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.gray,
        alignSelf: 'stretch'

    },
    input: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        height: styleConstants.UI_ITEM_HEIGHT,
        marginLeft: styleConstants.UI_LARGE_MARGIN,
        fontSize: fontSize.medium,
    },
})