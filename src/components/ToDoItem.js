/*
*
@author thinhth on 2/28/19
*
*/

import React, {PureComponent} from 'react'
import {Image, TouchableOpacity, View} from 'react-native'
import styles from './ToDoItem.style'
import MyText from "./commons/MyText";
import {ToDoAppConsumer} from '../contexts/ToDoAppContext'
import {colors} from "../commons/Constants";

export default class ToDoItem extends PureComponent {
    // shouldComponentUpdate(nextProps, nextState) {
    //
    // }

    render() {
        let props = this.props.data;
        let containerProps = (todoList) => ({
                style: [styles.container, props.id !== todoList[todoList.length - 1].id && {
                    borderBottomWidth: 1,
                    borderColor: colors.gray
                }, props.isDone && {backgroundColor: colors.whiteGray}]
            }),
            leftViewProps = {
                style: styles.leftView
            },
            activeIconButtonProps = ({finishToDo}) => ({
                onPress: ()=> {
                    finishToDo(props.id)
                },
                style: styles.activeButton,
                disabled: props.isDone
            }),
            activeIconProps = {
                source: props.isDone ? require('./../../res/done-ico.png') : require('./../../res/active-ico.png'),
                style: styles.icon,
                resizeMode: 'contain'
            },
            nameProps = {
                text: props.name
            },
            rightViewProps = ({removeToDo}) => ({
                style: styles.removeView,
                onPress: ()=> removeToDo(props.id)
            }),
            removeIcon = {
                source: require('./../../res/remove-ico.png'),
                style: styles.icon,
            };
        return (
            <ToDoAppConsumer>
                {
                    ({todoList, finishToDo, removeToDo}) => (
                        <View {...containerProps(todoList)}>
                            <View {...leftViewProps}>
                                <TouchableOpacity {...activeIconButtonProps({finishToDo})}>
                                    <Image {...activeIconProps}/>
                                </TouchableOpacity>
                                <MyText {...nameProps}/>
                            </View>
                            <TouchableOpacity {...rightViewProps({removeToDo})}>
                                <Image {...removeIcon}/>
                            </TouchableOpacity>
                        </View>
                    )
                }
            </ToDoAppConsumer>
        )
    }

}