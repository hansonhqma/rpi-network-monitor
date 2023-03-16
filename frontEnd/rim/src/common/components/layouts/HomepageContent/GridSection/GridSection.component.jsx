import styles from './GridSection.module.css'
import Image from 'next/image';
import Link from 'next/link';

import { FaQuestion } from "react-icons/fa";


//import Image1 from '@/images/location.png';
//import { BsChevronDoubleDown } from 'react-icons/bs'


export default function GridSection( props ){

    let temp_array = [{ color: 'blue' } , { color: 'pink' } , { color: 'green' } , { color: 'blue' } , { color: 'pink' } , { color: 'green' } , { color: 'blue' } , { color: 'pink' }]

     return ( 
        <div className="webpage-section-container align-center">
            <h3>Rhoncus aenean vel elit scelerisque mauris</h3>
            <div className={`${styles['grid']}`} >
                {temp_array.map(( element ) => {
                    return (
                        <div className={`flex flex-center flow-col ${styles['grid-box']}`} >
                            <div className={`${styles['icon']} icon-bg-${element.color}`}>
                                <FaQuestion size={'1.75em'} color={'white'}/>
                            </div>

                            <h5>Hello World</h5>
                        </div>
                    )
                })}

            </div>
        </div>
    )
    
}