import React from 'react'

const AboutMe = () => {
  return (
    <div className='flex flex-col md:flex-row pb-6'>
      <div className='w-full md:w-1/2 text-zinc-400 p-6 borderRight flex items-center'>
        <div className='py-1'>
          <h2 className="font-semibold mb-1">Hello! I'm David,</h2>
          <p className="text-base leading-6 ">
            a tech enthusiast with a strong focus on backend development complemented by a proficient understanding of frontend technologies. I excel in crafting seamless digital solutions and thrive on tackling intricate challenges through clean, efficient code. I'm eager to leverage my skills towards impactful projects and collaborate with passionate teams.
          </p>
        </div>
      </div>
      <div className='w-full md:w-1/2 p-6'>
        <ul className='flex flex-col gap-1'>
          <li className='aboutRightLi'>
            <span className='aboutRightLiSpan' >Date of Birth</span>1/12/1999
          </li>
          <li className='aboutRightLi'>
            <span className='aboutRightLiSpan' >Phone</span>+381 60 6007092
          </li>
          <li className='aboutRightLi'>
            <span className='aboutRightLiSpan' >Location</span> Serbia, Nis
          </li>
          <li className='aboutRightLi'>
            <span className='aboutRightLiSpan' >Email</span>viddadev@gmail.com
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AboutMe