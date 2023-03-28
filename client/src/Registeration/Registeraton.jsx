import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FormikControl } from "../ModernWay/FormikControl";

//....
export const Registeraton = () => {
  // radio btn...
  const options = [
    { key: "1 - ", value: "Male" },
    { key: "2 - ", value: "Femail" },
    { key: "3 - ", value: "Other" },
  ];

  // inistailstate....
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    Gender: "",
    phone: "",
  };

  // onSubmut....
  const onSubmit = (values) => console.log("Form Values -> ", values);

  // form Validation.....
  const validationSchema = Yup.object({
    name: Yup.string().required("Required!"),
    email: Yup.string().email("Invalid format").required("Required!"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref("password"), " "], "Password must match")
      .required("Required!"),
    Gender: Yup.string().required("Required!"),
    phone: Yup.number("Enter Number").required("Required"),
  });

  ///......
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl type="text" name="name" label="Name" control="input" />
          <FormikControl
            type="email"
            name="email"
            label="Email"
            control="input"
          />
          <FormikControl
            autoomplete="on"
            type="password"
            name="password"
            label="Password"
            control="input"
          />
          <FormikControl
            autoComplete="on"
            type="password"
            name="confirmpassword"
            label="Repeat Password"
            control="input"
          />
          <FormikControl
            control="radio"
            label="Gender"
            name="Gender"
            options={options}
          />
          <FormikControl
            control="input"
            type="text"
            name="phone"
            label="phoneNo"
          />
          <button type="submit" disabled={!formik.isValid}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};
