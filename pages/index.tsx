/* eslint-disable @next/next/no-img-element */
import About from '@/components/about/about';
import Contact from '@/components/contact/contact';
import Header from '@/components/header/header';
import Projects from '@/components/projects/projects';
import Services from '@/components/services/services';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>MakzTech - Desenvolvimento de Software</title>
      </Head>
      <Header />
      <About />
      <Projects />
      <Services />
      <Contact />
    </>
  )
}
