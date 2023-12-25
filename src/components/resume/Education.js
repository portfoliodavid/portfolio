import React from 'react'
import { MdWork } from 'react-icons/md'
import { GiGraduateCap } from 'react-icons/gi'
import ResumeTitle from './ResumeTitle';
import ResumeCard from './ResumeCard';

const Education = () => {
    return (
        <div className='w-full grid grid-cols-9 px-6'>
            <div className='col-span-9 md:col-span-4'>
                <ResumeTitle title='Experience' icon={<MdWork />} />
                <ResumeCard
                    badge="2019-2021"
                    title="Web Developer"
                    subTitle="Fiverr"
                    des="With over a year of experience, I've provided services in various web applications and full-stack development. I've focused on crafting functional and user-friendly web solutions, leveraging my skills in both front-end and back-end technologies. My attention to detail and ongoing skill development have enabled me to deliver high-quality products that meet client needs."
                />
                <ResumeCard
                    badge="2022-2023"
                    title="Backend Developer"
                    subTitle="Prime Holding JSC"
                    des="Experienced as a backend developer for two diverse applications, actively contributing to their development. Played a pivotal role in crafting and implementing innovative solutions within a collaborative team environment. Additionally, served as a valuable resource within the team by effectively communicating and elucidating the intricacies of the technology to colleagues, facilitating a better understanding of the systems within the company."
                />
            </div>
            <div className='h-full w-full hidden lgl:flex justify-center items-center'>
                <span className='w-[1px] h-full bg-zinc-800 inline-flex'></span>
            </div>
            <div className='col-span-9 md:col-span-4'>
                <ResumeTitle title="Education" icon={<GiGraduateCap />} />
                <ResumeCard
                    badge="2017 - 2019"
                    title="Udemy"
                    subTitle="Learning Platform"
                    des="I've pursued learning across various courses dedicated to frontend and backend technologies, enhancing my proficiency in both areas of development."
                />
                <ResumeCard
                    badge=""
                    title="Metropolitan University - FIT"
                    subTitle="Software Engineering"
                    des="At university, I specialize in software engineering, currently in my final year, focusing on honing skills in this domain. Additionally, I've been actively engaged in practical projects to complement theoretical and practical knowledge."
                />
                <ResumeCard
                    badge="2021-2022"
                    title="Mentroship"
                    subTitle="Serbia"
                    des="Under experienced mentors, I mastered coding intricacies, applied them practically, and stayed current with industry trends, propelling my programming skills forward."
                />
            </div>
        </div>
    )
}

export default Education