import React from 'react'
import {
    workImgOne,
    workImgTwo,
    workImgThree,
    workImgFive,
    workImgSix,
    workImgEight

} from "../../assets";
import Title from '../home/Title';
import ProjectCard from './ProjectCard';

const Project = () => {
    return (
        <div>
            <Title title="My" subTitle="Projects" />
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
                <div className="px-6">
                    <a href='https://github.com/viddarepos/progreso' target='_blank'>
                        <ProjectCard
                            title="Progreso"
                            category="Internships Management System"
                            image={workImgThree} />
                    </a>
                    <a href='https://github.com/viddarepos/rushhour' target='_blank'>
                        <ProjectCard
                            title="Rushhour"
                            category="Appointment
                            Scheduling Software"
                            image={workImgFive}
                        /></a>
                    <a href='https://github.com/viddarepos/github-app' target='_blank'>
                        <ProjectCard
                            title="Trendalyzer"
                            category="Github App"
                            image={workImgTwo}
                        />
                    </a>
                </div>
                <div className="px-6">
                    <a href='https://github.com/viddarepos/socialbook' target='_blank'>
                        <ProjectCard
                            title="Socialbook"
                            category="Social Network"
                            image={workImgOne}
                        />
                    </a>
                    <a href='https://github.com/viddarepos/graphql' target='_blank'>
                        <ProjectCard
                            title="GraphQL Session"
                            category="Instructional session"
                            image={workImgSix}
                        />
                    </a>

                    <a href='https://github.com/viddarepos/chatbot' target='_blank'>
                        <ProjectCard
                            title="Ai Chatbot"
                            category="API"
                            image={workImgEight}
                        />
                    </a>
                </div>
            </div>
        </div >

    )
}

export default Project