/*
*
@author thinhth on 2/28/19
*
*/

import {StyleSheet} from 'react-native'
import {styleConstants} from "../commons/Constants";

export default StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: styleConstants.UI_LARGE_MARGIN
    },
    input: {
        flex: 3,
        marginRight: styleConstants.UI_MEDIUM_MARGIN
    },
    button: {
        flex: 1,
    }
})