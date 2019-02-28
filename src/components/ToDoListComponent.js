/*
*
@author thinhth on 2/28/19
*
*/
import React, {Component} from 'react'
import {FlatList, View} from 'react-native'
import {FilterTypes, ToDoAppConsumer} from '../contexts/ToDoAppContext'
import ToDoItem from "./ToDoItem";
import MyText from "./commons/MyText";
import {strings} from "../commons/Strings";
import styles from './ToDoListComponent.style'

export default class ToDoListComponent extends Component {
    renderItem = (item) => {
        let itemProps = {
            data: item
        };
        return (
            <ToDoItem {...itemProps}/>
        )
    };

    filterToDoList = (todoList, filterType) => {
        switch (filterType) {
            case FilterTypes.all:
                return todoList;
            case FilterTypes.done:
                return todoList.filter((todo) => todo.isDone);
            case FilterTypes.active:
                return todoList.filter((todo) => !todo.isDone);
            default:
                return todoList;
        }
    }

    render() {
        let containerProps = {
                style: styles.container
            },
            listProps = (list) => ({
                data: list,
                keyExtractor: (item) => item.id.toString(),
                renderItem: ({item}) => this.renderItem(item),
            }),
            noItemTextProps = {
                text: strings.noItem,
                style: styles.noItemText
            };
        return (

            <ToDoAppConsumer>
                {
                    ({todoList, filterType}) => {
                        let list = todoList.length > 0 ? this.filterToDoList(todoList, filterType) : []
                        return (
                            <View {...containerProps}>
                                {
                                    list.length === 0
                                        ?
                                        <MyText {...noItemTextProps}/>
                                        :
                                        <FlatList {...listProps(list)}/>
                                }

                            </View>
                        )
                    }
                }

            </ToDoAppConsumer>
        )
    }
}