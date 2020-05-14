import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const window = Dimensions.get('window');
const imagesWidth = window.width - 20;

const ImageCard = ({ image, onOpen })=> {
  const imagesHeight = (image.height * imagesWidth * 100) / (100 * image.width);

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={1} onPress={() => onOpen(image)}>
        <Image
          source={{uri: image.urls.small}}
          style={{
            ...styles.image,
            height: imagesHeight
          }}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text>{image.user.name}</Text>
        <Text>{image.description || image.alt_description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  image: {
    width: imagesWidth,
  },
  textContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
});

export default ImageCard;
