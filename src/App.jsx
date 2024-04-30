import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo/GeneralInfo";
import Education from "./components/Education/Education";

function App() {
  const [generalInfo, setGeneralInfo] = useState({});
  const [education, setEducation] = useState({});

  const handleGeneralInfoUpdate = (info) => {
    setGeneralInfo(info);
  };

  const handleEducationUpdate = (info) => {
    setEducation(info);
  };

  return (
    <div>
      <GeneralInfo onUpdate={handleGeneralInfoUpdate} />
      <Education onUpdate={handleEducationUpdate} />
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
    </div>
  );
}

export default App;
