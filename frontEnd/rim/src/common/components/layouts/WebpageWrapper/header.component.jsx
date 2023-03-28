//THIS IS HEADER/NAVBAR

import React, { useState, useLayoutEffect, useEffect, useRef } from "react";
import styles from './webpage.module.css'
import Logo from "@/AR-Logo"

import Image from 'next/image';
import Link from 'next/link';



//REPLACE WITH LINKS TO OTHER PAGES
const HeaderComponent = (props) => {
    let temp_array = [{
        title: 'Lorem',
        link: 'https://google.com'
    }, {
        title: 'Ipsum',
        link: 'https://google.com'
    }, {
        title: 'Dalor',
        link: 'https://google.com'
    }, {
        title: 'Amut',
        link: 'https://google.com'
    }, {
        title: 'labore',
        link: 'https://google.com'
    }, {
        title: 'Sign In | Sign Up',
        link: 'https://google.com'
    }
    ]

    //REPLACE LOGO
    return (
        <header className="flex flex-row">
            <div className="flex flex-center fit-content header-logo-container"> 
                <Image src={Logo} alt="RPI Internet Monitor Logo" /> 
            </div>
            <div className={`flex fill-horizontal flow-row justify-end ${styles['header-link-container']}`}>
               {temp_array.map(( element, index ) => {
                    return (
                        <Link className="flex flex-center" href={element.link}>
                            {element.title}
                        </Link>
                    );
               })} 
            </div>
        </header>
    );
}

 
export default HeaderComponent;