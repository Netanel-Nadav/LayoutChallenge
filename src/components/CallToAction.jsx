import React from 'react'

// imgs
import pattern4 from '../assets/img/pattern4.svg';

export function CallToAction() {
    return (
        <section className='call-to-action main-container full'>
            <div className='container flex align-center space-around'>
                <h1>Ready to get started?</h1>
                <button className='contact-btn'>contact us</button>
            </div>
            <img src={pattern4} className='pattern4' />
        </section>
    )
}
