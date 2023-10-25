import React, { useState, useEffect } from "react";
import { useData } from "../../context";
import "./registrationform.css";
const RegistrationForm = () => {
  const xyz = "outline";
  const { data, setData,setIsRegistrationForm } = useData();
  const initialValues = { name: "", email: "", number: "", bio: "" };
  const [formValues, setFormValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
    // console.log(formValues)
  };

  const validate = (formValues) => {
    const errors = { name: "", number: "", bio: "", email: "", duplicate: "" };
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const regexPhn = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
    if (!formValues.name) {
      errors.name = "We need your Name !!";
    }
    if (!formValues.number) {
      errors.number = "Contact details are required !";
    } else if (!regexPhn.test(formValues.number)) {
      errors.number = "Invalid Number format";
    }
    if (!formValues.bio) {
      errors.bio = "Bio is required !";
    }
    if (!formValues.email) {
      errors.email = "e-mail is required";
    } else if (!regex.test(formValues.email)) {
      errors.email = "Invalid email format";
    }
    if (data.filter((user) => user.number === formValues.number).length !== 0) {
      errors.duplicate = "Number already registered";
    }

    return errors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(formValues));

    setIsSubmit(true);
  };

  useEffect(() => {
    if (
      errors?.name === "" &&
      errors?.number === "" &&
      errors?.bio === "" &&
      errors?.email === "" &&
      errors?.duplicate === "" &&
      isSubmit
    ) {
      setData([...data, formValues]);
      localStorage.setItem(
        "regUsers",
        JSON.stringify({ participants: [...data, formValues] })
      );
      setFormValues({ name: "", number: "", bio: "", email: "" });
    }
  }, [errors]);

  return (
    <div className="registration-form-bg">
      <div className="registration-form" onClick={(e)=>e.stopPropagation()}>
        <div className="right-align-close">
          <div className="close-btn" onClick={()=>setIsRegistrationForm(false)}>X</div>
        </div>
        <h3 className="heading">Registration Details:</h3>

        <form id="reg-form" onSubmit={handleSubmit}>
          <div className="input name">
            <div className={`input-container ${xyz}`}>
              <label htmlFor="name" className="screen-reader-only">
                Name:
              </label>
              <input
                id="name"
                type="text"
                value={formValues.name}
                placeholder="Your Name..."
                onChange={handleChange}
              />
            </div>
            <p className="error-message">{errors.name}</p>
          </div>
          <div className="input name">
            <div className={`input-container ${xyz}`}>
              <label htmlFor="email" className="screen-reader-only">
                E-mail:
              </label>
              <input
                id="email"
                type="email"
                value={formValues.email}
                placeholder="Your e-mail..."
                onChange={handleChange}
              />
            </div>
            <p className="error-message">{errors.email}</p>
          </div>
          <div className="input number">
            <div className={`input-container ${xyz}`}>
              <label htmlFor="number" className="screen-reader-only">
                Number:
              </label>
              <input
                id="number"
                type="number"
                value={formValues.number}
                placeholder="Your number..."
                onChange={handleChange}
              />
            </div>
            <p className="error-message">{errors.number}</p>
          </div>
          <div className="input bio ">
            <div className={`input-container ${xyz}`}>
              <label htmlFor="bio" className="screen-reader-only">
                Bio:
              </label>
              <input
                id="bio"
                type="text"
                value={formValues.bio}
                placeholder="A little about yourself..."
                onChange={handleChange}
              />
            </div>
            <p className="error-message">{errors.bio}</p>
            <p className="error-message">{errors.duplicate}</p>
          </div>

          <div className="right-align">
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
