import React from 'react'
import "./SkillCard.css"

const SkillCard = ({icon, title}) => {
  return (
    <div className='skill-card'>
      <img src={icon} alt={title} className='skill-icon' />
      <div className='tooltip'>{title}</div>
    </div>
  )
}

export default SkillCard