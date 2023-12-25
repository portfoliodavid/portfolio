import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Left from './components/home/Left'
import { FaUser, FaEnvelope } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { MdWork, MdOutlineClose } from "react-icons/md";
import About from './components/about/About';
import Resume from './components/resume/Resume';
import Project from './components/projects/Project';
import Contact from './components/contact/Contact';
import SideNav from './components/home/SideNav';
import MouseParticles from "react-mouse-particles"

const Home = () => {
  const ref = useRef();
  const [about, setAbout] = useState(true);
  const [resume, setResume] = useState(false);
  const [project, setProject] = useState(false);
  const [contact, setContact] = useState(false);
  const [sidenav, setSidenav] = useState(false);

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) {
        setSidenav(false);
      }
    })
  })

  return (

    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.5 }} className='w-full lgl:w-[85%] h-full lgl:h-[85%] bg-transparent text-white z-50 flex items-start justify-between p-4 lgl:p-1'>
      <div className='w-16 h-96 bg-transparent hidden lgl:flex flex-col gap-4'>
        <MouseParticles g={1} num={20} color="#F07392" level={10} radius={5} tha={20} life={0.7} cull="removeTracker" />

        <div className='removeTracker w-full h-20 bg-bodyColor rounded-3xl flex justify-center items-center cursor-pointer group'>
          {/* home icons */}
          <div onClick={() => setSidenav(true)} className='eliminate flex flex-col gap-1.5 overflow-hidden'>
            <span className='w-8 h-[2px] bg-textColor inline-block -translate-x-2 group-hover:translate-x-0 transition-transform duration-300 group-hover:bg-designColor'></span>
            <span className='w-8 h-[2px] bg-textColor inline-block  duration-300 group-hover:bg-designColor'></span>
            <span className='w-8 h-[2px] bg-textColor inline-block -translate-x-3.5 group-hover:translate-x-0 transition-transform duration-300 group-hover:bg-designColor'></span>
          </div>
        </div>
        {
          sidenav && <div className="w-full h-screen fixed top-0 left-0 bg-black bg-opacity-50 z-50">
            <div className="w-96 h-full relative">
              <motion.div
                ref={ref}
                initial={{ x: -500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full bg-bodyColor overflow-y-scroll scrollbar-thin scrollbar-thumb-[#646464]">
                <SideNav />
                <span onClick={() => setSidenav(false)}
                  className="absolute top-0 -right-16 w-12 h-12 bg-bodyColor text-2xl text-textColor hover:text-designColor duration-300 cursor-pointer flex items-center justify-center z-50"><MdOutlineClose /></span>
              </motion.div>
            </div>
          </div>
        }
        {/* other ixons*/}
        <div className='removeTracker w-full h-80 bg-bodyColor rounded-3xl py-6 flex flex-col items-center justify-between'>
          <span onClick={() =>
            setAbout(true) &
            setResume(false) &
            setProject(false) &
            setContact(false)
          }
            className='w-full h-6 text-textColor text-x1 flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group' >
            <FaUser /><span className='text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 '>About</span>
          </span>
          <span onClick={() =>
            setAbout(false) &
            setResume(true) &
            setProject(false) &
            setContact(false)
          } className='w-full h-6 text-textColor text-x1 flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group' >
            <IoIosPaper /><span className='text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 '>Resume</span>
          </span>
          <span onClick={() =>
            setAbout(false) &
            setResume(false) &
            setProject(true) &
            setContact(false)
          } className='w-full h-6 text-textColor text-x1 flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group' >
            <MdWork /><span className='text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 '>Project</span>
          </span>
          <span onClick={() =>
            setAbout(false) &
            setResume(false) &
            setProject(false) &
            setContact(true)
          } className='w-full h-6 text-textColor text-x1 flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group' >
            <FaEnvelope /><span className='text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 '>Contact</span>
          </span>
        </div>
      </div>
      <div className="w-full lgl:w-[94%] h-full flex flex-col gap-6 lgl:gap-0 lgl:flex-row items-center">
        {/* ======================== Home Left Start here ============================ */}
        <Left />
        {/* ======================== Home Left End here ============================== */}
        <div className="w-full lgl:w-8/12 h-[95%] bg-bodyColor rounded-2xl flex justify-center items-center">
          {/* ======================== Smaller device content Start ======================== */}
          <div className="w-full h-full lgl:hidden bg-transparent rounded-2xl flex flex-col gap-6">
            <About />
            <Resume />
            <Project />
            <Contact />
          </div>
          {/* ======================== Smaller device content End ========================== */}
          <div className="w-full h-[96%] hidden lgl:flex justify-center overflow-y-scroll scrollbar-thin scrollbar-thumb-[#646464]">
            {about && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <About />
              </motion.div>
            )}

            {resume && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Resume />
              </motion.div>
            )}
            {project && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Project />
              </motion.div>
            )}
            {contact && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Contact />
              </motion.div>
            )}
          </div>
        </div>
      </div>

    </motion.div>

  )
}

export default Home