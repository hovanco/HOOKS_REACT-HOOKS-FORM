import React, { useState, useRef } from "react";
import _ from "lodash/fp";
import { useForm } from "react-hook-form";
import "react-phone-number-input/style.css";
import "./style.scss";

function FormLogin() {
  const { register, handleSubmit, errors, watch, reset, getValues } = useForm({
    mode: "all",
  });

  const [value, setValues] = useState();

  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = async (data) => {
    alert(JSON.stringify({ ...data, phone: value }));
  };
  console.log("value", value);

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

                <div className="form-row">
                  <input
                    aria-label="Enter your password"
                    aria-required="true"
                    placeholder="Password"
                    className="form-text"
                    type="password"
                    name="password"
                    ref={register({
                      required: "Password required",
                      minLength: { value: 8, message: "Too short" },
                    })}
                  />
                  {errors.password && (
                    <p style={{ color: "red" }}>{errors.password.message}</p>
                  )}
                </div>

                <div className="form-row">
                  <input
                    aria-label="Enter your password to confirm"
                    aria-required="true"
                    placeholder="Confirm Password"
                    className="form-text"
                    type="password"
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
                  {errors.confirm && (
                    <p style={{ color: "red" }}>{errors.confirm.message}</p>
                  )}
                </div>
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
