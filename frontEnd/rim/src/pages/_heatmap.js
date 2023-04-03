import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'


import WebpageWrapper from '@/WebpageWrapper'

import { MapSection } from '@/MapSection'
import { FeaturesSection } from "@/FeaturesSection"
import { ConnectionResults } from "@/common/components/layouts/HomepageContent/ConnectionResults/__index"



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <WebpageWrapper>
        <MapSection />
      </WebpageWrapper>
  )
}
