const initState = {
  hidden: true,
};

const lightBoxReducer = (state = initState, action) => {
  switch (action.type) {
    case "TOGGLE_LIGHT_BOX_HIDDEN":
      return {
        ...state,
        hidden: !state.hidden,
      };

    default:
      return { ...state };
  }
};

export default lightBoxReducer;
