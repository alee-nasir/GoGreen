import { Formik } from "formik";
import React from "react";

function FormComponent({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
}

export default FormComponent;
