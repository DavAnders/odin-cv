import { useState } from "react";

function Education({ onUpdate }) {
  const [schoolName, setSchoolName] = useState("");
  const [title, setTitle] = useState("");
  const [studyPeriod, setStudyPeriod] = useState("");
  const handleSubmit = () => {
    const info = { schoolName, title, studyPeriod };
    onUpdate(info);
  };
  return (
    <div>
      <input
        type="text"
        value={schoolName}
        onChange={(e) => setSchoolName(e.target.value)}
        placeholder="School Name"
      />
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title of Study"
      />
      <input
        type="text"
        value={studyPeriod}
        onChange={(e) => setStudyPeriod(e.target.value)}
        placeholder="Date of Study"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Education;
