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
            { label: 'Drink Coffee', important: false, id: 1 },
            { label: 'Create react app', important: true, id: 2 },
            { label: 'Lorem 3 par', important: true, id: 3 },
            { label: 'Drink tea', important: true, id: 4 }
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

        console.log('work');
        this.setState(({todoDate}) => {
            const contentItem = [{label: 'Drink TEST tea', important: true, id: this.maxId++}];
            const newItem = [...todoDate, ...contentItem];

            return {
                todoDate: newItem
            }
        })
        
    }

    render() {

        const { todoDate } = this.state


        return (
            <div>
                <AppHeader />
                <SearchPanel />
                <StatusFilter />
                <TodoList onDelited={this.onDelited} todos={todoDate} />
                <AddItem addItem={this.addItem}/>
            </div>
        )
    }
}



ReactDOM.render(<App />, document.getElementById('root'));