/* eslint-disable no-unused-vars */


import React from 'react';

import Navbar from '../Navbar/Navbar'
import './Header.css'

import logo from '../Assets/rentrLogo.svg'
import search from '../Assets/magnifyingGlass.svg'

function Header () {
    return (
        <section className="header">
          <section className="header-top">
            <section className="header-top__logo">
              <a href="/" className="header-logo">
                <img src= {logo} alt=""/>
              </a>
            </section>
            <section className="header-top__navbar">
              <section className="header-top__navigation">
                <div className="SearchBar">
                    <img src={search}alt=""/>
                    <input type="search" placeholder="Search Something" />
                </div>
                <Navbar />
              </section>
              <hr className="header-top__seperator" />
            </section>
          </section>
        </section>
      )
}

export default Header;