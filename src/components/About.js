import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase as WorkIcon, FaGraduationCap as SchoolIcon } from 'react-icons/fa';
import Divider from './Divider';

const timelineData = [
    {
        type: 'work',
        date: '2024 - present',
        dateColor: '#fff',
        title: 'Web Developer',
        subtitle: 'Tamil Nadu',
        description: 'React Developer specializing in building responsive and dynamic web applications.',
        icon: <WorkIcon />,
    },
    {
        type: 'work',
        date: '2023 - 2024',
        dateColor: '#fff',
        title: 'Front-end Developer',
        subtitle: 'Hyderabad',
        description: 'Developed user-friendly interfaces using React and integrated APIs for seamless functionality.',
        icon: <WorkIcon />,
    },
    {
        type: 'work',
        date: '2022 - 2023',
        dateColor: '#fff',
        title: 'Data Extract Analyst',
        subtitle: 'Villupuram, Tamil Nadu',
        description: 'Analyzed and processed data for website integration, ensuring accuracy and efficiency.',
        icon: <WorkIcon />,
    },
    {
        type: 'education',
        date: '2014 - 2018',
        dateColor: '#fff',
        title: 'B.E Mechanical Engineering',
        subtitle: 'Bachelor Degree',
        description: 'Graduated with first class honors (CGPA 7.88).',
        icon: <SchoolIcon />,
    },
    {
        type: 'education',
        date: '2012 - 2014',
        dateColor: '#fff',
        title: 'Higher Secondary School',
        subtitle: '',
        description: 'Completed courses in Maths, Physics, Chemistry, and Computer Science.',
        icon: <SchoolIcon />,
    },
    {
        type: 'education',
        date: '2011 - 2012',
        dateColor: '#fff',
        title: 'SSLC',
        subtitle: '',
        description: 'Completed secondary school education.',
        icon: <SchoolIcon />,
    },
];

const Timeline = () => {
    return (
        <div className="md:px-0 px-10 container mx-auto mt-14">
            <h1 id="about" className="underline md:text-[3.5rem] text-[2.5rem] text-center font-bold text-white drop-shadow-header pb-10 ">
                Work & Education 
            </h1>
            <VerticalTimeline>
                {timelineData.map((item, index) => (
                    <VerticalTimelineElement
                        key={index}
                        className={`vertical-timeline-element--${item.type}`}
                        contentStyle={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            color: '#fff',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '8px',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        }}
                        contentArrowStyle={{
                            borderRight: '7px solid rgba(255, 255, 255, 0.2)',
                        }}
                        date={<span style={{ color: item.dateColor }}>{item.date}</span>}
                        iconStyle={{
                            background: item.type === 'work' ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 1)',
                            color: '#000',
                            boxShadow: '0 0 0 4px rgba(255, 255, 255, 0.2)',
                        }}
                        icon={item.icon}
                    >
                        <h3 className="vertical-timeline-element-title text-xl font-bold">{item.title}</h3>
                        <h4 className="vertical-timeline-element-subtitle text-lg text-gray-300">{item.subtitle}</h4>
                        <p className="text-gray-400">{item.description}</p>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
            <div className='mt-10'>
                <Divider />
            </div>
        </div>
    );
};

export default Timeline;