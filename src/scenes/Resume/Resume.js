import React from 'react';
import ExperienceCard from "./components/ExperienceCard/ExperienceCard";
import SkillsCard from "./components/SkillsCard/SkillsCard";

const Resume = () => {

    return (
        <div className="Resume pa3 pt4-ns">
            <div className="f4 f3-ns fw3">SKILLS</div>
            <SkillsCard/>
            <div className="f4 f3-ns fw3">EXPERIENCE</div>
            <ExperienceCard
                image='CapitalOne'
                company="Capital One"
                title="Software Engineer">
                Develop technology for Capital One’s card business as part of an agile team. Worked on Javascript front end, Java APIs, and cloud infrastructure.
            </ExperienceCard>
            <ExperienceCard 
                image='CloverApps'
                company="Clover Apps"
                title="Intern">
                Built iOS application from the bottom up for a client of the company.
            </ExperienceCard>
        </div>
    )

}

export default Resume;