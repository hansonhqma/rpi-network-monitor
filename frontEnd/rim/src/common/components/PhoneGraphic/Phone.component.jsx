import styles from './Phone.module.css'
import Image from 'next/image';
import Link from 'next/link';

//import { FaQuestion } from `react-icons/fa`;

export default function SmartPhone(props){
    return (
        <div className={`${styles['iphone-wrapper']}`}>
            <div className={`${styles['iphone-x']}`}>
                <div className={`${styles['bazzel']}`}>
                    <div className={`${styles['screen']}`}></div>
                </div>
                <div className={`${styles['line']}`}></div>
                <div className={`${styles['header']}`}>
                    <div className={`${styles['sensor-1']}`}></div>
                    <div className={`${styles['sensor-2']}`}></div>
                    <div className={`${styles['sensor-3']}`}></div>
                </div>
                <div className={`${styles['volume-button']}`}></div>
                <div className={`${styles['power-button']}`}></div>
            </div>
        </div>
    )
} 