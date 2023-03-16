import React, { useState, useLayoutEffect, useEffect, useRef } from "react";
import styles from './webpage.module.css'
import { FaApple, FaGooglePlay } from 'react-icons/fa'
//import Image from 'next/image';
//import Logo from "@/AR-Logo"


const ToolbarComponent = (props) => {
    

    return (
        <div className={`flex flow-col ${styles['toolbar-vertical-container']}`}>
            <div className={`flex flex-center ${styles['toolbar-icon-container']}`}>
                <FaApple size={'1.25em'} color={'white'}/>
            </div>
            <div className={`flex flex-center ${styles['toolbar-icon-container']}`}>
                <FaGooglePlay size={'1.25em'} color={'white'}/>
            </div>
            <div className={`flex flex-center ${styles['toolbar-last-container']}`}>
                IPSUM DALOR
            </div>
        </div>
    );
}


export default ToolbarComponent;