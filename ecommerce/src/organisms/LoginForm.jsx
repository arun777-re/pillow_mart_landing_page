import React, { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import Dropzone from "react-dropzone";

const initialValuesForRegister = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  userPicture: null,
};

const initialValuesForLogin = {
  email: "",
  password: "",
};

const registerSchema = yup.object().shape({
  firstName: yup.
  string().
  required("firstName required"),
  lastName: yup.string(),
  userPicture: yup.string().notRequired(),
  email: yup
    .string()
    .email("Invalid Email address")
    .required("Email address required"),
  password: yup
    .string()
    .min(6, "password must be 6 chars")
    .max(10, "password must be not greater than 10")
    .required("Password required"),
});

const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid Email address")
    .required("Email address required"),
  password: yup
    .string()
    .min(6, "password must be 6 chars")
    .max(10, "password must be not greater than 10")
    .required("Password required"),
});

const LoginForm = () => {
  const [page, setPage] = useState("register");
  const isLogin = page === "login";
  const isRegister = page === "register";

  //  fetch register api
  const register = async (values, onSubmitProps) => {
    const formData = new FormData();
    if (values.firstName) formData.append("firstName", values.firstName);
    if (values.lastName) formData.append("lastName", values.lastName);
    if (values.userPicture) formData.append("userPicture", values.userPicture);
    if (values.email) formData.append("email", values.email);
    if (values.password) formData.append("password", values.password);

    const fetchApi = await fetch("http://localhost:5000/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: formData,
    });

    const response = fetchApi.json();
    console.log(response);
  };

  // fetch login api

  const handleOnSubmit = async () => {};

  return (
    <Formik
      initialValues={isLogin ? initialValuesForLogin : initialValuesForRegister}
      validationSchema={isRegister ? registerSchema : LoginSchema}
      onSubmit={handleOnSubmit}
    >
      {({
        errors,
        values,
        touched,
        handleSubmit,
        handleBlur,
        onSubmitProps,
        handleChange,
        setFieldValue,
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="login-form">
            {isRegister && (
              <>
                <input
                  type="text"
                  placeholder="FirstName"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.firstName && errors.firstName && (
                  <div>{errors.firstName}</div>
                )}

                <input
                  type="text"
                  placeholder="LastName"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.lastName && errors.lastName && (
                  <div>{errors.lastName}</div>
                )}
                <div className="dropzone">
                  <Dropzone
                    onDrop={(acceptedFiles) =>
                      setFieldValue("userPicture", acceptedFiles[0])
                    }
                  >
                    {({ getInputProps, getRootProps }) => (
                      <div {...getRootProps()}>
                        <input type="file" {...getInputProps()} />
                        {!values.userPicture ? (
                          <p>Drop/select file</p>
                        ) : (
                          values.userPicture.name
                        )}
                      </div>
                    )}
                  </Dropzone>
                </div>
              </>
            )}
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.email && errors.email && <div>{errors.email}</div>}

              <input
                type="password"
                id="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.password && errors.password && (
                <div>{errors.password}</div>
              )}
            <button type="submit">{isLogin ? "Login" : "Register"}</button>
            <p
              onClick={() =>
                setPage((prev) => (prev === "login" ? "register" : "login"))
              }
            >
                {
                    page === "login" ? "Donot have an account? SignUp" :
                    "Already have an account? Login"

                }
            </p>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
