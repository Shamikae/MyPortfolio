import React from 'react'
import Hero from "../components/Hero";
import AboutSec from '../components/AboutSec';
import ServiceSec from '../components/ServiceSec';
import ProjectsSec from '../components/ProjectsSec';

export default function Home() {
    return (
        <div>
            <Hero />
            <AboutSec />
            <ServiceSec /> 
            <ProjectsSec />
        </div>
    )
}
