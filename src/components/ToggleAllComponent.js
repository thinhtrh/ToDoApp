/*
*
@author thinhth on 2/28/19
*
*/

import React, {Component} from 'react'
import {View} from 'react-native'
import {ToDoAppConsumer} from '../contexts/ToDoAppContext'
import {strings} from "../commons/Strings";
import MyTextButton, {TextButtonTypes} from "./commons/MyTextButton";
import styles from './ToggleAllComponent.style'


export default class ToggleAllComponent extends Component {

    render() {
        let containerProps = {
                style: styles.container
            },
            toggleAllButtonProps = (toggleAll) => ({
                onPress: toggleAll,
                text: strings.toggleAll,
                type: TextButtonTypes.blue
            });
        return (
            <ToDoAppConsumer>
                {
                    ({toggleAll}) => (
                        <View {...containerProps}>
                            <MyTextButton {...toggleAllButtonProps(toggleAll)}/>
                        </View>
                    )
                }
            </ToDoAppConsumer>
        )
    }
}