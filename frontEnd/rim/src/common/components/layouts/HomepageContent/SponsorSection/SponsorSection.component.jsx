import styles from './SponsorSection.module.css'
import Image from 'next/image';
import Link from 'next/link';


import Image1 from '@/images/location.png';


import { BsChevronDoubleDown } from 'react-icons/bs'



export default function SponsorSection( props ){
//Use a use state, use effect -> list of all images. 3 shown, 1 unseen. Off screen is push and pop
//https://www.npmjs.com/package/react-fast-marquee

     return ( 
        <div className={`flex flow-row ${styles['spnosor-section-container']}`}>
           { /* DEV-TASK [Hard-Difficult]: Make a marquee animation for the sponsors. To do so get a list of images and make 
                them greyscale with filter and grey scale properties. Then make them slowly scroll left to right across the screen in this container.
                Making the looping seemless so it looks as if it is never ending. This can also be done with a pop and push method as well. */}
        </div>
    )
    
}