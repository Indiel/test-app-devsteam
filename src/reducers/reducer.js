const initialState = {
  images: [],
  isImagesLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'IMAGES_LOADING':
      return {
        ...state,
        isImagesLoading: action.payload,
      };
    
    case 'FETCH_IMAGES_SUCCESS':
      return {
        ...state,
        images: action.payload,
        isImagesLoading: false,
        isError: false,
      };

    case 'FETCH_IMAGES_ERROR':
      return {
        ...state,
        isImagesLoading: false,
        isError: true,
      };
  
    default:
      return state;
  }
}

export default reducer;
