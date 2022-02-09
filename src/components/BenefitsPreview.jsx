import React from 'react'

export function BenefitsPreview({benefit}) {
    const {img, title, desc} = benefit
  return (
    <section className='benefit-preview'>
        <div className='container flex align-center'>
            <div className='img-container'>
                <img src={img} />
            </div>
            <div className='info flex column'>
                <h1 className='title'>{title}</h1>
                <p>{desc}</p>
            </div>
        </div>
    </section>
  )
}
