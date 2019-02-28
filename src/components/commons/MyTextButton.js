/*
*
@author thinhth on 2/28/19
*
*/

import React, {Component} from 'react'
import {Text, TouchableOpacity, ViewPropTypes} from 'react-native'
import PropTypes from 'prop-types'
import MyText from "./MyText";
import {colors} from "../../commons/Constants";
import styles from './MyTextButton.style'

export const TextButtonTypes = {
    blue: 1,
    green: 2,
    white: 3
}

export default class MyTextButton extends Component {
    getTextStyleFromType = () => {
        switch (this.props.type) {
            case TextButtonTypes.blue:
            case TextButtonTypes.green:
                return colors.white;
            case TextButtonTypes.white:
            default:
                return colors.black;
        }
    };

    getStyleFromType = () => {
        switch (this.props.type) {
            case TextButtonTypes.blue:
                return {
                    backgroundColor: colors.blue
                };
            case TextButtonTypes.green:
                return {
                    backgroundColor: colors.green,
                };
            case TextButtonTypes.white:
            default:
                return {
                    backgroundColor: colors.white,
                    borderColor: colors.black,
                    borderWidth: 1,
                };
        }
    };

    render() {
        let touchProps = {
                onPress:  () => {
                    if (this.props.onPress)
                        this.props.onPress()
                },
                style: [styles.container, this.getStyleFromType(), this.props.style],
            },
            textProps = {
                style: [styles.text,
                    {
                        color: this.getTextStyleFromType()
                    }, this.props.textStyle],
                text: this.props.text,
                numberOfLines: 1,
            };
        return (
            <TouchableOpacity {...touchProps}>
                <MyText {...textProps}/>
            </TouchableOpacity>
        )
    }
}

MyTextButton.propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func,
    style: ViewPropTypes.style,
    type: PropTypes.number, //one of TextButtonTypes
    textStyle: Text.propTypes.style,
}

MyTextButton.defaultProps = {
    text: 'Button',
    onPress: null,
    style: null,
    type: TextButtonTypes.white,
    textStyle: null,
}