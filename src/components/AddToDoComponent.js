/*
*
@author thinhth on 2/28/19
*
*/

import React, {Component} from 'react'
import {View} from 'react-native'
import {ToDoAppConsumer} from '../contexts/ToDoAppContext'
import MyTextButton, {TextButtonTypes} from "./commons/MyTextButton";
import {strings} from "../commons/Strings";
import MyTextInput from "./commons/MyTextInput";
import styles from './AddToDoComponent.style'

export default class AddToDoComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            todoName: ''
        }
    }

    onChangeText = (text) => {
        this.setState({
            todoName: text
        })
    };

    render() {
        let containerProps = {
                style: styles.container
            },
            inputProps = {
                style: styles.input,
                value: this.state.todoName,
                placeholder: strings.enterTodoName,
                onChangeText: (text)=> this.onChangeText(text)
            },
            addButtonProps = (addToDo) => ({
                text: strings.add,
                style: styles.button,
                type: TextButtonTypes.green,
                onPress: ()=> {
                    if (this.state.todoName !== ''){
                        addToDo(this.state.todoName)
                        this.onChangeText('')
                    }
                }
            });
        return (
            <ToDoAppConsumer>
                {
                    ({addToDo}) => (
                        <View {...containerProps}>
                            <MyTextInput {...inputProps}/>
                            <MyTextButton {...addButtonProps(addToDo)}/>
                        </View>
                    )
                }

            </ToDoAppConsumer>
        )
    }
}