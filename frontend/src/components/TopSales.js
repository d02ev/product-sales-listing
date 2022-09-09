import { React, useState, useEffect } from 'react';

export const TopSales = () => {
    const url = "http://localhost:3001/api/v1/sales/top";
    const [initialState, setInitialState] = useState([]);

    useEffect(() => {
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
    }, [])

    return (
        <div className="container">
            
            <table className="table table-hover table-dark">
                <thead>
                    <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Product Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {initialState.length > 0 && initialState.map((item, i) => (
                            <tr key={i}>
                                <th scope="row">{item.name}</th>
                                <td>{item.quantity}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};