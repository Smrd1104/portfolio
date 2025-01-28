import React from "react";
import ProjectCard from "./Card";
import imgOne from '../../assets/client-portfolio.png'
import imgTwo from '../../assets/destiny.png'
import imgThree from '../../assets/e-com.png'
import imgFour from '../../assets/im-magnet.png'
import Divider from "../Divider";

const projectData = [
    {
        img: imgOne,
        projectTitle: "Arunn Raj Portfolio",
        projectDescription: "Client Portfolio create by using react framework .",
    },
    {
        img: imgTwo,
        projectTitle: "Destiny Group",
        projectDescription: "This project is various group.",
    },
    {
        img: imgThree,
        projectTitle: "shop-e",
        projectDescription: "This my sample e-comm website.",
    },
    {
        img: imgFour,
        projectTitle: "Im-Magnet",
        projectDescription: "This project is online course related.",
    },
];

export default function App() {
    return (
        <div className="container mx-auto">
            <h1  id='projects' className='text-[3.5rem] text-center font-bold text-white drop-shadow-header mt-10 pb-14 '>Projects</h1>

            <div className="flex justify-center items-center  px-10 grid md:grid-cols-4 grid-cols-1 gap-10 ">
                {projectData.map((project, index) => (
                    <ProjectCard
                        key={index}
                        img={project.img}
                        projectTitle={project.projectTitle}
                        projectDescription={project.projectDescription}
                    />
                ))}
            </div>
            <div className="md:px-0 px-10">
                <Divider />
            </div>
        </div>
    );
}
