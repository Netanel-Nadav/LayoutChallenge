import React from 'react';
import { Link, NavLink } from 'react-router-dom'


import routes from '../routes'

export function Navigation() {
    return (
        <nav className='main-container full'>
            <div className='wrraper flex space-around align-center'>
                <div className='container flex align-center'>
                    <div className='logo-container'>
                        <span>myteam</span>
                    </div>
                    <ul className='clean-list flex'>
                        {routes.map(route => <li key={route.path}><NavLink to={route.path}>{route.label}</NavLink></li>)}
                    </ul>
                </div>
                <button className='login-btn'>Contact Us</button>
                <button className='hidden'><i className="fas fa-bars"></i></button>
            </div>
        </nav>
    );
}
