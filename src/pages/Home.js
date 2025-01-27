import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Card from '../components/projects/Card'
const Home = () => {
  return (
    <div className='bg-gradient-to-r from-[#922F37] to-[#97CEEB] '>
        <Header/>
        <Hero/>
        <About/>
        <Card/>
    </div>
  )
}

export default Home