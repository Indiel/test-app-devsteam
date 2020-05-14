import React, { useEffect } from 'react';
import { Text, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import { fetchImages } from '../actions/actions';
import ImageCard from '../components/ImageCard';

const ImageList = ({ navigation, images, isError, isImagesLoading, getFetchImages }) => {
  useEffect(() => {
    getFetchImages();
  }, []);

  const onImageOpen = (image) => {
    navigation.navigate('Image', { image });
  }

  const error = isError ? <Text style={styles.loader}>Something went wrong(</Text> : undefined;
  const loader = isImagesLoading ?  <ActivityIndicator size="large" color="#ffa851" style={styles.loader} /> : undefined;

  const elements = images.length > 0
    ? images.map((item) => {
      return (
        <ImageCard
          onOpen={onImageOpen}
          navigation={navigation}
          image={item}
          key={item.id}
        />
      );
    })
    : undefined;

  return (
    <ScrollView style={styles.container}>
      { loader || error || elements }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: '#FFE3CD',
  },
  loader: {
    margin: 20
  }
});

const mapStateToProps = (state) => {
  return {
    images: state.images,
    isError: state.isError,
    isImagesLoading: state.isImagesLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFetchImages: () => dispatch(fetchImages()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageList);
