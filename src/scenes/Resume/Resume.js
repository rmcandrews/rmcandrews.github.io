import React from 'react';
import ResumeCard from "./components/ResumeCard/ResumeCard";
import capitalOneLogo from '../../images/CapitalOneLogo.svg';
import cloverAppsLogo from '../../images/CloverAppsLogo.svg';

const Resume = () => {

    return (
        <div className="Resume pa3 pt4-ns">
            <div className="f4 f3-ns fw3">EXPERIENCE</div>
            <ResumeCard 
                svg={capitalOneLogo}
                iconFill="red"
                company="Capital One"
                title="Software Engineer">
                Develop technology for Capital One’s card business as part of an agile team. Worked on Javascript front end, Java APIs, and cloud infrastructure.
            </ResumeCard>
            <ResumeCard 
                svg={cloverAppsLogo}
                iconFill="green"
                company="Clover Apps"
                title="Intern">
                Built iOS application from the bottom up for a client of the company.
            </ResumeCard>
        </div>
    )

}

export default Resume;