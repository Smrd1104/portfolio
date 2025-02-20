import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import img from "../assets/diamond-bg.jpg";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RootLayout = () => {
  const progressRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let progressTween = gsap.to(progressRef.current, {
      width: "100%",
      ease: "none",
      scrollTrigger: {
        scrub: 0.3, // Smooth progress update
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          setIsScrolled(self.progress > 0); // Show progress bar only when scrolled
        },
      },
    });

    return () => progressTween.kill(); // Cleanup GSAP animation
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      {/* Progress Bar (Initially Hidden) */}
      <div className={`fixed top-0 left-0 w-full h-[4px] z-50 transition-opacity duration-300 ${isScrolled ? "opacity-100" : "opacity-0"}`}>
        <div ref={progressRef} className="h-full bg-gradient-to-r from-blue-500 via-red-500 to-violet-500 rounded-full w-0"></div>
      </div>

      {/* Background Image */}
      <img src={img} alt="background" className="absolute top-0 left-0 w-full h-full object-cover -z-10" />

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/70 -z-10"></div>

      {/* Main Content */}
      <main className="relative z-20 ">
        <Header />
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};

export default RootLayout;











{/* Video Background */}
            {/* <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0  w-full h-full object-cover -z-10"
            >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video> */}