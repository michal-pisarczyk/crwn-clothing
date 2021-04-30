import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryMenuReducer from "./directory-menu/directory-menu.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // local storage - not session storage

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directoryMenu: directoryMenuReducer
});

export default persistReducer(persistConfig, rootReducer);
