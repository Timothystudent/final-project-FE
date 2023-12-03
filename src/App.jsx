import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './config/firebase'
// import './App.css'
import Homepage from './homepage'
import Header from './header'
import Hero from './hero'
import FeaturedService from './featured-service'
import Cta from './cta'
import About from './about'
import Counts from './counts'

import Service from './service'
import Appointment from './appointment'
import Departments from './departments'

import Doctors from './doctors'
import Gallery from './gallery'

import Faq from './faq'
import Contact from './contact'
import Footer from './footer'
import TopBar from './top-bar'
// import './assets/css/style.css'
// import './assets/vendor/animate.css'
// import './assets/vendor/aos/aos.css'
// import './assets/vendor/bootstrap/css/'

function App() {
  return(
    <>
    <Hero/>
    <FeaturedService/>
    <Cta/>
    <About/>
    <Counts/>
    
    <Service/>
    <Appointment/>
    <Departments/>
    
    <Doctors/>
    <Gallery/>
 
    <Faq/>
    <Contact/>
    <Footer/>
    <Homepage/>
    <Header/>
    <TopBar/>
    
    </>
  )
}

export default App
