import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'


import WebpageWrapper from '@/WebpageWrapper'

import { HeroSection } from '@/HeroSection'
import { GridSection } from '@/GridSection'
import { FeaturesSection } from "@/FeaturesSection"
import { SponsorSection } from "@/SponsorSection"
import { SupportSection } from "@/SupportSection"



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <WebpageWrapper>
        <HeroSection />
        <FeaturesSection />
        <SponsorSection />
        <SupportSection />
      </WebpageWrapper>
  )
}
