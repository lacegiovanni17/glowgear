import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Glowgear e-commerce</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className='text-3xl font-bold'> Glowgear e-commerce </h1>
    </div>
  )
}
