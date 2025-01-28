import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase as WorkIcon, FaGraduationCap as SchoolIcon } from 'react-icons/fa';
import Divider from './Divider';

const timelineData = [
    {
        type: 'work',
        date: '2024 - present',
        dateColor: '#fff', // Add date color
        title: 'Web Developer',
        subtitle: 'Tamil Nadu',
        description: 'React Developer ',
        icon: <WorkIcon />,
    },
    {
        type: 'work',
        date: '2023 - 2024',
        dateColor: '#fff', // Add date color
        title: 'Front-end Developer',
        subtitle: 'Hyderabad',
        description: 'Used react framework to create websites',
        icon: <WorkIcon />,
    },
    {
        type: 'work',
        date: '2022 - 2023',
        dateColor: '#fff', // Add date color
        title: 'Data Extract Analyst',
        subtitle: 'Villupuram, Tamil Nadu',
        description: 'Analyzed data and ensured accuracy for website integration',
        icon: <WorkIcon />,
    },
    {
        type: 'education',
        date: '2014 - 2018',
        dateColor: '#fff', // Add date color
        title: 'B.E Mechanical Engineering',
        subtitle: 'Bachelor Degree',
        description: 'Completed Engineering degree with first class CGPA 7.88',
        icon: <SchoolIcon />,
    },
    {
        type: 'education',
        date: '2012 - 2014',
        dateColor: '#fff', // Add date color
        title: 'Higher Secondary School',
        subtitle: '',
        description: 'Maths, Physics, Chemistry, and Computer Science courses completed',
        icon: <SchoolIcon />,
    },
    {
        type: 'education',
        date: '2011 - 2012',
        dateColor: '#fff', // Add date color
        title: 'SSLC',
        subtitle: '',
        description: 'Completed',
        icon: <SchoolIcon />,
    },
];

const Timeline = () => {
    return (
        <div className="md:px-0 px-10 container mx-auto">
            <h1 id="about" className="text-[3.5rem] text-center font-bold text-white drop-shadow-header -mt-24 pb-14">
                Know Him
            </h1>
            <VerticalTimeline>
                {timelineData.map((item, index) => (
                    <VerticalTimelineElement
                        key={index}
                        className={`vertical-timeline-element--${item.type} md:px-14`}
                        contentStyle={
                            item.type === 'work'
                                ? { background: 'pink', color: '#fff' }
                                : item.type === 'education'
                                ? { background: 'skyblue', color: '#fff' }
                                : {}
                        }
                        contentArrowStyle={
                            item.type !== 'star' ? { borderRight: `7px solid ${item.type === 'work' ? 'pink' : 'skyblue'}` } : {}
                        }
                        date={<span style={{ color: item.dateColor }}>{item.date}</span>} // Add dynamic date color
                        iconStyle={{
                            background: item.type === 'work' ? 'skyblue' : item.type === 'education' ? 'pink' : 'rgb(255, 255, 255)',
                            color: 'white',
                        }}
                        icon={item.icon}
                    >
                        {item.title && <h3 className="vertical-timeline-element-title">{item.title}</h3>}
                        {item.subtitle && <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>}
                        {item.description && <p>{item.description}</p>}
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
            <Divider />
        </div>
    );
};

export default Timeline;
