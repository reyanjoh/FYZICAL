"use client"

import Image from 'next/image'
import React from 'react'
// import { RxHamburgerMenu } from "react-icons/rx";
import HeaderCTA from './HeaderCTA'
import { useState } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Router, useRouter } from 'next/router';


function Header() {

    const[toggleMenu, setToggleMenu] = useState(false);
    // const router = useRouter();

    function handleClick() {
        setToggleMenu(!toggleMenu);
        
      }

      const navLinks = [
        { name : 'Home' , href : '/'},
        { name : 'Services' , href : '/services'},
        { name : 'Patient Resources' , href : '/patient-resources'},
        { name : 'Locations' , href : '/locations'},
        { name : 'Blog' , href : '/blog'},
        { name : 'Staff' , href : '/staff'},
        { name : 'About us' , href : '/about-us'},
        { name : 'Careers' , href : '/careers'},


      ]

      const pathName = usePathname();
    //   const isActive = (href) =>{
    //     return pathName === href;
    //   }


  return (
    <header className='header'>
        {/* <RxHamburgerMenu /> */}

        <div className='burger-icon' onClick={handleClick}>
        ☰
        </div>

        <div className='header-container'>
            <Image alt='' priority className='main-logo' src={'/images/logos/fyzical-white-logo.png'} height={61} width={270}/>
            <ul className={`${toggleMenu ? 'nav-hide' :'nav-show'}`}>
                <div className='burger-icon-ul' onClick={handleClick}> ✖ </div>

                {/* {console.log(pathName)} */}

                {navLinks.map((link) => {

                    const isActive = pathName.endsWith(link.href) 
                    // {console.log(isActive)}

                    // {console.log(pathName)}

                    // ((()=>{
                    //   if (pathName != '/') {
                    //     return(
                    //       <li key={link.name}>
                    //           {/* <a href="/">Home</a> */}
                    //           <Link href={link.href} className={isActive ? 'active-page' : ''}>{link.name}</Link>
                    //       </li> 
                    //     );
                    //   }else{
                    //     return(
                    //       <li key={link.name}>
                    //           {/* <a href="/">Home</a> */}
                    //           <Link href={link.href} className={isActive ? 'active-page' : ''}>{link.name}</Link>
                    //       </li> 
                    //     );
                    //   }
                    // })())


                    return(
                        // <li key={link.name}>
                        //     {/* <a href="/">Home</a> */}
                        //     <Link href={link.href} className={isActive ? 'active-page' : ''}>{link.name}</Link>
                        // </li> 
                        <li key={link.name}>
                            {/* <a href="/">Home</a> */}
                            <Link href={link.href} className={pathName === link.href ? 'active-page' : ''}>{link.name}</Link>
                        </li> 
                    );
                })}
                
            </ul>
        </div>
        {/* <HeaderCTA /> */}
    </header>
  )
}

export default Header