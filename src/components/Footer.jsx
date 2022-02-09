import React from 'react'
import { NavLink } from 'react-router-dom'

import fb from '../assets/img/icon-facebook.svg'
import pt from '../assets/img/icon-pinterest.svg'
import tw from '../assets/img/icon-twitter.svg'


export function Footer() {
    return (
        <section className='footer main-container full'>
            <div className='container flex space-between align-center'>
                <div className='wrraper flex'>
                    <div className='logo-and-nav flex column'>
                        <h1>myteam</h1>
                        <div className='links-container flex'>
                            <NavLink to="#">home</NavLink>
                            <NavLink to="#">about</NavLink>
                        </div>
                    </div>

                    <div className='adress'>
                        <p>987  Hillcrest Lane</p>
                        <p>Irvine, CA</p>
                        <p>California 92714</p>
                        <p>Call Us : 949-833-7432</p>
                    </div>
                </div>
                <div className='social flex column space-around'>
                    <div className='icons-container flex'>
                        <img src={fb} className='fb-icon' />
                        <img src={pt} className='pt-icon' />
                        <img src={tw} className='tw-icon' />
                    </div>
                    <p>Copyright 2020. All Rights Reserved</p>
                </div>
            </div>
        </section>
    )
}
