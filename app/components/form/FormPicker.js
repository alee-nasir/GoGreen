import React from "react";
import { useFormikContext } from "formik";

import PickerComponent from "../PickerComponent";
import ErrorMessage from "./ErrorMessage";

function FormPicker({
  items,
  name,
  numberOfColumns,
  placeholder,
  width = "100%",
  CustomPickerItem,
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <PickerComponent
        items={items}
        numberOfColumns={numberOfColumns}
        onSelectItem={(item) => setFieldValue(name, item)}
        CustomPickerItem={CustomPickerItem}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormPicker;
