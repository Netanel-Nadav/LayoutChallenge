import React from 'react'

// Components
import { Navigation } from './Navigation'

// Imgs
import pattern1 from '../assets/img/pattern1.svg'
import pattern2 from '../assets/img/pattern2.svg'


export function Header() {


  return (
    <header className='header flex column main-container'>

      <img src={pattern1} className='pattern1' />

      {/* <Navigation /> */}

      <div className='header-info flex justify-center align-center'>

        <div className='title-wrraper'>
          <h1>Find the best<span> talent</span></h1>
        </div>
        <div className='subtext-container flex column'>
          <div className='line'></div>
          <p>Finding the right people and building high performing teams can be hard. Most companies aren't tapping into the abundance of global talent. We're about to change that.</p>
        </div>
      </div>

      <img src={pattern2} className='pattern2' />

    </header>
  )
}
