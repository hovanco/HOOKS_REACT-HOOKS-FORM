import React, { useState, useRef } from "react";
import _ from "lodash/fp";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "./style.scss";

function FormLogin() {
  const {
    register,
    handleSubmit,
    errors,
    watch,
    reset,
    getValues,
    control,
  } = useForm({
    mode: "all",
  });
  const [value, setValues] = useState();

  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isConfirmPasswordShown, setIsConfirmPasswordShown] = useState(false);

  const password = useRef({});
  password.current = watch("password", "");

  const togglePasswordVisibility = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordShown(!isConfirmPasswordShown);
  };

  const onSubmit = async (data) => {
    alert(JSON.stringify({ ...data, phone: value }));
  };
  const onReset = () => {
    setValues("");
    reset("");
  };

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="show-infor">
            <div className="address-icon">
              <h1>
                <i className="fa fa-map-marker" aria-hidden="true"></i> ADDRESS
              </h1>
              <h1>321, Street Name, Country</h1>
            </div>
            <div className="email-icon">
              <h1>
                <i className="fa fa-envelope" aria-hidden="true"></i> EMAIL
              </h1>
              <h1>yourmail@domain.com</h1>
            </div>
          </div>

          <div className="required-infor">
            <div className="register-user">
              <form onSubmit={handleSubmit(onSubmit)}>
                <label>First Name</label>
                <input
                  name="firstName"
                  type="text"
                  placeholder="Rain"
                  ref={register({
                    required: true,
                    maxLength: 20,
                    pattern: /^[A-Za-z]+$/,
                  })}
                />
                {_.get("firstName.type", errors) === "required" && (
                  <p className="p-tag-of-input">This field is required</p>
                )}
                {_.get("firstName.type", errors) === "maxLength" && (
                  <p>First name cannot exceed 20 characters</p>
                )}
                {_.get("firstName.type", errors) === "pattern" && (
                  <p>Alphabetical characters only</p>
                )}

                <label>Last Name</label>
                <input
                  name="lastName"
                  placeholder="Be"
                  type="text"
                  ref={register({
                    required: true,
                    maxLength: 20,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                />
                {_.get("lastName.type", errors) === "required" && (
                  <p className="p-tag-of-input">This field is required</p>
                )}

                {_.get("lastName.type", errors) === "maxLength" && (
                  <p>First name cannot exceed 20 characters</p>
                )}
                {_.get("lastName.type", errors) === "pattern" && (
                  <p>Alphabetical characters only</p>
                )}
                <label>Phone Number</label>
                <PhoneInput
                  international
                  countryCallingCodeEditable={false}
                  defaultCountry="VN"
                  value={value}
                  onChange={setValues}
                  control={control}
                />
                <label>Email</label>
                <input
                  name="email"
                  type="text"
                  placeholder="truongtrungtruc@gmail.com"
                  ref={register({
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                {_.get("email.type", errors) === "required" && (
                  <p>This field is required</p>
                )}
                {_.get("email.type", errors) === "pattern" && (
                  <p>invalid email address</p>
                )}
                <div className="form-row">
                  <label>Password</label>
                  <input
                    aria-label="Enter your password"
                    aria-required="true"
                    placeholder="Password"
                    className="form-text"
                    type={isPasswordShown ? "text" : "password"}
                    name="password"
                    ref={register({
                      required: "Password required",
                      minLength: { value: 8, message: "Too short" },
                    })}
                  />
                  <i
                    className={`fa ${
                      isPasswordShown ? "fa-eye-slash" : "fa-eye"
                    } password-icon`}
                    onClick={togglePasswordVisibility}
                  />
                  {errors.password && (
                    <p style={{ color: "red" }}>{errors.password.message}</p>
                  )}
                </div>

                <div className="form-row">
                  <label>Confirm Password</label>
                  <input
                    aria-label="Enter your password to confirm"
                    aria-required="true"
                    placeholder="Confirm Password"
                    className="form-text"
                    type={isConfirmPasswordShown ? "text" : "password"}
                    name="confirm"
                    ref={register({
                      validate: (value) => {
                        if (value === getValues("password")) {
                          return true;
                        } else {
                          return (
                            <span style={{ color: "red" }}>
                              Password fields don't match.
                            </span>
                          );
                        }
                      },
                      required: "Password required",
                      minLength: { value: 8, message: "Too short" },
                    })}
                  />
                  <i
                    className={`fa ${
                      isConfirmPasswordShown ? "fa-eye-slash" : "fa-eye"
                    } password-icon`}
                    onClick={toggleConfirmPasswordVisibility}
                  />
                  {errors.confirm && (
                    <p style={{ color: "red" }}>{errors.confirm.message}</p>
                  )}
                </div>

                <label>Comment</label>
                <textarea
                  name="age"
                  type="number"
                  placeholder="I am learning react hooks form"
                  ref={register({
                    required: true,
                    maxLength: 20,
                    minLength: 3,
                  })}
                />
                {_.get("age.type", errors) === "required" && (
                  <p className="p-tag-of-textarea">This field is required</p>
                )}
                {_.get("age.type", errors) === "minLength" && (
                  <p className="p-tag-of-textarea">
                    First name cannot exceed 3 characters
                  </p>
                )}
                {_.get("age.type", errors) === "maxLength" && (
                  <p className="p-tag-of-textarea">
                    First name cannot exceed 20 characters
                  </p>
                )}
                <button
                  type="submit"
                  defaultValue="Submit"
                  className="btn-submit"
                >
                  SEND
                </button>

                <button type="button" className="btn-reset" onClick={onReset}>
                  RESET
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormLogin;
