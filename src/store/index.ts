import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { configureStore } from "@reduxjs/toolkit";

import rootAuth from "./duck/auth";

const store = configureStore({
  reducer: {
    auth: rootAuth,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector