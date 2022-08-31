import { React, useState } from 'react';
import Axios from 'axios';

export const AddSalesRecord = () => {
    const url = "http://localhost:3001/api/v1/sales/add";

    const [initialState, setInitialState] = useState({
        name: "",
        quantity: 0,
        amount: 0
    });

    const submissionHandler = (submissionEvent) => {
        submissionEvent.preventDefault();

        Axios.post(url, {
            name: initialState.name,
            quantity: parseInt(initialState.quantity),
            amount: parseInt(initialState.amount)
        })
            .then(res => {
                window.alert(`${res.data.name} Added Successfully in the DB!`);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const inputHandler = (event) => {
        const new_data = { ...initialState };
        new_data[event.target.id] = event.target.value;

        setInitialState(new_data);
    };

    return (
    
        <form onSubmit={(submissionEvent) => submissionHandler(submissionEvent)}>
            <div className="form-group">
                <label htmlFor="name">Product Name</label>
                <input className="form-control" onChange={(event) => inputHandler(event)} id="name" value={initialState.name} placeholder="Product Name" type="text" />
            </div>

            <div className="form-group">
                <label htmlFor="quantity">Quantity</label>
                <input className="form-control" onChange={(event) => inputHandler(event)} id="quantity" value={initialState.quantity} placeholder="Quantity" type="number" />
            </div>

            <div className="form-group">
                <label htmlFor="amount">Product Amount</label>
                <input className="form-control" onChange={(event) => inputHandler(event)} id="amount" value={initialState.amount} placeholder="Amount" type="number" />
            </div>

            <div>
                <button className="btn btn-primary" type="submit">Add Records</button>
            </div>
        </form>

    );
};