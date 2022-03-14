import React from 'react';
import ReactDOM from 'react-dom';


const Header = ({ title }) => (
    <div className='container-fluid d-flex justify-content-start'>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/patterns">Patterns</a>
    <h1>{title}</h1>
    </div>
);

export default Header;