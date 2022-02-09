import React from 'react'

import { MemberPreview } from './MemberPreview'

export function Team({ourTeam}) {
  return (
    <section className='team main-container'>
        <h1>Delivering real results for top companies. Some of our <span>success stories.</span></h1>
        <div className='team-list flex space-evenly'>
            {ourTeam && ourTeam.map(member => <MemberPreview member={member} key={member._id} />)}
        </div>
    </section>
  )
}
