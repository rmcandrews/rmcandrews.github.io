import React from 'react';

import Skill from './Skill';

const SkillsCard = () => {

    return (
        <div className="ResumeCard tl mt3 card bg-white cf">
            <Skill colorImage="images/React_Color.svg" 
                grayImage="images/React_Gray.svg"
                name="React"/>
            <Skill colorImage="images/AWS_Color.svg" 
                grayImage="images/AWS_Gray.svg"
                name="AWS"/>
            <Skill colorImage="images/NodeJs_Color.svg" 
                grayImage="images/NodeJs_Gray.svg"
                name="NodeJS"/>
            <Skill colorImage="images/Java_Color.svg" 
                grayImage="images/Java_Gray.svg"
                name="Java"/>
            <Skill colorImage="images/Angular_Color.svg" 
                grayImage="images/Angular_Gray.svg"
                name="Angular"/>
        </div>
    )

}

export default SkillsCard;