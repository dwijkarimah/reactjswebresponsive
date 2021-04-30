import React, { useState } from 'react';
import { link } from 'react-router-dom';
import './App.css';

function Navbar() {
return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='navbar-logo'>
                D'Dy Kurma <i className='fab fa-typo3' />
            </Link>
            <div className='menu-icon'>
                <i className={click ? 'fas fa-lines'}
            </div>
        </div>
    </nav>
    </>

);

}

export default Navbar;