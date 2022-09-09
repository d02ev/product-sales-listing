import { React } from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <>
            <ul className="nav justify-content-center nav-pills">
                <li className="nav-item">
                    <NavLink to="/" className="nav-link" exact>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/addSales" className="nav-link">Add Sales</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/topSales" className="nav-link">Top Sales</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="salesRevenue" className="nav-link">Sales Revenue</NavLink>
                </li>
            </ul>
        </>
    );
}