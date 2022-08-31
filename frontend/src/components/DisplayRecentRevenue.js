import { React, useState } from 'react';

export const DisplayRecentRevenue = () => {
    const [initialState, setInitialState] = useState([]);
    const url = "http://localhost:3001/api/v1/sales/revenue"

    const fetchData = () => {
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
    };

    return (
        <div>
            <button onClick={fetchData} className="btn btn-primary">Recent Revenue</button>
            {initialState.length > 0 && initialState.map((item, i) => (
                <div key={i}>
                    <p>{item.total_revenue_generated}</p>
                </div>
            ))}
        </div>
    );
};