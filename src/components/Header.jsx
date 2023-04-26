import React from 'react';
import { Link } from 'react-router-dom';
import vg from "../assets/9.png";


const Header = () => {
  return (
    <nav>
        <header id="head">
        <h1 id="top1">One King</h1>
        <h1 id="top2">Resturant</h1>
    </header>
    <main>
        <img src={vg} alt="Graphics" />
        <ul>
          <Link to={"/"}>Home</Link>
          <Link to={"/menu"}>Menu</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/contact"}>ContactUs</Link>
        </ul>
    </main>
    </nav>

  );
};

export default Header;