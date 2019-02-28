/*
*
@author thinhth on 2/28/19
*
*/

import {StyleSheet} from 'react-native'
import {styleConstants} from "./commons/Constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'stretch'
    },
    topView: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        alignSelf: 'stretch'
    },
    bottomView: {
        alignSelf: 'stretch',
        marginHorizontal:
        styleConstants.UI_LARGE_MARGIN
    }
})