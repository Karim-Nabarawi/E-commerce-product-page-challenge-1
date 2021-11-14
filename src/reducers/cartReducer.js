const initState = {
  hiddenCart: true,
  items: [],
  itemCount: 0,
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case "TOGGLE_CART_HIDDEN":
      return {
        ...state,
        hiddenCart: !state.hiddenCart,
      };

    case "ADD_CART_ITEM":
      return {
        ...state,
        items: addItemToCart(state.items, action.payload),
      };
    case "UPADTE_CART_COUNT":
      return {
        ...state,
        itemCount: updateItemCount(state.items),
      };
    default:
      return { ...state };
  }
};

export default cartReducer;

const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id);
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + cartItemToAdd.quantity }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: cartItemToAdd.quantity }];
};

const updateItemCount = (cart) => {
  let count = 0;
  cart.map((item) => (count += item.quantity));
  return count;
};
