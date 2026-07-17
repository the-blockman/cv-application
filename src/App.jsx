import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import { useState } from "react";

function App() {
  const [education, setEducation] = useState([
    { school: "", study: "", date: "" },
  ]);
  const [experience, setExperience] = useState([
    {
      companyName: "",
      title: "",
      mainResponsibilities: "",
      dateFrom: "",
      dateUntil: "",
    },
  ]);

  return (
    <>
      <GeneralInfo />
      <Education education={education} setEducation={setEducation} />
      <Experience experience={experience} setExperience={setExperience} />
    </>
  );
}

export default App;
