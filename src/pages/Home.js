import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/projects/Projects'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div className='bg-gradient-to-r from-[#922F37] to-[#97CEEB] '>
        <Header/>
        <Hero/>
        <About/>
        <Projects/>
        <Footer/>
    </div>
  )
}

export default Home