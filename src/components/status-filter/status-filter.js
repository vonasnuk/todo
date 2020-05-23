import React from 'react';
import '../status-filter/status-filter.css'


class StatusFilter extends React.Component {
    render(){
        return (
            <div className='btn-group'>
                <button type='button' className='btn btn-outline-success'>All</button>
                <button type='button' className='btn btn-outline-secondary'>Active</button>
                <button type='button' className='btn btn-outline-secondary'>Done</button>
            </div>
        )
    }
}


export default StatusFilter