/*
*
@author thinhth on 2/28/19
*
*/
import React, {Component} from 'react'
import {SafeAreaView, View} from 'react-native'
import {ToDoAppProvider} from "./contexts/ToDoAppContext";
import AddToDoComponent from "./components/AddToDoComponent";
import ToDoListComponent from "./components/ToDoListComponent";
import ToggleAllComponent from "./components/ToggleAllComponent";
import FilterComponent from "./components/FilterComponent";
import styles from './ToDoApp.style'

export default class ToDoApp extends Component {
    render() {
        let containerProps = {
                style: styles.container
            },
            topViewProps = {
                style: styles.topView
            },
            bottomViewProps = {
                style: styles.bottomView
            };
        return (
            <ToDoAppProvider>
                <SafeAreaView {...containerProps}>
                    <View {...topViewProps}>
                        <AddToDoComponent/>
                        <ToDoListComponent/>
                    </View>
                    <View {...bottomViewProps}>
                        <ToggleAllComponent/>
                        <FilterComponent/>
                    </View>
                </SafeAreaView>
            </ToDoAppProvider>

        )
    }
}