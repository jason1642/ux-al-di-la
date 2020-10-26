import React from 'react';
import HamburgerMenu from '../../Images/menu-icon.svg';
import './Burger.css'

const Burger = ({ open, setOpen }) => {
  return (
    <img className="nav-toggle" open={open} onClick={() => setOpen(!open)} src={HamburgerMenu} />
  );
}

export default Burger;