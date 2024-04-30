import "/src/styles/displaySection.css";

function formatLabel(label) {
  // Split the label at each uppercase letter and join with a space
  const formattedLabel = label.replace(/([A-Z])/g, " $1").trim();
  // Ensure the first letter is uppercase and the rest are lowercase
  return (
    formattedLabel.charAt(0).toUpperCase() +
    formattedLabel.slice(1).toLowerCase()
  );
}

function DisplaySection({ sectionTitle, data, onEdit }) {
  return (
    <div className="display-section">
      <h2>{sectionTitle}</h2>
      {Object.entries(data).map(([key, value]) => (
        <p key={key}>{`${formatLabel(key)}: ${value}`}</p>
      ))}
      <button onClick={onEdit}>Edit {sectionTitle}</button>
    </div>
  );
}

export default DisplaySection;
