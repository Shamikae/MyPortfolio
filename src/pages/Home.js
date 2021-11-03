import React from 'react';
import AboutSec from '../components/AboutSec';
import ServiceSec from '../components/ServiceSec';
import ProjectsSec from '../components/ProjectsSec';
import TestSec from '../components/TestSec';
import ContactBanner from '../components/ContactBanner';
import Hero from "../components/Hero";

export default function Home() {
    return (
        <div>
            <Hero />
            <AboutSec />
            <ServiceSec /> 
            <ProjectsSec />
            <TestSec />
            <ContactBanner />
        </div>
    )
}
