import React from 'react';

import Skill from '../../../../components/Skill/Skill';

const SkillsCard = () => {

    return (
        <div className="ResumeCard tl mt3 card bg-white cf mb4 pb3">
            <Skill className="fl w-third w-20-ns mt3"
                name="React"/>
            <Skill className="fl w-third w-20-ns mt3"
                name="AWS"/>
            <Skill className="fl w-third w-20-ns mt3"
                name="NodeJS"/>
            <Skill className="fl w-third w-20-ns mt3"
                name="Java"/>
            <Skill className="fl w-third w-20-ns mt3"
                name="Angular"/>
        </div>
    )

}

export default SkillsCard;