import styles from './HeroSection.module.css'
import Image from 'next/image';
import Link from 'next/link';


import Image1 from '@/images/location.png';


import { BsChevronDoubleDown } from 'react-icons/bs'



function ProgressPath(props){
    return (
        <div className={`${styles['slider-progress-path']}`}>
            <div className={`${styles['slider-progress-section']}`}>
                <div className={`${styles['slider-progress-section-inner']}`}>
                    <div className={`${styles['slider-progress-curve']}`}></div>
                </div>
            </div>
            <div className={`${styles['slider-progress-section']}`}>
                <div className={`${styles['slider-progress-section-inner']}`}>
                    <div className={`${styles['slider-progress-curve']}`}></div>
                </div>
            </div>
            <div className={`${styles['slider-progress-section']}`}>
                <div className={`${styles['slider-progress-section-inner']}`}>
                    <div className={`${styles['slider-progress-curve']}`}></div>
                </div>
            </div>
            <div className={`${styles['slider-progress-section']}`}>
                <div className={`${styles['slider-progress-section-inner']}`}>
                    <div className={`${styles['slider-progress-curve']}`}></div>
                </div>
            </div>
            <div className={`${styles['slider-progress-section']}`}>
                <div className={`${styles['slider-progress-section-inner']}`}>
                    <div className={`${styles['slider-progress-curve']}`}></div>
                </div>
            </div>
        </div>
    )
}



export default function Hero( props ){

    /* DEV-TASK [Developer] (Ask Project Lead befor attempting): Make the Hero Section have 4 unique sliders 
        to show content. This will be done with the use of components stored in an array of 4 long. Make the 
        path a progress bar that shows how far a user is amongst the slides, Make the animation for switching 
        slides similar to the folowing: https://mst.agency/. While also making the path dots fill in for what 
        part of the slides we are in. 
         
                 (Think about using gradients in between each dots to make the color change seemless)
    */
     return ( 
        <div className={`flex flow-col ${styles['hero-wrapper']}`}>
             <span className={`${styles['hero-background-text']}`}> Auditory Enhancements </span>
             <h2>Lorem Ipsum Dalor</h2>
             <h1>Big Super Fancy Title</h1>
             <Image src={Image1}></Image>
             <h5>incididunt ut labore et dolore magna</h5>
            <ProgressPath />
            <div className={`flex flow-row justify-sb ${styles['continue-scrolling-section']}`}>
                <BsChevronDoubleDown size={'2.25em'} color={'rgba(255, 255, 255, var(--high-emphasis-text))'}/>
                <BsChevronDoubleDown size={'2.25em'} color={'rgba(255, 255, 255, var(--high-emphasis-text))'}/>
            </div>
        </div>
    )
    
}