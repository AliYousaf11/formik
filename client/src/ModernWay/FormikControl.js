import React from "react";
import { Input } from "./Input";
import { Textarea } from "./Textarea";
import { Select } from "./Select";
import { RadioButton } from "./RadioButton";
import { Check } from "./Check";
//.....
export const FormikControl = (props) => {
  const { control, ...rest } = props;

  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <RadioButton {...rest} />;
    case "checkbox":
      return <Check {...rest} />;
    case "date":
    default:
      return null;
  }
};
