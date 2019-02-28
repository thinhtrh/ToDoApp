/*
*
@author thinhth on 2/28/19
*
*/

import React, {Component} from 'react'
import {View} from 'react-native'
import {FilterTypes, ToDoAppConsumer} from '../contexts/ToDoAppContext'
import MyTextButton, {TextButtonTypes} from "./commons/MyTextButton";
import {strings} from "../commons/Strings";
import styles from './FilterComponent.style'
import {styleConstants} from "../commons/Constants";

export default class FilterComponent extends Component {
    render() {
        let containerProps = {
                style: styles.container
            },
            filterAllProps = (filterToDoList) => ({
                text: strings.all,
                style: [styles.button, {marginRight: styleConstants.UI_MEDIUM_MARGIN}],
                type: TextButtonTypes.green,
                onPress: () => {
                    filterToDoList(FilterTypes.all)
                }
            }),
            filterDoneProps = (filterToDoList) => ({
                text: strings.done,
                style: [styles.button, {marginRight: styleConstants.UI_MEDIUM_MARGIN}],
                type: TextButtonTypes.white,
                onPress: () => {
                    filterToDoList(FilterTypes.done)
                }
            }),
            filterActiveProps = (filterToDoList) => ({
                text: strings.active,
                style: styles.button,
                type: TextButtonTypes.blue,
                onPress: () => {
                    filterToDoList(FilterTypes.active)
                }
            });
        return (
            <ToDoAppConsumer>
                {
                    ({filterToDoList}) => (
                        <View {...containerProps}>
                            <MyTextButton {...filterAllProps(filterToDoList)}/>
                            <MyTextButton {...filterDoneProps(filterToDoList)}/>
                            <MyTextButton {...filterActiveProps(filterToDoList)}/>
                        </View>
                    )
                }

            </ToDoAppConsumer>
        )
    }
}