import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import imgOne from "../../assets/client-portfolio.png";
import imgTwo from "../../assets/destiny.png";
import imgThree from "../../assets/e-com.png";
import imgFour from "../../assets/im-magnet.png";
import Divider from "../Divider";
import ProjectCard from "./Card";

const projectData = [
  {
    img: imgOne,
    projectTitle: "Arunn Raj Portfolio",
    projectDescription: "Client Portfolio created using the React framework.",
  },
  {
    img: imgTwo,
    projectTitle: "Destiny Group",
    projectDescription: "This project is for various groups.",
  },
  {
    img: imgThree,
    projectTitle: "shop-e",
    projectDescription: "This is my sample e-commerce website.",
  },
  {
    img: imgFour,
    projectTitle: "Im-Magnet",
    projectDescription: "This project is related to online courses.",
  },
];

export default function App() {
  return (
    <div className="container mx-auto">
      {/* Projects Heading */}
      <h1
        id="projects"
        className="underline md:text-[3.5rem] text-[2.5rem] text-center font-bold text-white drop-shadow-header mt-10 pb-14"
      >
        Projects
      </h1>

      {/* Swiper Slider */}
      <div className="px-10">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
        //   navigation
        //   pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 }, // Show 2 slides on small screens
            1024: { slidesPerView: 3 }, // Show 4 slides on larger screens
          }}
        >
          {projectData.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectCard
                img={project.img}
                projectTitle={project.projectTitle}
                projectDescription={project.projectDescription}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Divider */}
      <div className="md:px-0 px-10 mt-10">
        <Divider />
      </div>
    </div>
  );
}
