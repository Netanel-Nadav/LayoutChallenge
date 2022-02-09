import React from 'react'

// Components
import { BenefitsPreview } from './BenefitsPreview'

export function BenefitsList({benefits}) {
  return (
    <section className='benefits-list flex column'>
        {benefits && benefits.map(benefit => <BenefitsPreview key={benefit._id} benefit={benefit} />)}
    </section>
  )
}
