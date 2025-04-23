import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Certifications from '../components/Certifications'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bikram Malla Portfolio</title>
      </Head>
      <main>
        <Navbar />
        <div className="pt-20">
          <Hero />
          <About />
          <Experience />
          <Education />
          <Certifications />
          <Contact />
        </div>
      </main>
    </>
  )
}

