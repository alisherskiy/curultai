import { useState } from "react";
import Input from "../../utils/input/input";

import { HiArrowRight } from "react-icons/hi";

import { Link } from "react-router-dom";

import "./registration.scss";

import { registration } from '../../action/user';

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="registration">
      <div className="registration__container">
        <div className="registration__title">
          <h3>Create account</h3>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/login">Sign in</Link>
            </span>
          </p>
        </div>

        <div className="form__container">
          <Input
            value={email}
            setValue={setEmail}
            type="text"
            placeholder="E-mail"
          />
          <Input
            value={password}
            setValue={setPassword}
            type="text"
            placeholder="Password"
          />
          <div className="form__btn" onClick={() => registration(email, password)}>
            <div>
              <button>Sign up</button>
            </div>
            <HiArrowRight size={25} color={"#fff"} />
          </div>
          <label>
            <Input type="checkbox" />
            <span className="checkText">
              I have read and agree to the Terms of Service
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Registration;