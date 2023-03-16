import styles from './FeaturesSection.module.css'
import Image from 'next/image';
import Link from 'next/link';

import { FaQuestion } from "react-icons/fa";
import { PhoneGraphic } from '@/components/PhoneGraphic/__index.js'

//import Image1 from '@/images/location.png';
//import { BsChevronDoubleDown } from 'react-icons/bs'

export default function FeaturesSection( props ){

    return ( 
        <div className="webpage-content-section-container">
            <div className="webpage-content-section-graphic-box">
                <PhoneGraphic></PhoneGraphic>
            </div>
            <div className={`flex flow-col webpage-content-section-main-box ${styles['features-second-margin']}`}>
                <h3>Rhoncus aenean vel elit</h3>
                <h5>Ipsum dolor sit amet consectetur adipiscing</h5>
                <p className={`margin-0  margin-bottom-10 ${styles['features-p-line-clamp']}`}>Facilisis mauris sit amet massa. Vitae semper quis lectus nulla at volutpat. Nibh venenatis cras sed felis eget velit. Sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum. Vitae nunc sed velit dignissim sodales ut eu sem integer. Amet risus nullam eget felis eget nunc lobortis mattis. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Sit amet consectetur adipiscing elit pellentesque habitant morbi. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Odio ut sem nulla pharetra. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Duis ultricies lacus sed turpis tincidunt id.</p>
                <span className={`${styles['cr']}`}>Continue Reading</span>
                <div className={`${styles['features-slider-container']}`} >

                </div>
            </div>
        </div>
    ) 
}