import "./SkillCard.css"
import React from 'react'
import { motion } from "framer-motion";


const SkillCard = ({icon, title}) => {
  return (
    <motion.div className='skill-card' 
    whileHover={{ scale: 1.03 }}
    transition={{ type: "spring", stiffness: 300 }}>
      <img src={icon} alt={title} className='skill-icon' />
      <div className='tooltip'>{title}</div>
    </motion.div>
  )
}

export default SkillCard