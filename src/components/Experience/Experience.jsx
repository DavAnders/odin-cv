import { useState } from "react";
import "/src/styles/experience.css";

function Experience({ onUpdate }) {
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [periodEmployed, setPeriodEmployed] = useState("");

  const handleSubmit = () => {
    const info = {
      companyName,
      positionTitle,
      responsibilities,
      periodEmployed,
    };
    onUpdate(info);
  };

  return (
    <div>
      <input
        type="text"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        placeholder="Company Name"
      />
      <input
        type="text"
        value={positionTitle}
        onChange={(e) => setPositionTitle(e.target.value)}
        placeholder="Position Title"
      />
      <input
        type="text"
        value={responsibilities}
        onChange={(e) => setResponsibilities(e.target.value)}
        placeholder="Responsibilities"
      />
      <input
        type="text"
        value={periodEmployed}
        onChange={(e) => setPeriodEmployed(e.target.value)}
        placeholder="Period of Employment"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Experience;
