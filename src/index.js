import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header/app-header';
import SearchPanel from './components/search-panel/search-panel';
import TodoList from './components/todo-list/todo-list'
import StatusFilter from './components/status-filter/status-filter'
import AddItem from './components/add-item/add-item'

class App extends React.Component {

    maxId = 100;

    state = {
        todoDate: [
            { label: 'Drink Coffee', important: false, id: 1, done: false },
            { label: 'Create react app', important: false, id: 2, done: false },
            { label: 'Lorem 3 par', important: false, id: 3, done: false },
            { label: 'Drink tea', important: false, id: 4, done: false }
        ]
    };



    onDelited = (id) => {
        this.setState(({ todoDate }) => {
            const indx = todoDate.findIndex((elem) => elem.id === id);
            const after = todoDate.slice(0, indx);
            const before = todoDate.slice(indx + 1);
            const result = [...after, ...before];
            return {
                todoDate: result
            }
        })
    }

    addItem = () => {
        let text = document.querySelector('.form-control').value;


        this.setState(({ todoDate }) => {
            const contentItem = [{ label: text, important: false, id: this.maxId++, done: false }];
            document.querySelector('.form-control').value = ''

            return {
                todoDate: [...todoDate, ...contentItem]
            }
        })

    };

    onToggleImportant = (id) => {
        this.setState(({ todoDate }) => {
            const indx = todoDate.findIndex((elem) => elem.id === id);
            const oldItem = todoDate[indx];
            const newItem = {...oldItem, important: !oldItem.important}

            const newDateImportant =
                [...todoDate.slice(0, indx),
                    newItem,
                ...todoDate.slice(indx + 1)];

            return {
                todoDate: newDateImportant
            }
        })
    };

    onToggleDone = (id) => {
        this.setState(({ todoDate }) => {
            const indx = todoDate.findIndex((elem) => elem.id === id);
            const oldItem = todoDate[indx];
            const newItem = {...oldItem, done: !oldItem.done}

            const newDateDone =
                [...todoDate.slice(0, indx),
                    newItem,
                ...todoDate.slice(indx + 1)];


            return {
                todoDate: newDateDone
            }
        })
    };

    render() {
        const { todoDate } = this.state

        let doneCount = todoDate.filter((el) => el.done).length;
        let todoCount = todoDate.length - doneCount;


        return (
            <div>
                <AppHeader toDo={todoCount} doneItems={doneCount} />
                <SearchPanel />
                <TodoList
                    onDelited={this.onDelited}
                    todos={todoDate}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <AddItem addItem={this.addItem} />
            </div>
        )
    }
}



ReactDOM.render(<App />, document.getElementById('root'));