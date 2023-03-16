import React, { useState, useLayoutEffect, useEffect, useRef } from "react";
import styles from './webpage.module.css'
import HeaderComponent from "./header.component.jsx";
import ToolbarComponent from "./toolbar.component.jsx";

const WebpageWrapper = (props) => {
    const [scrollPercentage, setScrollPercentage] = useState(0)
    const [isScreenVertical, setIsScreenVertical] = useState(0)

    const handleScroll = () => {
        var h = document.documentElement, 
            b = document.body,
            st = 'scrollTop',
            sh = 'scrollHeight';
        //Equation below calculates scroll percentage on all browsers
        var currScrollPercentage = ( (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100 );

        if(Math.floor(currScrollPercentage) != scrollPercentage){
            setScrollPercentage(Math.floor(currScrollPercentage))
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);
   
    useEffect(() => {
        console.log("Percent Scrolled Is: ", scrollPercentage, "%" );
        if( !(scrollPercentage < 5) ){
            document.querySelector(':root').style.setProperty('--scroll-progress', `${100 - scrollPercentage}vw`);
        } else { document.querySelector(':root').style.setProperty('--scroll-progress', `${100}vw`); }
    }, [scrollPercentage]);

    return (
        <>
            <HeaderComponent />
            <div id="page-container" className={`primary-bg ${styles['webpage-container']}`} >
              { props.children }
            </div>
            <ToolbarComponent displayVerical={isScreenVertical} />
        </>
    )
}
export default WebpageWrapper;