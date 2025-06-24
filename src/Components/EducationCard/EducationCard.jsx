import React from 'react'
import "./EducationCard.css"

const EducationCard = ({duration, education, institution}) => {
  return (
    <div className='education-card'>
        <h5>
            {duration}
        </h5>
        <h3>
            {education}
        </h3>
        <p>{institution}</p>
    </div>
  )
}

export default EducationCard