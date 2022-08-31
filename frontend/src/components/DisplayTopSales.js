import { React, useState } from 'react';

export const DisplayTopSales = () => {
    const url = "http://localhost:3001/api/v1/sales/top";
    const [initialState, setInitialState] = useState([]);

    const fetchData = () => {
        fetch(url)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setInitialState(data);
        })
        .catch(err => {
            console.error(err);
        })
    };

    return (
        <div>
            <button onClick={fetchData} className="btn btn-primary">Fetch Top Sales</button>
            <table className="table table-hover table-dark">
                <thead>
                    <tr>
                        <th scope="col">Product ID</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Product Quantity</th>
                        <th scope="col">Product Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {initialState.length > 0 && initialState.map((item, i) => (
                            <tr key={i}>
                                <th scope="row">{item._id}</th>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>{item.amount}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};