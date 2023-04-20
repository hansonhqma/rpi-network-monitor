//THIS IS CONNECTION RESULTS (RENAME)

import styles from './ConnectionResults.module.css'
import React, { useState, useEffect, useRef } from 'react';
import mockData from '@/assets/jsonFile/mock-data.json';

if (typeof window !== 'undefined') {
    // on the browser, do speed check
    console.log("on the browser")
    var imageAddr = "https://submitty.cs.rpi.edu//img/submitty_logo_white.png";
    var downloadSize = 94412; //bytes 
    var startTime, endTime;
    var download = new Image();
    download.onload = function () {
      endTime = (new Date()).getTime();
      var duration = (endTime - startTime) / 1000;
      var bitsLoaded = downloadSize * 8;
      var speedBps = (bitsLoaded / duration).toFixed(2);
      var speedKbps = (speedBps / 1024).toFixed(2);
      var speedMbps = (speedKbps / 1024).toFixed(2);
      console.log("speed Mbps: " + speedMbps);
       //document.getElementById('output').innerHTML = speedMbps.toString();
    }
  
    download.onerror = function (err, msg) {
      console.log("image downloading failed");
    }
  
    startTime = (new Date()).getTime();
    var cacheBuster = "?nnn=" + startTime;
  
    download.src = imageAddr + cacheBuster;
  
  }



export default function ConnectionResults( props ){
    // FIND BUIDLING NAME WITH IP ADDRESS
    const [infos, setInfo] = useState(mockData);
    const buildingRef = useRef(null);
    /****************** */    
    // FIND THE GATEWAY/IP
    fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
        console.log(data);
        const ip = data.ip.split(' ')[0];
        const matchedInfo = infos.find(info => info.ip_address === ip);
        console.log(matchedInfo);

        const buildingAddress = matchedInfo ? matchedInfo.building_name : null;
        console.log(buildingAddress);
        buildingRef.current.textContent = `Building Name: ${buildingAddress}`;
    })
    .catch(error => console.error(error));
    /****************** */
    // FINT RTT TIME
    const outputRef = useRef(null);
    useEffect(() => {
      const url = "https://www.example.com/";
      const startTime = performance.now();
  
      fetch(url, { mode: "no-cors" })
        .then(() => {
          const endTime = performance.now();
          const rtt = endTime - startTime; // RTT in milliseconds
  
          outputRef.current.textContent = `Round-Trip Time(RTT): ${rtt.toFixed(2)} ms`;
          console.log(outputRef.current.textContent);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);
    /****************** */
     return ( 
        <div className={`webpage-content-section-container `}> 
            <div className={`flex flow-col webpage-content-section-main-box`}>
                
                <h3 className={'justify-center'} >Current Connection Results</h3>
                
                <h3></h3>
                <div className={`${styles['hr']}`}><hr /></div>
                <h3></h3>

                <div>
                    <h3 className={` justify-center ${styles['results']}`}>
                        <div ref={buildingRef}></div>
                    </h3>
                    <h3 className={` justify-center ${styles['results']}`}>
                        <div ref={outputRef} id="output"></div>
                    </h3>
                </div>
            </div>
        </div>
    )
    
}