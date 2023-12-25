import React from 'react'
import { FaLink } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from './ServicesCard'

const Services = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
        <ServicesCard icons={<FaLink />} title = 'Backend' subTitle = 'Skilled in modern backend tech, I craft secure, high-performance solutions. My focus? Robust systems ensuring top security and efficiency.' />
        <ServicesCard icons={<BiCodeAlt />} title = 'Frontend' subTitle = 'Proficient in modern front-end technologies, I specialize in crafting intuitive and user-friendly interfaces. My expertise lies in creating engaging designs and seamless user experiences, ensuring top-notch frontend solutions that captivate users.'/>
        <ServicesCard icons={<FaLock />} title = 'Security' subTitle = 'Passionate about security, I specialize in implementing robust measures to safeguard digital assets. With a focus on threat analysis and proactive solutions, I ensure resilient security frameworks that protect against potential risks.' />
        <ServicesCard icons={<FaCheck />} title = 'Testing' subTitle = 'Experienced in various testing methodologies, I emphasize ensuring the reliability and excellence of products. I am dedicated to employing comprehensive testing strategies to deliver high-performance solutions with a focus on quality assurance.'/>
    </div>
  )
}

export default Services