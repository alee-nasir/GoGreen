import React, { useRef } from "react";
import { View, StyleSheet } from "react-native";
import ImageComponent from "./ImageComponent";
import { ScrollView } from "react-native";

function ImageComponentList({ imagePaths = [], onRemoveImage, onAddImage }) {
  const scrollView = useRef();

  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal
        showsHorizontalScrollIndicator={false}
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {imagePaths.map((uri) => (
            <ImageComponent
              imagePath={uri}
              key={uri}
              onChangeImage={() => onRemoveImage(uri)}
            />
          ))}
          <ImageComponent onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});

export default ImageComponentList;
