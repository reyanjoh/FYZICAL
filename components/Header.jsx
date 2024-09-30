"use client"

import Image from 'next/image'
import React from 'react'
// import { RxHamburgerMenu } from "react-icons/rx";
import HeaderCTA from './HeaderCTA'
import { useState } from "react";


function Header() {

    const[toggleMenu, setToggleMenu] = useState(false);

    function handleClick() {
        setToggleMenu(!toggleMenu);
        console.log('clicked')
      }

  return (
    <header className='header'>
        {/* <RxHamburgerMenu /> */}

        <div className='burger-icon' onClick={handleClick}>

        </div>

        <div className='header-container'>
            <Image alt='' className='main-logo' src={'/images/logos/fyzical-white-logo.png'} height={61} width={270}/>
            <ul className={`${toggleMenu ? 'nav-hide' :'nav-show'}`}>
                <div className='burger-icon-ul' onClick={handleClick}></div>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/services">services</a>
                    {/* <ul className='submenu'>
                        <li>
                            <a href="#">Physical therapy</a>
                        </li>
                    </ul> */}
                </li>
                <li>
                    <a href="#">Patient Resources</a>
                    {/* <ul className='submenu'>
                        <li>
                            Insurance plans <br/> & Networks
                        </li>
                    </ul> */}
                </li>
                <li>
                    Locations
                    {/* <ul className='submenu'>
                        <li>
                            Copperfeild
                        </li>
                    </ul> */}
                </li>
                <li>
                    Blog
                </li>
                <li>
                    Staff
                    {/* <ul className='submenu'>
                        <li>
                            Staff 1
                        </li>
                        <li>
                            Staff 2
                        </li>
                    </ul> */}
                </li>
                <li>
                    About Us
                </li>
                <li>
                    careers
                </li>
            </ul>
        </div>
        {/* <HeaderCTA /> */}
    </header>
  )
}

export default Header