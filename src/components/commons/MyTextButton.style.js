/*
*
@author thinhth on 2/28/19
*
*/

import {StyleSheet} from 'react-native'
import {fontSize, styleConstants} from "../../commons/Constants";

export default StyleSheet.create({
    container: {
        height: styleConstants.UI_ITEM_HEIGHT,
        backgroundColor: 'rgba(54, 198, 211, 1)',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        borderRadius: styleConstants.UI_ITEM_BORDER_RADIUS
    },
    text: {
        color: 'white',
        fontSize: fontSize.medium,
    },
})