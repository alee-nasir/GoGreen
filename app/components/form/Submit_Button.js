import React from "react";
import { useFormikContext } from "formik";

import ButtonUi from "../ButtonUi";

function Submit_Button({ title }) {
  const { handleSubmit } = useFormikContext();

  return <ButtonUi title={title} onPress={handleSubmit} />;
}

export default Submit_Button;
