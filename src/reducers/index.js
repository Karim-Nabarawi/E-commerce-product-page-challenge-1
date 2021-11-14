import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import itemReducer from "./itemReducer";
import lightBoxReducer from "./lightBoxReducer";

const rootReducer = combineReducers({
  lightBox: lightBoxReducer,
  cart: cartReducer,
  itemData: itemReducer,
});

export default rootReducer;
