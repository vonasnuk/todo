import React from 'react';

const AppHeader = ({ toDo, doneItems }) => {
    return (
        <div>
            <h1>List</h1>
            <p>{toDo} more to do, {doneItems} done</p>
        </div>
    )

};

export default AppHeader