import Head from 'next/head'
//import Image from 'next/image'
import { Inter } from '@next/font/google'


import WebpageWrapper from '@/WebpageWrapper'

import { HeroSection } from '@/HeroSection'
import { FeaturesSection } from "@/FeaturesSection"
import { ConnectionResults } from "@/common/components/layouts/HomepageContent/ConnectionResults/__index"
//import { PopupT } from "@/common/components/layouts/PopupT/__index"
//Insert <PopupT /> when fixed

const inter = Inter({ subsets: ['latin'] })




export default function Home() {
    
    return (
      <WebpageWrapper>
        <HeroSection />
        <ConnectionResults />
        <FeaturesSection />
      </WebpageWrapper>
    )
  
}
