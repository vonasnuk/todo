import React from 'react';
import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css'

const TodoList = ({ todos, onDelited }) => {

    const elements = todos.map((item) => {
        return (
            <li
                className='list-group-item'
                key={item.id}>
                <TodoListItem
                    label={item.label}
                    important={item.important}
                    onDelited={()=>onDelited(item.id)}
                /> </li>
        )
    })

    return (
        <ul className='list-group todo-list'>
            {elements}
        </ul>
    )
};

export default TodoList;