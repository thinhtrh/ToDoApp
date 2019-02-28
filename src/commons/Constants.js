/*
*
@author thinhth on 2/28/19
*
*/

import {
    Dimensions,
    Platform,
    StatusBar
} from 'react-native'

export const {width: deviceWidth, height: deviceHeight} = Dimensions.get('window')
export const contentHeight = Platform.OS === 'ios'
    ? deviceHeight : deviceHeight - StatusBar.currentHeight;

export const fontSize = {
    small: 13,
    medium: 14,
    large: 16
};

export const colors = {
    white: '#FFFFFF',
    blue: '#3175e2',
    green: '#3fcc70',
    black: '#666666',
    red: '#d6192c',
    gray: '#d5dae2',
    whiteGray: '#f2f5f9'
};

export const styleConstants = {
    UI_ITEM_HEIGHT: 46,
    UI_ITEM_BORDER_RADIUS: 5,
    UI_LARGE_MARGIN: 15,
    UI_MEDIUM_MARGIN: 10,
    UI_SMALL_MARGIN: 5
};

