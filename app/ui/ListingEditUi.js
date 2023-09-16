import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  FormComponent,
  FormFieldComponent,
  FormPicker,
  Submit_Button,
} from "../components/form";
import SafeAreaScreen from "../components/SafeAreaScreen";
import CategoryPicker from "../components/CategoryPicker";
import FormImageComponent from "../components/FormImageComponent";
import useLocation from "../customHooks/useLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select atleast one image"),
});

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Others",
    value: 9,
  },
];

function ListingEditUi() {
  const location = useLocation();
  return (
    <SafeAreaScreen style={styles.container}>
      <FormComponent
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={(values) => console.log(location)}
        validationSchema={validationSchema}
      >
        <FormImageComponent name="images" />
        <FormFieldComponent maxLength={255} name="title" placeholder="Title" />
        <FormFieldComponent
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={150}
        />
        <FormPicker
          items={categories}
          name="category"
          numberOfColumns={3}
          CustomPickerItem={CategoryPicker}
          placeholder="Category"
          width="50%"
        />
        <FormFieldComponent
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <Submit_Button title="Post" />
      </FormComponent>
    </SafeAreaScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditUi;
