import { useState } from "react";
import "../styles/experience.css";

function Experience() {
  const [experience, setExperience] = useState([
    {
      companyName: "",
      title: "",
      mainResponsibilities: "",
      dateFrom: "",
      dateUntil: "",
    },
  ]);
  const [mode, setMode] = useState("edit");

  function handleChange(e, index) {
    const updatedWork = experience.map((entry, i) => {
      if (i === index) {
        return { ...entry, [e.target.name]: e.target.value };
      }
      return entry;
    });

    setExperience(updatedWork);
  }

  function addNew() {
    const newExperience = {
      companyName: "",
      title: "",
      mainResponsibilities: "",
      dateFrom: "",
      dateUntil: "",
    };

    setExperience([...experience, newExperience]);
  }

  function renderForm() {
    return (
      <>
        {experience.map((work, index) => {
          return (
            <div key={index}>
              <label htmlFor={`name-${index}`}>
                Company Name:
                <input
                  type="text"
                  name="companyName"
                  id={`name-${index}`}
                  value={work.companyName}
                  onChange={(e) => {
                    handleChange(e, index);
                  }}
                />
              </label>
              <label htmlFor={`title-${index}`}>
                Title:
                <input
                  type="text"
                  name="title"
                  id={`title-${index}`}
                  value={work.title}
                  onChange={(e) => {
                    handleChange(e, index);
                  }}
                />
              </label>
              <label htmlFor={`responsibilities-${index}`}>
                Main Responsibilities:
                <input
                  type="text"
                  name="mainResponsibilities"
                  id={`responsibilities-${index}`}
                  value={work.mainResponsibilities}
                  onChange={(e) => {
                    handleChange(e, index);
                  }}
                />
              </label>
              <label htmlFor={`from-${index}`}>
                Date From:
                <input
                  type="date"
                  name="dateFrom"
                  id={`from-${index}`}
                  value={work.dateFrom}
                  onChange={(e) => {
                    handleChange(e, index);
                  }}
                />
              </label>
              <label htmlFor={`until-${index}`}>
                Date Until:
                <input
                  type="date"
                  name="dateUntil"
                  id={`until-${index}`}
                  value={work.dateUntil}
                  onChange={(e) => {
                    handleChange(e, index);
                  }}
                />
              </label>
            </div>
          );
        })}
        <button onClick={addNew}>Add another experience</button>
        <button onClick={() => setMode("display")}>submit</button>
      </>
    );
  }

  function renderDisplay() {
    return (
      <>
        {experience.map((work, index) => {
          return (
            <div key={index}>
              <h3>{work.companyName}</h3>
              <h5>{work.title}</h5>
              <p>{work.mainResponsibilities}</p>
              <p>{work.dateFrom}</p>
              <p>{work.dateUntil}</p>
            </div>
          );
        })}
        <button onClick={() => setMode("edit")}>edit</button>
      </>
    );
  }

  return (
    <div>
      <h1>Work Experience</h1>
      {mode === "edit" ? renderForm() : renderDisplay()}
    </div>
  );
}

export default Experience;
