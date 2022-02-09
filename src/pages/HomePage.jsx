import React from 'react';

// Components
import { Benefits } from '../components/Benefits';
import { Header } from '../components/Header';
import { Team } from '../components/Team';



// imgs
import kady from '../assets/img/avatar-kady.jpg'
import aiysha from '../assets/img/avatar-aiysha.jpg'
import arthur from '../assets/img/avatar-arthur.jpg'
import quotes from '../assets/img/icon-quotes.svg'
import { CallToAction } from '../components/CallToAction';
import { Footer } from '../components/Footer';


export function HomePage() {

  const ourTeam = [
    {
      _id: 1,
      desc: ' “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”',
      name: 'Kady Baker',
      title: 'Product Manager at Bookmark',
      img: kady,
      quotes,
    },
    {
      _id: 2,
      desc: '“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”',
      name: 'Aiysha Reese',
      title: 'Founder of Manage',
      img: aiysha,
      quotes
    },
    {
      _id: 3,
      desc: '“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”',
      name: 'Arthur Clarke',
      title: 'Co-founder of MyPhysio',
      img: arthur,
      quotes
    },

  ]

  return (
      <section className='home full'>
          <Header />
          <Benefits />
          <Team  ourTeam={ourTeam}/>
          <CallToAction />
          <Footer />
      </section>
  );
}
