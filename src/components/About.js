import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaStar as StarIcon, FaBriefcase as WorkIcon, FaGraduationCap as SchoolIcon } from 'react-icons/fa';
import Divider from './Divider';

const timelineData = [
    {
        type: 'work',
        date: '2024 - present',
        title: 'Web Developer',
        subtitle: 'Tamil Nadu',
        description: 'React Developer ',
        icon: <WorkIcon />,
    },
    {
        type: 'work',
        date: '2023 - 2024',
        title: 'Front-end Developer',
        subtitle: 'Hyderabad',
        description: 'Used react frame work to create website',
        icon: <WorkIcon />,
    },
    {
        type: 'work',
        date: '2022 - 2023',
        title: 'Data Extract Analyst',
        subtitle: 'Villupuram,Tamil Nadu',
        description: 'User data analyst through the correct data to website',
        icon: <WorkIcon />,
    },
   
   
    {
        type: 'education',
        date: '2014-2018',
        title: 'B.E Mechanical Engineering',
        subtitle: 'Bachelor Degree',
        description: 'Completed Engineering degree with first class CGPA 7.88',
        icon: <SchoolIcon />,
    },
    {
        type: 'education',
        date: '2012 - 2014',
        title: 'Higher Secondary School ',
        subtitle: '',
        description: 'maths,physics,chemistry,computer science course completed',
        icon: <SchoolIcon />,
    },
    {
        type: 'education',
        date: '2011 - 2012',
        title: 'SSLC  ',
        subtitle: '',
        description: 'completed',
        icon: <SchoolIcon />,
    },
    {
        type: 'star',
        icon: <StarIcon />,
        title: 'Mohamed Riyasdeen',
        subtitle: 'Journey of education and work ',
      
    },
];

const Timeline = () => {
    return (
       <div className=''>
       <h1 className='text-[3.5rem] text-center font-bold text-white drop-shadow-header -mt-24 pb-14'>Know him</h1>
            <VerticalTimeline>
                {timelineData.map((item, index) => (
                    <VerticalTimelineElement
                        key={index}
                        className={`vertical-timeline-element--${item.type}`}
                        contentStyle={
                            item.type === 'work'
                                ? { background: 'rgb(255, 255, 255)', color: '#000' }
                                : item.type === 'education'
                                    ? { background: 'rgb(255, 255, 255)', color: '#000' }
                                    : {}
                        }
                        contentArrowStyle={
                            item.type !== 'star' ? { borderRight: `7px solid ${item.type === 'work' ? 'rgb(166, 243, 33)' : 'rgb(233, 30, 99)'}` } : {}
                        }
                        date={item.date}
                        iconStyle={{
                            background: item.type === 'work' ? 'rgb(177, 207, 26)' : item.type === 'education' ? 'rgb(233, 30, 99)' : 'rgb(148, 204, 16)',
                            color: '#fff',
                        }}
                        icon={item.icon}
                    >
                        {item.title && <h3 className="vertical-timeline-element-title">{item.title}</h3>}
                        {item.subtitle && <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>}
                        {item.description && <p>{item.description}</p>}
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
            <Divider/>
            </div>
    );
};

export default Timeline;
