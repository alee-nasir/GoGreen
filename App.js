import SafeAreaScreen from "./app/components/SafeAreaScreen";
import * as ImagePicker from "expo-image-picker";

import { useState } from "react";
import ImageComponentList from "./app/components/ImageComponentList";

export default function App() {
  const [imagePaths, setImagePaths] = useState([]);

  const handleAdd = (uri) => {
    setImagePaths([...imagePaths, uri]);
  };

  const handleRemove = (uri) => {
    setImagePaths(imagePaths.filter((imagePath) => imagePath !== uri));
  };
  return (
    <SafeAreaScreen>
      <ImageComponentList
        onChangeImage={(uri) => setImagePaths(uri)}
        imagePaths={imagePaths}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
    </SafeAreaScreen>
  );
}
