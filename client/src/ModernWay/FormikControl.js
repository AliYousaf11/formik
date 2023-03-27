import React from "react";
import { Input } from "./Input";
export const FormikControl = (props) => {
  const { control } = props;

  switch (control) {
    case "input":
      return <Input />;
    case "textarea":
    case "check":
    case "date":
    case "radio":
    case "select":
    default:
      return null;
  }
};
