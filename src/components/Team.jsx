import React from 'react'


// Components
import { MemberPreview } from './MemberPreview'


// imgs
import pattern5 from '../assets/img/pattern5.svg'
import pattern6 from '../assets/img/pattern6.svg'


export function Team({ ourTeam }) {
  return (
    <section className='team main-container'>
      
      <img src={pattern5} className='pattern5' />

      <div className='wrraper flex column align-center justify-center'>
        <h1>Delivering real results for top companies. Some of our <span>success stories.</span></h1>
        <div className='team-list flex justify-center'>
          {ourTeam && ourTeam.map(member => <MemberPreview member={member} key={member._id} />)}
        </div>
      </div>

      <img src={pattern6} className='pattern6' />

    </section>
  )
}
