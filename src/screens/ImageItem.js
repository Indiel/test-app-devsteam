import React from 'react';
import { ScrollView, Image, StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get('window');
const imagesWidth = window.width;

const ImageItem = ({ route }) => {
  const { image } = route.params;

  const imagesHeight = (image.height * imagesWidth * 100) / (100 * image.width);

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{uri: image.urls.raw}}
        style={{
          ...styles.image,
          height: imagesHeight
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFE3CD'
  },
  image: {
    width: imagesWidth,
  },
});

export default ImageItem;
