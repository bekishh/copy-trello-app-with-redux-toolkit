import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/slices/auth-slice";
import listsReducer from "../redux/slices/lists-slice";
import modalReducer from "../redux/slices/modal-slice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    lists: listsReducer,
    modal: modalReducer,
  },
});
