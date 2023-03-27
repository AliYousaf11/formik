import React from "react";
import * as Yup from "yup";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from "formik";

import { Texterror } from "./Texterror";
// instial state....
const initialValues = {
  name: " ",
  email: " ",
  password: " ",
  confirmpassword: " ",
  comments: " ",
  address: " ",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumber: [" ", " "],
  phoneNu: [""],
};

// onSubmit post data...
const onSubmit = (values) => {
  console.log(" Form Values .... ", values);
};

// validtion on click.....
const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string("Invalid email format").required("Required!"),
  password: Yup.string().required("Required"),
  confirmpassword: Yup.string().required("Required"),
});

export const RegisterationForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnBlur={false}
      validateOnChange={false}
    >
      <Form>
        {/* name */}
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component={Texterror} />
        </div>

        {/* email */}
        <div className="form-control">
          <label htmlFor="email">email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component={Texterror}>
            {(errorMessage) => <div className="error">{errorMessage}</div>}
          </ErrorMessage>
        </div>

        {/* password */}
        <div className="form-control">
          <label htmlFor="name">password</label>
          <Field type="text" id="password" name="password" />
          <ErrorMessage name="password" component={Texterror} />
        </div>

        {/* confirmpassword */}
        <div className="form-control">
          <label htmlFor="confirmpassword">Confirm password</label>
          <Field type="text" id="confirmpassword" name="confirmpassword" />
          <ErrorMessage name="confirmpassword" component={Texterror} />
        </div>

        {/* comments */}
        <div className="form-control">
          <label htmlFor="comments">comments</label>
          <Field as="textarea" id="comments" name="comments" />
          <ErrorMessage name="comments" />
        </div>

        {/* address */}
        <div className="form-control">
          <label htmlFor="address">address</label>
          <FastField name="address">
            {(props) => {
              const { field, meta, form } = props;
              console.log(form.error);
              return (
                <div>
                  <input type="text" id="address" {...field} />
                  {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                </div>
              );
            }}
          </FastField>
        </div>

        {/* facebook nested object */}
        <div className="form-control">
          <label htmlFor="facebook">Facebook</label>
          <Field type="text" id="facebook" name="social.facebook" />
          <ErrorMessage name="facebook" />
        </div>

        {/* twitter nested object */}
        <div className="form-control">
          <label htmlFor="twitter">Twitter</label>
          <Field type="text" id="twitter" name="social.twitter" />
          <ErrorMessage name="twitter" />
        </div>

        {/* phone number primary */}
        <div className="form-control">
          <label htmlFor="primaryCell">Primary Cell Number</label>
          <Field type="text" id="primaryCell" name="phoneNumber[0]" />
        </div>

        {/* phone number secondary */}
        <div className="form-control">
          <label htmlFor="secondayCell">Secondary Cell Number</label>
          <Field type="text" id="secondayCell" name="phoneNumber[1]" />
        </div>

        {/* Field Array*/}
        <div className="form-control">
          <label>Numbers list</label>
          <FieldArray name="phoneNu">
            {(fieldArrayProps) => {
              const { push, remove, form } = fieldArrayProps;
              const { values } = form;
              const { phoneNu } = values;
              return (
                <div>
                  {phoneNu.map((phoneN, index) => {
                    return (
                      <div key={index}>
                        <Field name={`phoneNu[${index}]`} />
                        {index > 0 && (
                          <button onClick={() => remove(index)}>-</button>
                        )}
                        <button onClick={() => push("")}>+</button>
                      </div>
                    );
                  })}
                  ``
                </div>
              );
            }}
          </FieldArray>
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
