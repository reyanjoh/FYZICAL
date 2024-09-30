import Image from 'next/image'
import React from 'react'
import HeaderCTA from './HeaderCTA'

function Header() {
  return (
    <header className='header'>
        <div className='header-container'>
            <Image alt='' className='main-logo' src={'/images/logos/fyzical-white-logo.png'} height={61} width={270}/>
            <ul>
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
        <HeaderCTA />
    </header>
  )
}

export default Header