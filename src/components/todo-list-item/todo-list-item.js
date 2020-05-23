import React from 'react';
import '../todo-list-item/todo-list-item.css'


class TodoListItem extends React.Component {


    state = {
        done: false,
        important: false
    };

    onLablClick = () => {
        this.setState(({done})=>{
            return {
                done: !done
            }
        })
    };

    onImportant = () => {
        this.setState(({ important }) => {
            return {
                important: !important
            }
        })

    };

    render() {

        const { label, onDelited } = this.props;

        const { done, important } = this.state;

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
                    onClick={this.onLablClick}
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
                    onClick={this.onImportant}
                >
                    <i className='fa fa-exclamation' />
                </button>
            </span>
        )
    }
}


export default TodoListItem;