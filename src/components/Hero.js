import React, { useEffect, useRef } from 'react';
import profile from "../assets/mohamed.png";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Typewriter from 'typewriter-effect';
import Divider from './Divider';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const image = imageRef.current;
    const text = textRef.current;

    gsap.fromTo(
      hero,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: hero,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );

    gsap.fromTo(
      image,
      { opacity: 0, scale: 0.8, rotateY: 180 },
      {
        opacity: 1,
        scale: 1,
        rotateY: 0,
        duration: 1.5,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: image,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );

    gsap.fromTo(
      text,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: text,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );
  }, []);

  return (
    <div ref={heroRef} className='px-10 pt-36 container mx-auto'>
      <div className='flex md:flex-row flex-col items-center gap-14 py-14'>
        <div ref={imageRef}>
          <img
            src={profile}
            alt="Profile"
            loading='lazy'
            className="border-4 border-[#fff] md:translate-x-10 rounded-[3rem] object-cover md:w-[300px] w-[250px] h-auto transition-all duration-300 animate-glitter"
          />
        </div>

        <div ref={textRef} className='md:translate-x-5 text-center'>
          <p className='pb-5 drop-shadow-header md:text-[4rem] text-[1.8rem] font-bold text-white'>
            <span className="text-yellow-300">
              <Typewriter
                options={{
                  strings: ["Hi, I'm", 'Mohamed Riyasdeen.', 'Web developer'],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                }}
              />
            </span>
          </p>
          <div className='space-y-3 px-8'>
            <p className='md:text-[1.5rem] text-[1rem] text-white md:text-center text-center'>
              A passionate front-end developer specializing in React.js.
            </p>
            <p className='md:text-[1.5rem] text-[1rem] text-white md:text-center text-center'>
              I build dynamic, responsive, and user-friendly web applications.
            </p>
          </div>
        </div>
      </div>
      <div className='-mt-10'>
        <Divider />
      </div>
    </div>
  );
};

export default Hero;