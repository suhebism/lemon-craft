import Head from 'next/head'
import Image from 'next/image';
import styles from '@/styles/Home.module.css'
import Hero from '../components/Hero';
import Wrapper from '@/components/Wrapper';
import Services from '../components/Services'
import AboutUs from '../components/AboutUs';
import WhyChooseUs from '../components/WhyChooseUs'
import Usp from '../components/Usp';
import Wework from '../components/Wework';
import Projects from '../components/Projects';
import Blogs from '../components/Blogs';
export default function Home() {
  return (
    <>
      <Head>
        <title>Lemon Craft</title>
        <meta name="description" content="Branding Company" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
          <Hero/>
          <Services/>
          <AboutUs/>
          <WhyChooseUs/>
          <Usp/>
          <Wework/>
          <Projects/>
          <Blogs/>
      </main>
    </>
  )
}
