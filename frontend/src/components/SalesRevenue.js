import { React, useState, useEffect } from 'react';

export const SalesRevenue = () => {
    const [initialState, setInitialState] = useState([]);
    const url = "http://localhost:3001/api/v1/sales/revenue"

    useEffect(() => {
        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setInitialState([data]);
            })
            .catch(err => {
                console.error(err);
            })
    }, [])

    return (
        <div className="container">
            {initialState.length > 0 && initialState.map((item, i) => (
                <div key={i}>
                    <label htmlFor="revenue">Total Revenue Generated: </label>
                    <input id="revenue" type="number" value={ item.revenue_generated_today } readonly/>
                </div>
            ))}
        </div>
    );
};