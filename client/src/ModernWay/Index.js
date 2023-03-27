import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { FormikControl } from "./FormikControl";
export const Index = () => {
  const dropDown = [
    { key: "Select an option", value: " " },
    { key: "1 - ", value: "Facebook" },
    { key: "2 - ", value: "Twitter" },
    { key: "3 - ", value: "GitHub" },
  ];
  const chechBoxOptions = [
    { key: "1 ", value: "Facebook" },
    { key: "2 ", value: "Twitter" },
    { key: "3 ", value: "GitHub" },
  ];
  // instial state....
  const initialValues = {
    email: " ",
    textarea: " ",
    select: " ",
    radioOption: " ",
    checkOption: [],
  };

  // onSubmit post data...
  const onSubmit = (values) => {
    console.log(" Form Values .... ", values);
  };

  // validtion on click.....
  const validationSchema = Yup.object({
    email: Yup.string("Invalid email format").required("Required!"),
    textarea: Yup.string().required("Required!"),
    select: Yup.string().required("Required!"),
    radioOption: Yup.string().required("Required!"),
    checkOption: Yup.array().required("Required!"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control="input"
            type="email"
            name="email"
            label="Email"
          />
          <FormikControl control="textarea" name="textarea" label="textarea" />
          <FormikControl
            control="select"
            label="Select a social App"
            name="select"
            options={dropDown}
          />
          <FormikControl
            control="radio"
            label="Pick one option"
            name="radioOption"
            options={dropDown}
          />
          <FormikControl
            control="checkbox"
            label="Checkbox topics"
            name="checkOption"
            options={chechBoxOptions}
          />

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};
