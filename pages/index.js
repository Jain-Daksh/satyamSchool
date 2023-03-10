import Head from 'next/head'
import Nav from '../components/Nav'
import HomePage from '../components/Home'
import About from '../components/AboutUs'
import Discover from '../components/Discover'
import WhyToRegister from '../components/WhyToRegister'
import StudentCare from '../components/StudentCare'
import Courses from '../components/Courses'
import Join from '../components/Join'
import Images from '../components/Images'
import Contact from '../components/ContactUs'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Satyam Public School</title>
      </Head>
      <Nav />
      <HomePage />
      <About />
      {/* 
      <Discover />
      <WhyToRegister />
      <Courses />
      <Join></Join>
      <Images />
      <Contact /> */}
      <Footer />
    </div>
  )
}