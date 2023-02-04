import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () =>{
    return (
        <div className='navbar'>
            <Link className='navitem' to="/">Home</Link>
            <Link className='navitem' to="/users">Get Users</Link>
    </div>
    )
}

export default Navbar;