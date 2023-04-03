import Head from 'next/head'
//import Image from 'next/image'
import { Inter } from '@next/font/google'


import WebpageWrapper from '@/WebpageWrapper'

import { HeroSection } from '@/HeroSection'
import { FeaturesSection } from "@/FeaturesSection"
import { ConnectionResults } from "@/common/components/layouts/HomepageContent/ConnectionResults/__index"
import { PopupT } from "@/common/components/layouts/PopupT/__index"
//Insert <PopupT /> when fixed

const inter = Inter({ subsets: ['latin'] })

var imageAddr = "https://raw.githubusercontent.com/hansonhqma/rpi-network-monitor/main/server/index.html";
var downloadSize = 1269; //bytes 

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
  }

  download.onerror = function (err, msg) {
    console.log("image downloading failed");
  }

  startTime = (new Date()).getTime();
  var cacheBuster = "?nnn=" + startTime;

  download.src = imageAddr + cacheBuster;

}


export default function Home() {
    
    return (
      <WebpageWrapper>
        <HeroSection />
        <FeaturesSection />
        <ConnectionResults />
      </WebpageWrapper>
    )
  
}
