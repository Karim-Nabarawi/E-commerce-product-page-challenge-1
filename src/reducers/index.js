import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import lightBoxReducer from "./lightBoxReducer";

const rootReducer = combineReducers({
  lightBox: lightBoxReducer,
  cart: cartReducer,
});

export default rootReducer;
