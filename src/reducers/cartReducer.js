const initState = {
  hidden: true,
  itemCount: 0,
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case "TOGGLE_CART_HIDDEN":
      return {
        ...state,
        hidden: !state.hidden,
      };

    case "CHANGE_ITEM_COUNT":
      return {
        ...state,
        itemCount: action.payload.itemCount,
      };
    default:
      return { ...state };
  }
};

export default cartReducer;
