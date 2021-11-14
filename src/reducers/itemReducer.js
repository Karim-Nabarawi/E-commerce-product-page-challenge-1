const initState = {
  id: null,
  title: "",
  price: null,
  mainImage: null,
  images: [],
};

const lightBoxReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_ITEM":
      return {
        ...state,
        ...action.payload,
      };

    default:
      return { ...state };
  }
};

export default lightBoxReducer;
