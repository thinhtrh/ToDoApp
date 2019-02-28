/*
*
@author thinhth on 2/28/19
*
*/

import React, {Component} from 'react';

const ToDoAppContext = React.createContext();
export const FilterTypes = {
    all: 0,
    done: 1,
    active: 2
};

export class ToDoAppProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todoList: [],
            filterType: FilterTypes.all
        };
    }

    addToDo = (todoName) => {
        let toDo = {
            id: new Date().getTime(),
            name: todoName,
            isDone: false
        };
        this.setState({
            todoList: [...[toDo], ...this.state.todoList]
        })
    };

    removeToDo = (toDoId) => {
        this.setState({
            todoList: this.state.todoList.filter((todo) => todo.id !== toDoId)
        })
    };

    filterToDoList = (filterType) => {
        this.setState({
            filterType: filterType
        })
    };

    toggleAll = () => {
        this.setState({
            todoList: this.state.todoList.map((todo) => {
                return {
                    ...todo,
                    isDone: true
                }
            })
        })
    }

    finishToDo = (toDoId) => {
        this.setState({
            todoList: this.state.todoList.map((todo) => {
                if (todo.id === toDoId)
                    return {
                        ...todo,
                        isDone: true
                    }
                else
                    return todo
            })
        })
    }

    render() {
        let providerProps = {
            value: {
                addToDo: this.addToDo,
                removeToDo: this.removeToDo,
                filterToDoList: this.filterToDoList,
                todoList: this.state.todoList,
                finishToDo: this.finishToDo,
                toggleAll: this.toggleAll,
                filterType: this.state.filterType
            }
        };
        return (
            <ToDoAppContext.Provider {...providerProps}>
                {
                    this.props.children
                }
            </ToDoAppContext.Provider>
        )
    }
}

export const ToDoAppConsumer = ToDoAppContext.Consumer;