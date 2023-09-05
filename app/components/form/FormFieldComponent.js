import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import Text_Input from "../Text_Input";

function FormFieldComponent({ name, width, ...otherProps }) {
  const { setFieldTouched, setFieldValue, errors, touched, values } =
    useFormikContext();

  return (
    <>
      <Text_Input
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values.name}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormFieldComponent;
