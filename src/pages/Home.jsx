import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import Structure from '../components/Structure';
import Programs from '../components/Programs';
import StrategicPrograms from '../components/StrategicPrograms';
import VolunteerCTA from '../components/VolunteerCTA';
import Donation from '../components/Donation';
import Testimonials from '../components/Testimonials';
import Events from '../components/Events';
import Gallery from '../components/Gallery';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main className="w-full relative bg-bg-light dark:bg-bg-dark">
      {/* Hero section with Indonesian women illustration */}
      <Hero />
      
      {/* Counter animated statistics section */}
      <Stats />
      
      {/* About Section: History, Visi, Misi */}
      <About />
      
      {/* Organization Structure Section */}
      <Structure />
      
      {/* Featured Programs Section with card grid & Radix details modal */}
      <Programs />
      
      {/* Strategic Programs Section 2023-2025 */}
      <StrategicPrograms />
      
      {/* Volunteer Registration CTA to Google Form */}
      <VolunteerCTA />
      
      {/* Donation section with bank info, copied notifications, and QRIS */}
      <Donation />
      
      {/* Testimonials success stories cards */}
      <Testimonials />
      
      {/* Upcoming events calendar agenda cards */}
      <Events />
      
      {/* Responsive masonry photo/gradient activity gallery */}
      <Gallery />
      
      {/* Radix UI Accordion FAQ dropdowns */}
      <FAQ />
      
      {/* Contact details, map vectors, and messaging form */}
      <Contact />
    </main>
  );
}
