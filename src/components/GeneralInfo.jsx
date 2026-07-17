import { useState } from "react";
import "../styles/general.css";

function GeneralInfo() {
  const [generalInfo, setGeneralInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
  });
  const [mode, setMode] = useState("edit");

  function handleChange(e) {
    setGeneralInfo({ ...generalInfo, [e.target.name]: e.target.value });
  }

  function renderForm() {
    return (
      <>
        <label htmlFor="name">
          Full name:
          <input
            type="text"
            name="fullName"
            id="name"
            value={generalInfo.fullName}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            id="email"
            value={generalInfo.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="phone">
          phone number:
          <input
            type="tel"
            name="phone"
            id="phone"
            value={generalInfo.phone}
            onChange={handleChange}
          />
        </label>
        <button
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

  function renderDisplay() {
    return (
      <>
        <p>{generalInfo.fullName}</p>
        <p>{generalInfo.email}</p>
        <p>{generalInfo.phone}</p>
        <button
          onClick={() => {
            setMode("edit");
          }}
        >
          edit
        </button>
      </>
    );
  }

  function hasEmptyFields() {
    return Object.values(generalInfo).some((value) => value === "");
  }

  return (
    <div className="general-info">
      <h1>General Info</h1>
      {mode === "edit" ? renderForm() : renderDisplay()}
    </div>
  );
}

export default GeneralInfo;
