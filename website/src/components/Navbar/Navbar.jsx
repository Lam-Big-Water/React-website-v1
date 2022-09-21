import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';


export default function Navbar() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(click => !click);
    const closeMenu = () => setClick(false);
    
    return (
            <section className='header'>
                <NavLink className='navbar-logo'to="/" onClick={closeMenu}>Travel.</NavLink>
                <nav className={click ? 'navbar active' : 'navbar'} onClick={closeMenu}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/Product">Product</NavLink>
                <NavLink to="/About">About Us</NavLink>
                <NavLink to="/Book">Book</NavLink>
                </nav>
                <div id="menu-btn" className={click ? 'fas fa-times': 'fas fa-bars'} onClick={handleClick}></div>
            </section>
    )
}
