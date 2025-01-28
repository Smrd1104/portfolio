import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/projects/Projects'
import Footer from '../components/Footer'
import video from '../assets/bg.mp4'
const Home = () => {
  return (
    <div className="relative w-full h-full">
    {/* Video Background */}
    <video 
        autoPlay 
        loop 
        muted 
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
    >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
    </video>

    {/* Gradient Overlay */}
    <div className="absolute top-0 left-0 w-full h-full  to-[#4A2041] mix-blend-multiply"></div>

    {/* Main Content */}
    <div className="relative">
        <Header />
        <Hero />
        <About />
        <Projects />
        <Footer />
    </div>
</div>
  )
}

export default Home