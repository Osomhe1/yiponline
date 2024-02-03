/* eslint-disable no-unused-vars */
import { useEffect } from 'react'
import './App.css'
import 'animate.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

import Header from './components/Header'
import Hero from './components/Hero'
import Banner from './components/Banner'
import WhoWeAre from './components/WhoWeAre'
import Services from './components/Services'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <>
      <Header />
      <Hero />
      <Banner />
      <WhoWeAre />
      <Services />
      <Footer />
    </>
  )
}

export default App
