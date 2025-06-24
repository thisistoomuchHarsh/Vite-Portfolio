import "./SkillCard.css"
import React from 'react'

const SkillCard = ({icon, title}) => {
  return (
    <div className='skill-card'>
      <img src={icon} alt={title} className='skill-icon' />
      <div className='tooltip'>{title}</div>
    </div>
  )
}

export default SkillCard