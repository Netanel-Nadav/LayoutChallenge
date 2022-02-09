import React from 'react'

// Components
import { BenefitsList } from './BenefitsList'

// imgs
import chart from '../assets/img/icon-chart.svg'
import cog from '../assets/img/icon-cog.svg'
import person from '../assets/img/icon-person.svg'
import pattern3 from '../assets/img/pattern3.svg'


export function Benefits() {

    const benefits = [
        {
            _id: 1,
            title: 'Experienced Individuals',
            desc: 'Our network is made up of highly experienced professionals who are passionate about what they do.',
            img: person,
        },
        {
            _id: 2,
            title: 'Easy to Implement',
            desc: 'Our processes have been refined over years of implementation meaning our teams always deliver.',
            img: cog,
        },
        {
            _id: 3,
            title: 'Enhanced Productivity',
            desc: 'Our customized platform with in-built analytics helps you manage your distributed teams.',
            img: chart,
        },
    ]

    return (
        <section className='benefits full flex align-center main-container'>
            <div className='container flex'>
                <div className='line-title-container flex column'>
                    <div className='line'></div>
                    <h1><em>Build & manage distributed teams like no one else.</em></h1>
                </div>
                <div className='list-container'>
                    <BenefitsList benefits={benefits} />
                </div>
            </div>
            <img src={pattern3} className='pattern3' />
        </section>
    )
}
