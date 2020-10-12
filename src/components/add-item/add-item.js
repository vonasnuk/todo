import React from 'react'
import '../add-item/add-item.css'

class AddItem extends React.Component {


    render() {

        const { addItem } = this.props

        return (


            <div className="input-group mb-3 container">
                <input type="text" className="form-control" aria-describedby="basic-addon2"/>
                    <div className="input-group-append">
                        <button onClick={() => addItem()} className="btn btn-outline-secondary" type="button">Add item</button>
                    </div>
            </div>
        )
    }
};

export default AddItem;