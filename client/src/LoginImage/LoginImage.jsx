import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FormikControl } from "../ModernWay/FormikControl";

//....
export const LoginImage = () => {
  // inistailstate....
  const initialValues = {
    email: "",
    password: "",
    logo: "",
  };

  // onSubmut....
  const onSubmit = (values) => console.log("Form Values -> ", values);

  // form Validation.....
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid format").required("Required!"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  ///......
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <FormikControl control="file" />
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

            <button type="submit" disabled={!formik.isValid}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};
