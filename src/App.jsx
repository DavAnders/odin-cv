import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo/GeneralInfo";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";

function App() {
  const [generalInfo, setGeneralInfo] = useState({});
  const [education, setEducation] = useState({});
  const [experience, setExperience] = useState({});

  const handleGeneralInfoUpdate = (info) => {
    setGeneralInfo(info);
  };

  const handleEducationUpdate = (info) => {
    setEducation(info);
  };

  const handleExperienceUpdate = (info) => {
    setExperience(info);
  };

  return (
    <div>
      <GeneralInfo onUpdate={handleGeneralInfoUpdate} />
      <Education onUpdate={handleEducationUpdate} />
      <Experience onUpdate={handleExperienceUpdate} />
      <div>
        <h2>General Information</h2>
        <p>Name: {generalInfo.name}</p>
        <p>Email: {generalInfo.email}</p>
        <p>Phone: {generalInfo.phone}</p>
      </div>
      <div>
        <h2>Education</h2>
        <p>School: {education.schoolName}</p>
        <p>Title: {education.title}</p>
        <p>Date of Study: {education.studyPeriod}</p>
      </div>
      <div>
        <h2>Experience</h2>
        <p>Company Name: {experience.companyName}</p>
        <p>Position Title: {experience.positionTitle}</p>
        <p>Responsibilties: {experience.responsibilities}</p>
        <p>Dates Employed: {experience.periodEmployed}</p>
      </div>
    </div>
  );
}

export default App;
