import { React } from 'react';

export const Home = () => {
    return (
        <div className="container">
            <h1>This is the Home Page!</h1>
            <p>Here's what you can do:</p>
            <ul>
                <li>
                    <p>Go to <code>Add Sales</code> to add a sales record in the database.</p>
                </li>
                <li>
                    <p>Go to <code>Top Sales</code> to access the list of top 5 selling products.</p>
                </li>
                <li>
                    <p>Go to <code>Sales Revenue</code> to access revenue generated today.</p>
                </li>
            </ul>
        </div>
    );
}