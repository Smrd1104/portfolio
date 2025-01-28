import React, { useEffect, useRef } from 'react';
import profile from "../assets/mohamed.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect'; // Import typewriter-effect
import Divider from './Divider';

const Hero = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: 'ease-in-out',
      once: true,
    });


  }, []);

  return (
    <div className='px-10 py-36 container mx-auto'>
      <div className='flex md:flex-row flex-col items-center gap-14'>
        <div data-aos="zoom-in">
          <img
            src={profile}
            alt="Logo"
            className="border-4 border-[#fff] md:translate-x-10 rounded-[3rem] object-cover md:w-[300px] w-[200px] h-auto transition-all duration-300 animate-glitter"
          />
        </div>

        <div className='md:translate-x-5 text-center'>
          <p data-aos="fade-right" className='drop-shadow-header md:text-[4rem] text-[1.5rem] font-bold text-white'>
            {' '}
            <span className="text-yellow-300">
              <Typewriter
                options={{
                  strings: ["Hi, I'm", 'Mohamed Riyasdeen.','Web developer'],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                }}
              />
            </span>
          </p>
          <p data-aos="fade-right" className='md:text-[1.5rem] text-[1rem] text-white'>
            a passionate front-end developer specializing in React.js.
          </p>
          <p data-aos="fade-right" className='md:text-[1.5rem] text-[1rem] text-white'>
            I turn complex ideas into clean, functional, and responsive web applications.
          </p>
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default Hero;
