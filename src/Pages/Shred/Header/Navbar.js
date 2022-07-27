import React from 'react';
import { Link } from 'react-router-dom';
import globalLogo from '../../../assets/globetech logo.jpg'

const Navbar = () => {
    return (
        <div style={{fontFamily:"inter", letterSpacing:"2px"}} className='lg:px-12 lg:p-5'>
               {/* updating */}
<div id="navbar" class="navbar">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg className="w-10" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/login">Login</Link></li>
      </ul>
    </div>
    <Link style={{backgroundColor:"#000655"}} to='/' class="btn btn-ghost p-2 normal-case text-xl">
    <img  className="lg:w-48 rounded-xl p-2 w-28" src={globalLogo} alt="" />
    </Link>
  </div>
  <div class="navbar-end hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
    <li><Link to="/">Home</Link></li>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
  </div>
  {/* <div class="navbar-end lg:flex hidden">
  <button id='btn' className= 'btn font-medium text-white px-6 uppercase'>
                Request Quote</button>
  </div> */}
</div>

        </div>
    );
};

export default Navbar;