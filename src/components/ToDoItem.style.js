/*
*
@author thinhth on 2/28/19
*
*/

import {StyleSheet} from 'react-native'
import {colors, styleConstants} from "../commons/Constants";

const iconSize = 30
export default StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        height: styleConstants.UI_ITEM_HEIGHT,
    },
    leftView: {
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    activeButton: {
        width: iconSize + styleConstants.UI_MEDIUM_MARGIN + styleConstants.UI_LARGE_MARGIN,
        height: styleConstants.UI_ITEM_HEIGHT,
        paddingLeft: styleConstants.UI_LARGE_MARGIN,
        justifyContent: 'center',
    },
    icon: {
        width: iconSize,
        height: iconSize
    },
    removeView: {
        width: iconSize + styleConstants.UI_MEDIUM_MARGIN + styleConstants.UI_LARGE_MARGIN,
        height: styleConstants.UI_ITEM_HEIGHT,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: styleConstants.UI_LARGE_MARGIN,
    }
})