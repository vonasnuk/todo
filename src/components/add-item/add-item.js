import React from 'react'

class AddItem extends React.Component {


    render() {

        // const valueForm = document.querySelector('.form-control').value;

        const { addItem } = this.props

        return (
            <div className="input-group mb-3">
                <input type="text" className="form-control" aria-describedby="basic-addon2"/>
                    <div className="input-group-append">
                        <button onClick={() => addItem()} className="btn btn-outline-secondary" type="button">Button</button>
                    </div>
            </div>
        )


    }
};

export default AddItem;