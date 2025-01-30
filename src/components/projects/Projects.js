import React from "react";
import imgOne from '../../assets/client-portfolio.png';
import imgTwo from '../../assets/destiny.png';
import imgThree from '../../assets/e-com.png';
import imgFour from '../../assets/im-magnet.png';
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
            <h1 id='projects' className='underline md:text-[3.5rem] text-[2.5rem] text-center font-bold text-white drop-shadow-header mt-10 pb-14'>
                Projects
            </h1>

            {/* Projects Grid */}
            <div className="flex justify-center items-center px-10 grid md:grid-cols-4 grid-cols-1 gap-10">
                {projectData.map((project, index) => (
                    <ProjectCard
                        key={index}
                        img={project.img}
                        projectTitle={project.projectTitle}
                        projectDescription={project.projectDescription}
                    />
                ))}
            </div>

            {/* Divider */}
            <div className="md:px-0 px-10">
                <Divider />
            </div>
        </div>
    );
}