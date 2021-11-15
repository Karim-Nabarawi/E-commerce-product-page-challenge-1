export const toggleCartHidden = () => async (dispatch) => {
  dispatch({
    type: "TOGGLE_CART_HIDDEN",
  });
};

export const addItemToCart = (data) => async (dispatch) => {
  dispatch({
    type: "ADD_CART_ITEM",
    payload: data,
  });
  dispatch(updateItemCount());
};

export const updateItemCount = () => async (dispatch) => {
  dispatch({
    type: "UPADTE_CART_COUNT",
  });
};

export const removeItemFromCart = (item) => async (dispatch) => {
  dispatch({
    type: "REMOVE_CLEAR_ITEM",
    payload: item,
  });
  dispatch(updateItemCount());
};
