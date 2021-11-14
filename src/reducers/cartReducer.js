const initState = {
  hidden: true,
  items: [],
  itemCount: 0,
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case "TOGGLE_CART_HIDDEN":
      return {
        ...state,
        hidden: !state.hidden,
      };

    case "ADD_CART_ITEM":
      return {
        ...state,
        items: addItem(state.items, action.payload),
        // itemCount: updateItemCount(state.items),
      };
    default:
      return { ...state };
  }
};

export default cartReducer;

const addItem = (cart, item) => {
  const foundItem = cart.filter((cartItem) => {
    return cartItem.id === item.id;
  });
  if (foundItem.length > 0) cart[0].count += item.count;
  else cart.push(item);

  return cart;
};

const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id);
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

const updateItemCount = (cart) => {
  let count = 0;
  cart.map((item) => (count += item.count));
  return count;
};
