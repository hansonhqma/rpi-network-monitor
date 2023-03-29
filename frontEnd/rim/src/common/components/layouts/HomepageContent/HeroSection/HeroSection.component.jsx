//THIS IS RIM HERO SECTION (RENAME)

import styles from './HeroSection.module.css'
import Image from 'next/image';
import Link from 'next/link';


import Image1 from '@/images/location.png';


import { BsChevronDoubleDown } from 'react-icons/bs'


//This is the line (arrows are the chevrons below in Hero)
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

    //Replace Image with RIM Logo
     return ( 
        <div className={`flex flow-col ${styles['hero-wrapper']}`}>
             <span className={`${styles['hero-background-text']}`}> RPI Internet Monitor </span>
             <h2></h2>
             <h1>RPI Internet Monitor</h1>
             <Image src={Image1}></Image> 
             <h5>"RIM Motto"</h5>

            <ProgressPath />

            <div className={`flex flow-row justify-sb ${styles['continue-scrolling-section']}`}>
                <BsChevronDoubleDown size={'2.25em'} color={'rgba(255, 255, 255, var(--high-emphasis-text))'}/>
                <BsChevronDoubleDown size={'2.25em'} color={'rgba(255, 255, 255, var(--high-emphasis-text))'}/>
            </div>

        </div>
    )
    
}