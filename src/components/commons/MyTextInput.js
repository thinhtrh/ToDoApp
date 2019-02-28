/*
*
@author thinhth on 2/28/19
*
*/

import React, {Component} from 'react'
import {TextInput, View, ViewPropTypes} from 'react-native'
import PropTypes from 'prop-types'
import styles from './MyTextInput.style'

export default class MyTextInput extends Component {
    render() {
        let viewProps = {
                style: [styles.container, this.props.style]
            },
            inputProps = {
                ref: (c) => this.input = c,
                style: [styles.input, this.props.textInputStyle],
                onChangeText: (text)=>{
                    if (this.props.onChangeText)
                        this.props.onChangeText(text)
                },
                placeholder: this.props.placeholder,
                underlineColorAndroid: "transparent",
                autoCorrect: false,
                value: this.props.value,
            }
        return (
            <View {...viewProps}>
                <TextInput {...inputProps}/>
            </View>
        )
    }
}

MyTextInput.propTypes = {
    onChangeText: PropTypes.func,
    placeholder: PropTypes.string,
    style: ViewPropTypes.style,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    textInputStyle: ViewPropTypes.style,
}

MyTextInput.defaultProps = {
    onChangeText: () => {
    },
    style: null,
    placeholder: 'Enter Text',
    value: null,
    textInputStyle: null,
}