import Head from 'next/head'
import Image from 'next/image';
import styles from '@/styles/Home.module.css'
import Hero from '../components/Hero';
import Wrapper from '@/components/Wrapper';
import Services from '../components/Services'
export default function Home() {
  return (
    <>
      <Head>
        <title>Lemon Craft</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        
          <Hero/>

          <Services/>
      </main>
    </>
  )
}
