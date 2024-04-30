import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo/GeneralInfo";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import DisplaySection from "./components/DisplaySection/DisplaySection";

function App() {
  const [generalInfo, setGeneralInfo] = useState({});
  const [education, setEducation] = useState({});
  const [experience, setExperience] = useState({});

  const [editGeneral, setEditGeneral] = useState(false);
  const [editEducation, setEditEducation] = useState(false);
  const [editExperience, setEditExperience] = useState(false);

  const handleGeneralInfoUpdate = (info) => {
    setGeneralInfo(info);
    setEditGeneral(false);
  };

  const handleEducationUpdate = (info) => {
    setEducation(info);
    setEditEducation(false);
  };

  const handleExperienceUpdate = (info) => {
    setExperience(info);
    setEditExperience(false);
  };

  return (
    <div>
      {editGeneral ? (
        <GeneralInfo onUpdate={handleGeneralInfoUpdate} />
      ) : (
        <DisplaySection
          sectionTitle="General Information"
          data={generalInfo}
          onEdit={() => setEditGeneral(true)}
        />
      )}

      {editEducation ? (
        <Education onUpdate={handleEducationUpdate} />
      ) : (
        <DisplaySection
          sectionTitle="Education"
          data={education}
          onEdit={() => setEditEducation(true)}
        />
      )}

      {editExperience ? (
        <Experience onUpdate={handleExperienceUpdate} />
      ) : (
        <DisplaySection
          sectionTitle="Experience"
          data={experience}
          onEdit={() => setEditExperience(true)}
        />
      )}
    </div>
  );
}

export default App;
