import SafeAreaScreen from "./app/components/SafeAreaScreen";
import * as ImagePicker from "expo-image-picker";

import { useEffect, useState } from "react";
import { Button, Image } from "react-native";
import ImageComponent from "./app/components/ImageComponent";

export default function App() {
  const [imagePath, setImagePath] = useState();

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert("You need to enable permission");
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled) setImagePath(result.assets[0].uri);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaScreen>
      <Button title="Select Image" onPress={selectImage} />
      <Image source={{ uri: imagePath }} style={{ width: 200, height: 200 }} />
      <ImageComponent imagePath={imagePath} />
    </SafeAreaScreen>
  );
}
