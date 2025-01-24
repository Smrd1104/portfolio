import React, { useEffect } from 'react'
import profile from "../assets/riyas.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration (in ms)
          offset: 100,    // Offset (in px) from the original trigger point
          easing: 'ease-in-out', // Easing function for animations
          once: true,     // Whether animation should happen only once
        });
      }, []);
    return (
        <div className='px-10  py-36 container mx-auto '>
            <div className='flex md:flex-row flex-col items-center gap-14'>
                <div data-aos="zoom-in" className=''>
                    <img
                        src={profile}
                        alt="Logo"
                        className="object-cover md:w-[300px] w-[200px] h-auto transition-all duration-300"
                    />
                </div>
                <div className='md:translate-x-32 text-center'>
                   <p data-aos="fade-right" className='md:text-[4.5rem] text-[3.5rem] font-bold text-white'> Hi I'm Riyas.</p>
                   <p  data-aos="fade-right" className='md:text-[1.5rem] text-[1.2rem] text-white'> a passionate front-end developer specializing in React.js. </p>
                   <p data-aos="fade-right" className='md:text-[1.5rem]  text-[1.2rem] text-white'> I turn complex ideas into clean, functional, and responsive web applications.</p>

                </div>

            </div>
        </div>
    )
}

export default Hero