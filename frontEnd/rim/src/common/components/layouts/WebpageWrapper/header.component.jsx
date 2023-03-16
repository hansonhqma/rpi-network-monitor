import React, { useState, useLayoutEffect, useEffect, useRef } from "react";
//import styles from './webpage.module.css'
import styles from './webpage.module.css'
import Logo from "@/AR-Logo"

import Image from 'next/image';
import Link from 'next/link';




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

    return (
        <header className="flex flex-row">
            <div className="flex flex-center fit-content header-logo-container"> 
                <Image src={Logo} alt="Audio Reality Logo" /> 
            </div>
            <div className={`flex fill-horizontal flow-row justify-end ${styles['header-link-container']}`}>
               {temp_array.map(( element, index ) => {
                    return (
                        /* DEV-TASK [Easy-Medium] (DONE): Make a clean animation for when any link is hovered on */
                        /* DEV-TASK [Easy-Medium]: Make the Sign In | Sign Up Its own button with a clean minimalistic animation */
                        /* DEV-TASK [Hard-Diffiucult]: Make drop down menus compatible with the following code. 
                            Another loop and sub arrays will be needed for this to be acheived */
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