import React from "react";
import './Header.css';
import Navbar from "../Navbar";
import {BiMenuAltRight} from 'react-icons/bi';

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo-white.png" alt="logo" width={200} />
        <div className="flexCenter h-menu">
          <Navbar/>
          <button className="button">
            <a href="">Contact</a>
          </button>
        </div>
      </div>
      <div className="menu-icon">
        <BiMenuAltRight size={30}/>
      </div>
    </section>
  );
};

export default Header;
