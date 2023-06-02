import React from 'react'
import './Header/Header.css';
import { NavLink } from 'react-router-dom';
export default function Navbar() {
  return (
    <div>
     <nav>
      <ul className="flexCenter h-menu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="expert">Expert</NavLink>
        </li>
        <li>
          <NavLink to="ourvalue">Our Value</NavLink>
        </li>
        <li>
          <NavLink to="contactus">Contact Us</NavLink>
        </li>
        <li>
          <NavLink to="getstarted">Get Started</NavLink>
        </li>
      </ul>
     </nav>
    </div>
  )
}
