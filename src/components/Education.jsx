import { useState } from "react";
import "../styles/education.css";

function Education({ education, setEducation }) {
  const [mode, setMode] = useState("edit");

  function handleChange(e, index) {
    const updatedEducation = education.map((entry, i) => {
      if (i === index) {
        return { ...entry, [e.target.name]: e.target.value };
      }
      return entry;
    });

    setEducation(updatedEducation);
  }

  function addEntry() {
    const newEntry = { school: "", study: "", date: "" };
    setEducation([...education, newEntry]);
  }

  function deleteEntry(index) {
    if (education.length === 1) {
      return;
    }
    const updatedEducation = education.filter((entry, i) => {
      return i !== index;
    });
    setEducation(updatedEducation);
  }

  function renderDisplay() {
    return (
      <>
        {education.map((detail, index) => {
          return (
            <div key={index} className="entry">
              <h3>{detail.school}</h3>
              <p>{detail.study}</p>
              <p>{detail.date}</p>
            </div>
          );
        })}
        <button onClick={() => setMode("edit")}>edit</button>
      </>
    );
  }

  function renderForm() {
    return (
      <>
        {education.map((details, index) => {
          return (
            <div key={index} className="entry">
              <label htmlFor={`School-${index}`}>
                School:
                <input
                  type="text"
                  name="school"
                  id={`School-${index}`}
                  value={details.school}
                  onChange={(e) => handleChange(e, index)}
                />
              </label>
              <label htmlFor={`study-${index}`}>
                study:
                <input
                  type="text"
                  name="study"
                  id={`study-${index}`}
                  value={details.study}
                  onChange={(e) => handleChange(e, index)}
                />
              </label>
              <label htmlFor={`date-${index}`}>
                date:
                <input
                  type="date"
                  name="date"
                  id={`date-${index}`}
                  value={details.date}
                  onChange={(e) => handleChange(e, index)}
                />
              </label>
              <button
                className={education.length === 1 ? "disabled" : ""}
                onClick={() => deleteEntry(index)}
              >
                delete
              </button>
            </div>
          );
        })}
        <button onClick={addEntry}>Add another school</button>
        <button
          className="primary"
          onClick={() => {
            if (hasEmptyFields()) return;
            setMode("display");
          }}
        >
          submit
        </button>
      </>
    );
  }

  function hasEmptyFields() {
    return education.some((entry) => {
      return Object.values(entry).some((value) => value === "");
    });
  }

  return (
    <div className="education">
      <h1>Education</h1>
      {mode === "edit" ? renderForm() : renderDisplay()}
    </div>
  );
}

export default Education;
