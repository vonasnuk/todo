import React from 'react';
import '../todo-list-item/todo-list-item.css'


class TodoListItem extends React.Component {

    render() {

        const { label, onDelited, onToggleImportant, onToggleDone, done, important } = this.props;


        let classNames = 'todo-list-item';


        if (done) {
            classNames += ' done'
        }

        if (important) {
            classNames += ' important'
        }


        return (
            <span className={classNames}>
                <span className='todo-list-item-label'
                    onClick={onToggleDone} 
                >{label}</span>

                <button
                    type='button'
                    className='btn btn-outline-danger'
                    onClick={onDelited}
                >
                    <i className='fa fa-trash' />
                </button>

                <button
                    type='button'
                    className='btn btn-outline-success'
                    onClick={onToggleImportant}
                >
                    <i className='fa fa-exclamation' />
                </button>
            </span>
        )
    }
}


export default TodoListItem;