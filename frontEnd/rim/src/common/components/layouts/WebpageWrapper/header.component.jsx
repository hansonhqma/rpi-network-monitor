import React, { useState, useLayoutEffect, useEffect, useRef } from "react";
//import styles from './webpage.module.css'
import styles from './webpage.module.css'
import Logo from '@/images/RIM_transparent.png';


import Image from 'next/image';
import Link from 'next/link';




const HeaderComponent = (props) => {
    let temp_array = [{
        title: 'Home',
        link: '/'
    }, {
        title: 'Buildings Directory',
        link: '/_directory'
        
    }, {
        title: 'RPI Map',
        link: '/_heatmap'
    }
    ]

    return (
        <header className="flex flex-row">
            <Link className="flex flex-center fit-content header-logo-container" href="/"> 
                <Image src={Logo} alt="RPI Internet Monitor Logo" /> 
            </Link>
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