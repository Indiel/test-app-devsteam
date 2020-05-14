import getImages from "../services/image-service";

export const fetchImagesSuccess = (images) => { return { type: 'FETCH_IMAGES_SUCCESS', payload: images };};
export const fetchImagesError = (err) => { return { type: 'FETCH_IMAGES_ERROR', payload: err };};
export const imagesLoading = (bool) => { return { type: 'IMAGES_LOADING', payload: bool };};

export const fetchImages = () => {
  return (dispatch) => {
    dispatch(imagesLoading(true));
    
    getImages()
      .then((images) => {
        dispatch(imagesLoading(false));
        dispatch(fetchImagesSuccess(images))
      })
      .catch((err) => dispatch(fetchImagesError(err)));
  }
};