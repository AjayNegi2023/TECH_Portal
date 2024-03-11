import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo, FormRow, Alert } from "../../components";
import { useAppContext } from "../../context/appContext";
import Wrapper, { LogoWrapper } from "./Register.styles";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);

  const { user, isLoading, showAlert, displayAlert, registerUser, loginUser } =
    useAppContext();

  const toggleMember = () => {
    setValues((prevValue) => {
      return { ...values, isMember: !prevValue.isMember };
    });
  };

  const onHandleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }
    const currentUser = { name, email, password };
    if (isMember) {
      loginUser(currentUser);
    } else {
      registerUser(currentUser);
    }
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/"); 
      }, 3000);
    }
  }, [user, navigate]);
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <LogoWrapper> 
          <Logo />
        </LogoWrapper>
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {showAlert && <Alert />}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            labelText="name"
            value={values.name}
            handleChange={onHandleChange}
          />
        )}
        <FormRow
          type="email"
          name="email"
          labelText="email"
          values={values.email}
          handleChange={onHandleChange}
        />
        <FormRow
          type="password"
          name="password"
          labelText="password"
          values={values.password}
          handleChange={onHandleChange}
        />
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          submit
        </button>

        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
