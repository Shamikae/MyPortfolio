import React from 'react';
import AboutSec from '../components/AboutSec';
import ServiceSec from '../components/ServiceSec';
import ProjectsSec from '../components/ProjectsSec';
import RefSec from '../components/RefSec';
import ContactBanner from '../components/ContactBanner';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSec />
      <ServiceSec />
      <ProjectsSec />
      <RefSec />
      <ContactBanner />
    </div>
  );
}
