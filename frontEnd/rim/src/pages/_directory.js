import Head from 'next/head'
import Image from 'next/image'
import { Inter } from "next/font/google"


import WebpageWrapper from '@/WebpageWrapper'

import { TableSection } from '@/TableSection'
import { FeaturesSection } from "@/FeaturesSection"
import { ConnectionResults } from "@/common/components/layouts/HomepageContent/ConnectionResults/__index"



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <WebpageWrapper>
        <TableSection />
      </WebpageWrapper>
  )
}
