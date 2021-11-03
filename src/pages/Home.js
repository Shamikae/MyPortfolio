import React from 'react'
import Hero from "../components/Hero";
import AboutSec from '../components/AboutSec';
import ServiceSec from '../components/ServiceSec';
import ProjectsSec from '../components/ProjectsSec';
import TestSec from '../components/TestSec';

export default function Home() {
    return (
        <div>
            <Hero />
            <AboutSec />
            <ServiceSec /> 
            <ProjectsSec />
            <TestSec />
        </div>
    )
}
