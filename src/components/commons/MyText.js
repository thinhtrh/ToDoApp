/*
*
@author thinhth on 2/28/19
*
*/
import React, {
    Component
} from 'react'
import {
    Text
} from 'react-native'
import styles from './MyText.style'
import PropTypes from 'prop-types'

export default class MyText extends Component {
    render(){
        let textProps = {
            style: [styles.text, this.props.style],
            numberOfLines: this.props.numberOfLines
        };
        return(
            <Text {...textProps}>
                {this.props.text}
            </Text>
        )
    }
}

MyText.propTypes = {
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    style: Text.propTypes.style,
    numberOfLines: PropTypes.number
};

MyText.defaultProps = {
    text: '',
    style: null,
    numberOfLines: 1
};