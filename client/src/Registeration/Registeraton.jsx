import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FormikControl } from "../ModernWay/FormikControl";

//....
export const Registeraton = () => {
  // radio btn...
  const options = [
    { key: "ABC", value: "ABC_Value" },
    { key: "DEF", value: "DEF_Value" },
  ];

  // inistailstate....
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    ModeOfcontact: "",
    phone: "",
  };

  // onSubmut....
  const onSubmit = (values) => console.log("Form Values -> ", values);

  // form Validation.....
  const validationSchema = Yup.object({
    name: Yup.string().required("Required!"),
    email: Yup.string().email("Invalid format").required("Required!"),
    password: Yup.string().required("Required!"),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref("password"), " "], "Password must match")
      .required("Required!"),
    ModeOfcontact: Yup.string().required("Required!"),
    phone: Yup.string().when("ModeOfcontact", {
      is: "ABC_Value",
      then: Yup.string().required("Required!"),
    }),
  });
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
            type="password"
            name="password"
            label="Password"
            control="input"
          />
          <FormikControl
            type="password"
            name="confirmpassword"
            label="Repeat Password"
            control="input"
          />
          <FormikControl
            type="radio"
            name="ModeOfcontact"
            label="ModeOfcontact"
            control="radio"
            options={options}
          />
          <FormikControl
            type="text"
            name="phone"
            label="Cell No"
            control="input"
          />
          <button type="submit" disabled={!formik.isValid}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};
