import React from 'react'
import { BsTrophyFill } from "react-icons/bs";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import { RiTeamFill } from "react-icons/ri";
import Funcard from './Funcard'

const FunFact = () => {
    return (
        <div className='px-0 grid grid-cols-2 md:grid-cols-4 pb-10'>
            <Funcard icon={<BsTrophyFill />} des='Hackathon Winner' />
            <Funcard icon={<SiAntdesign />} des='Numerous Projects' />
            <Funcard icon={<BiCodeAlt />} des=' Hours of Coding' />
            <Funcard icon={<RiTeamFill />} des='Collaborative Developer' />
        </div>
    )
}

export default FunFact