import React from "react";
import ImageComponentList from "./ImageComponentList";
import ErrorMessage from "./form/ErrorMessage";
import { useFormikContext } from "formik";

function FormImageComponent({ name }) {
  const { setFieldTouched, setFieldValue, errors, touched, values } =
    useFormikContext();
  const imagePaths = values[name];

  const handleAdd = (uri) => {
    setFieldValue(name, [...imagePaths, uri]);
  };

  const handleRemove = (uri) => {
    setFieldValue(
      name,
      imagePaths.filter((imagePath) => imagePath !== uri)
    );
  };

  return (
    <>
      <ImageComponentList
        imagePaths={imagePaths}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormImageComponent;
