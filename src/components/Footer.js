import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";
import Divider from './Divider';
import { SiGmail } from 'react-icons/si';
import { FaLinkedinIn} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='container mx-auto '>
            <h1 id='contact-us' className='underline  md:text-[3.5rem] text-[2.5rem] text-center font-bold text-white drop-shadow-header mt-10 md:pb-14 pb-5  '>Contact Us</h1>
            <div className='flex md:flex-row flex-col md:justify-evenly px-10 md:items-center md:gap-0 gap-3 md:translate-x-0 translate-x-14'>
                <div className='flex flex-row gap-2 items-center text-white font-semibold'>
                    <IoLogoWhatsapp className='text-[2rem] ' />
                    <p className='text-[1rem]'>+91 9360103180</p>
                </div>
               
                <a href='https://www.linkedin.com/in/mohamed-riyasdeen-11mrd97/' target="_blank" rel="noreferrer">
                    <div className='flex flex-row gap-2 items-center text-white font-semibold'>

                        <FaLinkedinIn  className='text-[2rem]' />

                        <p className='text-[1rem]'>Mohamed Riyasdeen</p>

                    </div>
                </a>
                <div className='flex flex-row gap-2 items-center text-white font-semibold'>
                    <SiGmail className='text-[2rem]' />
                    <p className='text-[1rem]'>mriyasdeen1104@gmail.com</p>
                </div>
            </div>
            <div className='md:mt-0 mt-10 md:px-0 px-10'>
                <Divider />
            </div>
            <div className="py-3 text-center">
                <span className="text-white md:text-[1rem] text-[0.9rem] font-semibold text-center"> {new Date().getFullYear()}@All rights Reserved & Affiliated to Riyas</span>
            </div>
        </div>
    )
}

export default Footer