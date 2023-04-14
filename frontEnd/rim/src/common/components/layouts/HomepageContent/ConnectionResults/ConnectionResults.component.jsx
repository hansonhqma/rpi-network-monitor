//THIS IS CONNECTION RESULTS (RENAME)

import styles from './ConnectionResults.module.css'
import React, { useState, useEffect } from 'react';


//This is where we get the users current results
//fetch("localhost:3000/get_building_last?ip=129.139.34.29")
//.then((response) => response.json)

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
      console.log("speed Mbps: " + speedMbps)
      document.getElementById('output').innerHTML = speedMbps;
    }
  
    download.onerror = function (err, msg) {
      console.log("image downloading failed");
    }
  
    startTime = (new Date()).getTime();
    var cacheBuster = "?nnn=" + startTime;
  
    download.src = imageAddr + cacheBuster;
  
  }



export default function ConnectionResults( props ){
     return ( 
        <div className={`webpage-content-section-container ${styles['support-padding-top']}`}> 
            <div className={`flex flow-col webpage-content-section-main-box ${styles['support-second-margin']}`}>
                
                <h3 className={'justify-center'} >Current Connection Results:</h3>
                <h5 className={'justify-center '}>"Your connection results below"</h5>
                
                <h3></h3>
                <div className={`${styles['hr']}`}><hr /></div>
                <h3></h3>

                <div class = "container">
                    <h3 className={` justify-center ${styles['results']}`}>
                        Building Name: &nbsp; Walker Laboratories
                    </h3>
                    <h3 className={` justify-center ${styles['results']}`}>
                        Download Speed: &nbsp; <h5 id="output"></h5> &nbsp; Mbps
                    </h3>
                </div>
            </div>
        </div>
    )
    
}