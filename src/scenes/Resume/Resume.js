import React from 'react';
import ResumeCard from "./components/ResumeCard/ResumeCard";

const Resume = () => {

    return (
        <div className="Resume pa3 pt4-ns">
            <div className="f4 f3-ns fw3">EXPERIENCE</div>
            <ResumeCard
                colorImage='images/CapitalOne_Color.svg'
                grayImage='images/CapitalOne_Gray.svg'
                company="Capital One"
                title="Software Engineer">
                Develop technology for Capital One’s card business as part of an agile team. Worked on Javascript front end, Java APIs, and cloud infrastructure.
            </ResumeCard>
            <ResumeCard 
                colorImage='images/CloverApps_Color.svg'
                grayImage='images/CloverApps_Gray.svg'
                company="Clover Apps"
                title="Intern">
                Built iOS application from the bottom up for a client of the company.
            </ResumeCard>
        </div>
    )

}

export default Resume;