import React, { useEffect } from 'react';
import profile from "../assets/riyas.png";
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
            className="object-cover drop-shadow md:w-[300px] w-[200px] h-auto transition-all duration-300"
          />
        </div>
        <div className='md:translate-x-5 text-center'>
          <p data-aos="fade-right" className='drop-shadow-header md:text-[4rem] text-[2rem] font-bold text-white'>
            {' '}
            <span className="text-yellow-300">
              <Typewriter
                options={{
                  strings: ["Hi, I'm", 'Mohamed Riyasdeen.',],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                }}
              />
            </span>
          </p>
          <p data-aos="fade-right" className='md:text-[1.5rem] text-[1.2rem] text-white'>
            a passionate front-end developer specializing in React.js.
          </p>
          <p data-aos="fade-right" className='md:text-[1.5rem] text-[1.2rem] text-white'>
            I turn complex ideas into clean, functional, and responsive web applications.
          </p>
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default Hero;
