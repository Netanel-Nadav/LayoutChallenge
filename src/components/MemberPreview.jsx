import React from 'react'

export function MemberPreview({ member }) {
    const { img, desc, name, title, quotes } = member
    return (
        <div className='member-preview flex column align-center'>
            <img src={quotes} className='qoutes-img'/>
            <p>{desc}</p>
            <div className='info-container flex column align-center'>
                <h2>{name}</h2>
                <small><em>{title}</em></small>
            </div>
            <div className='img-container'>
                <img src={img} />
            </div>
        </div>
    )
}
